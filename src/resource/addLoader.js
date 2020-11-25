module.exports = function addLoader (){
    var ifrm = document.getElementById('xendSdkIframe');
    let baseHtml = ifrm.contentWindow.document
    var loader = baseHtml.getElementsByClassName('myLoader')[0];
    loader.innerHTML = `
    <div class= 'loadBody'>
        <div class="d-flex justify-content-center align-items-center">
            <div class="loader">
                <div class="ball-scale-multiple">
                    <div style="background-color: #003399;"></div>
                    <div style="background-color: #003399;"></div>
                    <div style="background-color: #003399;"></div>
                </div>
            </div>
        </div>
    </div>
    `
}
 
