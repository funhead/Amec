function changeBackgroundUrlToAbsolute(id)
{
    var elementToChange = document.getElementById(id);
    var absoluteBackgroundCSSValue = window.getComputedStyle(elementToChange, null).getPropertyValue('background-image');
    elementToChange.style.backgroundImage = absoluteBackgroundCSSValue;
}

function addRequiredPageBreaks()
{
    $('#Stage_Questions-Timeline_results_level_bg').css('page-break-after','always');
}

function downloadPDF(data, user_credentials){
  url = 'http://docraptor.com/docs';
  //url and data options required
  if( url && data ){
    jQuery('<form target="_top" style="display:none" id="dr_submission" action="' + url
           + '" method="post">'
           + '</form>').appendTo('body');
    //credentials
    jQuery('form#dr_submission').append('<textarea name="user_credentials"></textarea>');
    jQuery('form#dr_submission textarea[name=user_credentials]').val(user_credentials);

    //doc values
    for(var key in data) {
      if(key == "prince_options"){
        for(var prince_key in data.prince_options){
          jQuery('form#dr_submission').append('<textarea name="doc[prince_options]['+prince_key+']"></textarea>');
          jQuery('form#dr_submission textarea[name="doc[prince_options]['+prince_key+']"]').val(data.prince_options[prince_key]);
        }
      } else {
        jQuery('form#dr_submission').append('<textarea name="doc['+key+']"></textarea>');
        jQuery('form#dr_submission textarea[name="doc['+key+']"]').val(data[key]);
      }
    }

    //submit the form
    jQuery('form#dr_submission').submit().remove();
  }
}

