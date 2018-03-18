'use strict';

const xmlparser = require('xml2js').parseString;
const String = require(__base + 'utils/string');

class SmartResponse {
    constructor(body, req, options) {
        if (typeof(body) === "string") {
            const jsonBody = String.convertStringToJson(body);
            if (jsonBody) {
                this.body = jsonBody;
            } else {
                xmlparser(body, (err, result)=> {
                    this.body = result ? result : body;
                });
            }
        } else {
            this.body = body;
        }
        this.headers = req.headers;
        this.statusCode = req.statusCode;
        this.options = options;
    }

    getBody() {
        return this.body;
    }

    getStatusCode() {
        return this.statusCode;
    }

    getHeaders() {
        return this.headers;
    }

    getContentType() {
        return this.headers['Content-Type'];
    }

    hasKey(str) {
        try {
            this.extract(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    extract(str) {
        const keys = str.split('.');
        let val = this.body;
        let index = null;
        let undefinedIndex = null;
        let undefinedKeys = '';
        for (let key of keys) {
            key = key.replace(/\[(?:(\d+)|(\w+)=\?)\]$/, (p1, p2)=> {
                undefinedIndex = p1;
                index = p2;
                return '';
            });
            if (key) {
                undefinedKeys += ('.' + key);
                try {
                    val = val[key];
                } catch (e) {
                    throw new Error(`Cannot read property '${undefinedKeys.replace(/./, '')}' of \n${JSON.stringify(this.body)}`);
                }
            }
            if(index) {
                undefinedKeys += undefinedIndex;
                try {
                    val = val[Number(index)];
                } catch (e) {
                    throw new Error(`Cannot read property '${undefinedKeys.replace(/./, '')}' of \n${JSON.stringify(this.body)}`);
                }
            }
        }
        return val;
    }

    validateStatusCodes(...expectedCodes) {
        if (expectedCodes.indexOf(this.statusCode) == -1) {
            throw new Error(`StatusCode expects to [${expectedCodes.join(', ')}] but '${this.statusCode}'.\n${JSON.stringify(this.options)}\n${JSON.stringify(this.body)}\n${JSON.stringify(this.headers)}`);
        }
    }
}

module.exports = SmartResponse;
