

module.exports = async function closeSdk(){
    var iframe = document.getElementById('xendSdkIframe');
    iframe.parentNode.removeChild(iframe);

}
