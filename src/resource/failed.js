var closeSdk = require('./cancel')
var files = require('./important.json')


module.exports = async function failed(errMsg) {

    var ifrm = document.getElementById('xendSdkIframe')
    let baseHtml = ifrm.contentWindow.document
    baseHtml.body.innerHTML = `  <div class = '' >
    <div class="app-main alert-content col-lg-4 col-md-12 col-sm-12">
        
        <div class="app-main__outer">
        <div class="app-main__inner">
        <div class=" d-lg-block">
            <div class=" mb-3 widget-content ">
                <div class="widget-content-wrapper text-white">
                    <div class="widget-content-left">
                        <img alt='xend logo' src="${files.assetHost}Group 1789.png"/>
                    </div>
                    
                </div>
            </div>
        </div>
            <div class="app-inner-layout">
                <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner ">
                        <div class="menu-header-content">
                            <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                                <img
                                src="${files.assetHost}failure.png"
                                alt="success">
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>   
                <p class='text-center failure'> Operation failed</p>  
                
                <div class = 'row'>
                    <div class = "col-xl-12 col-12"  >  
                        <button id = 'cancel' class="mb-2 mr-2 btn btn-shadow btn-primary btn-lg btn-block">CLOSE</button>
                        <p class = 'errMsg'>${errMsg == '' ? 'Sorry, This action could not be completed' : errMsg} </p>
                    </div>
                </div>
            </div>
            
                
                
        </div>
        
    </div>
     </div>  
</div>`


    var cancel = baseHtml.getElementById('cancel')
    cancel.addEventListener('click', function () {
        closeSdk();
    });



}
