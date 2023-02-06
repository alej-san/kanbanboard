let counter = 0;
$( "#addpost" ).click(function() {
    $( "#draggable" ).after( "<div id='draggable' class='postit'><textarea></textarea></div>" );    
    $( ".postit" ).draggable();
    counter++;
  });

$( function() {
    $( "#draggable" ).draggable();
    $( ".board" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );             
          let newpost = {
          name : "post" + counter,
          status :  $( this ).contents("h3")[0].innerHTML,
          message : ui.draggable[0].lastElementChild.value
        }
        
        if(!savedpost.find(item => item == JSON.stringify(newpost))){
          if(savedpost.find(item => JSON.parse(item.name) == newpost.name)){
            savedpost.splice(item)
          }
          console.log(savedpost);
          savedpost.push(JSON.stringify(newpost));}
      }
    });
  } );

 

 let savedpost = []

