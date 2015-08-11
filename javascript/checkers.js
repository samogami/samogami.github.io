function checkFirst(event) {
     var node = getTarget(event);
     var result;
     
     if( node.value == "" ) {
       var result =  "You must enter your first name";
      } else {
       result = ""; 
      } // endif

    showError(node, result);
    
    return stopPropagation( event);

}

function checkLast(event) {
     var node = getTarget(event);
     var result;
     
     if( node && node.value == "" ) {
       result =  "You must enter your last name";
      } else {
       result = ""; 
      } // endif


    showError(node, result);
    
    return stopPropagation( event);

}
  function showError(node, message) {
    var id = node.id + "_error";
      
    var node_error = document.getElementById( id );
      
    if( node_error )
          node_error.innerHTML = message;
            
     if( message == "" ) {
         node.setAttribute('aria-invalid', 'false');
         node_error.style.display = "none";
      } else {
        node.setAttribute('aria-invalid', 'true');
        node_error.style.display = "inline";
      }
                
    }


   function getTarget( event ) {
     var e = event || window.event;
     
     if( e.target )
         return e.target;
      else
         return e.srcElement;
}

   function stopPropagation( event ) {
   
      if( event.stopPropagation )
         event.stopPropagation();
         
      if( event.preventDefault )
        event.preventDefault();

     if( event.cancelBubble)
       event.cancelBubble = true;

    if(event.returnValue)
       event.returnValue = false;

    return false;
}




