'use strict';

class String {
    /**
     * stringをJSONで返す。
     * stringがシングルクォーテーション(')またはダブルクォーテーション(")で囲まれていた場合、
     * 変換できない場合はnullをreturnする。
     * @param {string} str
     */
    static convertStringToJson(str){
        try {
            return JSON.parse(str.replace(/^"|"$|^'|'$/g,''));
        } catch (e) {
            return null;
        }
    }

    /**
     * stringの改行を半角スペースに変換する。
     * 変換できない場合はnullをreturnする。
     * @param {string} str
     */
    static convertLineToBlank(str) {
        try {
            return str.replace('\n', ' ');
        } catch (error) {
            return null;
        }
    }

    // TODO 変換対応表の外出し
    static convertHtmlToText(str) {
        let li_count = 0;
        return str.replace(/<br>/g, "\n")
            .replace(/<li>(.*?)<\/li>/g,
                function () {
                    li_count++;
                    return "\n" + li_count + ". " + arguments[1];
                })
            .replace(/<a href="mailto:(.*?)".*>(.*?)<\/a>/g, " $1 ")
            .replace(/<a href="(.*?)".*>(.*?)<\/a>/g, " $1 ")
            .replace(/Japan Information Site/gi, " https://in.accenture.com/japan/#corporate-functions ")
            .replace(/TagBr/gi, "\n")
            .replace(/<.*?>/g, "");
    }

    // TODO 変換対応表の外出し
    static convertTextToHtml(str) {
        let message;
        message = str.replace(/TagBr/gi, "<br>")
            .replace(/Japan Information Site/gi, "<a href=\"https://in.accenture.com/japan/#corporate-functions\">Japan Information Site</a>");

        return `<body style='font-family: メイリオ,Meiryo,Meiryo UI; font-size: 9pt';>${message}</body>`;
    }
}

module.exports = String;