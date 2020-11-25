
var closeSdk = require('../resource/cancel')
var files = require('./important.json')

module.exports = async function success(receiverName, receiverXendCode, amount) {

    var ifrm = document.getElementById('xendSdkIframe')
    let baseHtml = ifrm.contentWindow.document
    baseHtml.body.innerHTML = `  
    <div class = ''>
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
                                
                                src="${files.assetHost}success.png"
                                alt="success">
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>   
                <p class='text-center success'> Successful!</p>  
                <div class="row">   
                                          
                    <div class=" d-lg-block col-md-12 col-xl-12">
                          
                        <div class=" mb-3 widget-content successColor ">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="widget-heading details">Details</div>
                                    
                                    <p class="successDetails"> To ${receiverName} <br/>
                                    Xend Code: ${receiverXendCode}</p>
                                    <p class="successDetails"> Amount Paid <br/> NGN ${amount} </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class = 'row'>
                    <div class = "col-xl-12 col-12"  >  
                        <button class="mb-2 mr-2 btn btn-shadow btn-primary btn-lg btn-block" id='cancel'>CLOSE</button>
                       
                    </div>
                </div>
            </div>
            <p class='poweredby mt-3'> Powered by XendPay</p>
                
                
        </div>
    
       
    
        
    </div>
    </div>   
</div>`

  
    var cancel = baseHtml.getElementById('cancel')
    cancel.addEventListener('click', function () {
        closeSdk();
    });



}
