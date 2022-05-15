$(function() {
    // Load the plugin
    $("input[type=file]").bootstrapFileInput();
    
      $(".js-addfileupload").click( function (e) {
          e.preventDefault(e);
      // Create unique ID for the element
      var elid = new Date().getTime();
      // Assign the id and call the plugin
          $(".js-fileuploads").append("<input type=\"file\" id=\"js-file-" + elid + "\" name=\"attachments[]\" class=\"form-control\" accept=\"image/*\">");
         $("#js-file-" + elid).bootstrapFileInput();
          return false;
    });
});


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
   
   var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})