function getStyles() {

    var templateDir = aif_constants.templateDir || "";
    return ".background-red{background-color:#d50046}.background-dark-red{background-color:#8e002f}.background-pale-red{background-color:#ffd5e3}.background-yellow{background-color:#ff9a31}.background-dark-yellow{background-color:#e97700}.background-pale-yellow{background-color:#fff2e4}.background-green{background-color:#00c394}.background-dark-green{background-color:#007c5e}.background-pale-green{background-color:#c3fff1}.background-light_blue{background-color:#0090ff}.background-dark-light_blue{background-color:#0068b8}.background-pale-light_blue{background-color:#cce9ff}.background-dark_blue{background-color:#0072af}.background-dark-dark_blue{background-color:#004368}.background-pale-dark_blue{background-color:#afe3ff}.background-purple{background-color:#8a00b6}.background-dark-purple{background-color:#54006f}.background-pale-purple{background-color:#edb6ff}@page{size:A4;margin:0;padding:1cm;background:#fff}#printableFrameworkSummary{font-family:lato,Roboto,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#fff}#printableFrameworkSummary *{box-sizing:border-box}.aif-p-page-break{page-break-after:always}table{width:100%}tr.spacer-row td{height:15px}h1{color:#fffbfb;text-align:center;background-color:#b0c5d4;padding:10px;position:relative;margin-bottom:10px;font-size:1.3em}h1 .em{font-style:italic}.section-header{width:49px;background-color:gray}.section-header .label{width:49px;background-repeat:no-repeat}.section-header .label.prep{background-image:url(" + templateDir + "/images/ss-header-1.png);height:377px}.section-header .label.imp{background-image:url(" + templateDir + "/images/ss-header-2.png);height:377px}.section-header .label.mes{background-image:url(" + templateDir + "/images/ss-header-3.png);height:434px}th{text-transform:uppercase}.summary-box{height:210px;padding:10px;vertical-align:top;color:#404040;font-weight:400}.summary-box.half{width:50%}.summary-box.columns{-webkit-columns:300px 2;-moz-columns:300px 2;columns:300px 2}.summary-box.imp{height:330px}.summary-box.out{height:380px}.summary-box .key{font-weight:700;float:left}.summary-box .value{margin-left:14px}";
    // return ".aif-p-12,.aif-p-3,.aif-p-6,.row,.summary-section,h1{position:relative}.imp .section-header,.mes .section-header,.prep .section-header{background-repeat:no-repeat;background-position-y:50%}@page{size:A4;margin:0;padding:1cm;background:#fff}#printableFrameworkSummary{font-family:lato,Roboto,Arial,sans-serif;font-size:14px;line-height:1.428571429;color:#fff;margin-left:10px;margin-right:10px;margin-top:10px}h1{color:#fffbfb;text-align:center;background-color:#b0c5d4;padding:10px;margin-bottom:10px;font-size:1.3em}h1 .em{font-style:italic}#printableFrameworkSummary *{box-sizing:border-box}.row{margin:0 -3px}.aif-p-3{width:25%;float:left;max-width:25%}.aif-p-6{width:50%;float:left;max-width:50%}.aif-p-12{width:100%;float:left;max-width:100%}.outer-row>.aif-p-12{margin-bottom:10px}.aif-p-page-break{page-break-after:always}.summary-section.prep{height:510px}.summary-section.imp{height:260px}.summary-section.mes{height:780px}.low-pad-row{margin-left:-3px;margin-right:-3px}.low-pad-cell{padding:0 3px}.summary-box{color:#404040;font-weight:400}.prep .section-header{height:613px;background-image:url(" + templateDir + "/images/ss-header-1.png)}.imp .section-header{height:301px;background-image:url(" + templateDir + "/images/ss-header-2.png)}.imp .summary-box{height:250px}.imp .aif-p-12 .summary-box{-webkit-columns:300px 2;-moz-columns:300px 2;columns:300px 2}.mes .section-header{height:1015px;background-image:url(" + templateDir + "/images/ss-header-3.png)}.mes .aif-p-taller .summary-box{height:340px}.mes .aif-p-12 .summary-box{-webkit-columns:300px 2;-moz-columns:300px 2;columns:300px 2}.section-header{background-color:#8a8a8a;width:34px;float:left;padding-top:160px;background-position:2px 0;background-size:contain}.section-content{margin-left:42px}.section-content h5.summary-heading{font-size:.8em;height:24px;line-height:24px;color:#fff;text-transform:uppercase;text-align:center;margin:0 0 4px;padding:0}.section-content h5.summary-heading.joined{margin-bottom:0}.section-content .summary-box{padding:4px 8px;min-height:250px}.summary-box .key{font-weight:700;float:left}.summary-box .value{margin-left:14px}.background-red{background-color:#d50046}.background-dark-red{background-color:#8e002f}.background-pale-red{background-color:#ffd5e3}.background-yellow{background-color:#ff9a31}.background-dark-yellow{background-color:#e97700}.background-pale-yellow{background-color:#fff2e4}.background-green{background-color:#00c394}.background-dark-green{background-color:#007c5e}.background-pale-green{background-color:#c3fff1}.background-light_blue{background-color:#0090ff}.background-dark-light_blue{background-color:#0068b8}.background-pale-light_blue{background-color:#cce9ff}.background-dark_blue{background-color:#0072af}.background-dark-dark_blue{background-color:#004368}.background-pale-dark_blue{background-color:#afe3ff}.background-purple{background-color:#8a00b6}.background-dark-purple{background-color:#54006f}.background-pale-purple{background-color:#edb6ff}";


}

/*

Page copy should be written to page by the template in a hidden element
Attempt to get page copy.  If null returned App will revert to a default copy

 */
function getRemotePageCopy(){

    try{

        var copyEl = jQuery("#aif-copy");
        if(copyEl && copyEl.length === 1){
            var copyJson = copyEl.html();
            var data = JSON.parse(copyJson);
            if(data && data["ST"]){
                return data;
            }
            return null;
        }

    } catch (ex){
        return null;
    }

}

function shepherd(){

    var tour;

    tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-theme-arrows',
            scrollTo: true
        }
    });

    tour.addStep('example-step', {
        text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
        attachTo: '.example-css-selector bottom',
        classes: 'example-step-extra-class',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.start();
}

function getEntireDom(title)
{
    title = title ? ' - ' + title : '';

    var pdfDOM = jQuery("html").clone();
    pdfDOM.find("head").replaceWith(jQuery("<head></head>").append(jQuery("<title>Amec Measurement Framework" + title + "</title>")));


    var frameWork = pdfDOM.find("#printableFrameworkSummary").clone();
    var newBody = jQuery("<body></body>").append(frameWork);

    pdfDOM.find("body").replaceWith(newBody);
    pdfDOM.find("head").append(jQuery("<style>" + getStyles() + "</style>"));
    return pdfDOM.html();
}

