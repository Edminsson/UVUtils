var Riksarkivet;
(function (Riksarkivet) {
    var Utils;
    (function (Utils) {
        var AfterUrl = (function () {
            function AfterUrl() {
            }
            AfterUrl.SetUrlAfter = function (searchvalue, value, doc) {
                if (!doc) {
                    doc = window.document;
                }
                var url = doc.URL;
                var searchIndex = url.lastIndexOf(searchvalue);
                if (searchIndex === -1) {
                    return;
                }
                var startUrl = url.substr(0, searchIndex);
                var endUrl = url.substr(searchIndex);
                var indexAfter = endUrl.indexOf("?");
                if (indexAfter === -1) {
                    indexAfter = endUrl.indexOf("&");
                }
                if (indexAfter === -1) {
                    indexAfter = endUrl.indexOf("#");
                }
                if (indexAfter !== -1) {
                    endUrl = endUrl.substr(indexAfter);
                }
                else {
                    endUrl = "";
                }
                if (window.top.history.replaceState) {
                    window.top.history.replaceState(null, null, startUrl + searchvalue + value + endUrl);
                }
            };
            AfterUrl.loggaTillConsole = function (medd) {
                console.log(medd);
            };
            return AfterUrl;
        }());
        Utils.AfterUrl = AfterUrl;
    })(Utils = Riksarkivet.Utils || (Riksarkivet.Utils = {}));
})(Riksarkivet || (Riksarkivet = {}));
