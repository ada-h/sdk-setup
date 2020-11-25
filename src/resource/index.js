var openSdk = require("./openSdk");
var closeSdk = require("./cancel");
var files = require("./important.json");

module.exports = function sdkStart() {
  openSdk();
  var ifrm = document.getElementById("xendSdkIframe");
  let baseHtml = ifrm.contentWindow.document;
  baseHtml.body.innerHTML = `
        <div class = ''>
            <div class="app-main alert-content col-lg-4 col-md-12 col-sm-12">
                <div class="app-main__outer">
                    <div class="app-main__inner"> Hello  World!
                        <button class="mb-2 mr-2 btn btn-shadow btn-outline-primary btn-lg btn-block " id='cancel'>CLOSE SDK</button>
                    </div>
                </div> 
            </div> 
        </div> >`;

  var cancel = baseHtml.getElementById("cancel");
  cancel.addEventListener("click", function () {
    closeSdk();
  });
};
