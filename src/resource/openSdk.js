

module.exports = async function openSdk() {

    var iframe = document.createElement("iframe");
    iframe.id = 'xendSdkIframe'
    iframe.allowtransparency = "true"
    iframe.style.display = 'block'
    iframe.style.zIndex = 1
    iframe.style.position = 'fixed'
    iframe.style.left = 0
    iframe.style.right = 0
    iframe.style.bottom = 0
    iframe.style.overflow = 'auto'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    iframe.style.color = 'internal-root-color'
    iframe.style.backgroundColor = 'transparent'
    document.body.appendChild(iframe);

    var ifrm = document.getElementById('xendSdkIframe').contentWindow.document;
    var otherhead = ifrm.getElementsByTagName("head")[0];
    var link = ifrm.createElement("link");
    var link2 = ifrm.createElement("link");
    link.href = "https://cdn.jsdelivr.net/gh/ada-h/xendSdk/sdk.css";
    link.rel = "stylesheet";
    link2.rel = "stylesheet";
    link.type = "text/css";
    link2.type = "text/css";
    link2.href = "https://cdn.jsdelivr.net/gh/ada-h/xendSdk/main.cba69814a806ecc7945a.css";
    otherhead.appendChild(link);
    otherhead.appendChild(link2);

    var script = document.createElement("script");
    var script2 = document.createElement("script")
    script2.src = "https://sandbox.sdk.monnify.com/plugin/monnify.js";
    script.src = "https://js.paystack.co/v1/inline.js";
    document.head.appendChild(script);
    document.head.appendChild(script2);
    
}
