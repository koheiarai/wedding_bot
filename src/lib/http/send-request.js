'use strict';

const request = require('request');
// const SmartResponse = require(__base + 'http/smart-response');

// TODO: process.env.MAX_RETRIESを追加
// TODO: process.env.NO_RETRY_STATUS_CODEを追加
// TODO: process.env.RETRY_INTERVAL_MSECを追加
const maxReries = (process.env.MAX_RETRIES || 5) + 1;
const noRetryStatusCode = process.env.NO_RETRY_STATUS_CODE || 0;
const retryIntervalMSec = process.env.RETRY_INTERVAL_MSEC || 3000;

/**
 * リクエストを送信する。
 * statuscodeが200番台以外の場合にはリトライを行う。
 * @param {options} options
 */
// function *sendRequest(options) {
//     let response = null;
//     for (let i = 0; i < maxReries; i++) {
//         // if (i > 0) {
//         //     yield Time.timeSleep(retryIntervalMSec);
//         // }
//         response = yield _request(options);
//         let code = response.getStatusCode();
//         // Logger.debug("status code: " + code);
//         //statuscodeが呼び出し元によって指定された番号もしくは、500番台以外の場合はリトライしない
//         if (code === noRetryStatusCode || code < 500) {
//             break;
//         }
//     }
//     return response;
// }
// Http request
function _request(options) {
    const stack = (new Error().stack);
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(`${stack}\n${error.stack}\noptions: ${JSON.stringify(options)}\nbody: ${JSON.stringify(body)}`);
                return;
            }
            resolve(response); // リスポンスを返す
        });
    });
}

// function _request(options) {
//     const stack = (new Error().stack);
//     // Logger.debug("Options: " + JSON.stringify(options));
//     return new Promise((resolve, reject) => {
//         request(options, (error, response, body) => {
//             if (error) {
//                 reject(`${stack}\n${error.stack}\noptions: ${JSON.stringify(options)}\nbody: ${JSON.stringify(body)}`);
//                 return;
//             }
//             resolve(new SmartResponse(body, response, options)); // リスポンスを返す
//         });
//     });
// }

module.exports = _request;
