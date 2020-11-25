


module.exports = function removeLoader (){
    var ifrm = document.getElementById('xendSdkIframe')
    let baseHtml = ifrm.contentWindow.document
    var loader = baseHtml.getElementsByClassName('myLoader')[0];
    loader.innerHTML = ` `
}
 