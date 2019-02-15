console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {

  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    let name = $('#nameIn').val();
    let age = $('#ageIn').val();
    let gender = $('#genderIn').val();
    let readyForTransfer = $('#readyForTransferIn').val();
    let notes = $('#notesIn').val();
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: name,
      age: age,
      gender: gender,
      readyForTransfer: readyForTransfer,
      notes: notes,
    };
    console.log('koala on click:', name, age, gender, readyForTransfer, notes,);
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({ // ajax go to server
    url: '/koalas',
    method: 'GET'//reqst to server           
  }).then(function (response) {
     $('#viewKoalas').empty();
    response.forEach(function (koala) {
      console.log('in loop GET getKoalas');
      $('#viewKoalas').append(`              
                    <tr id="trOutput">
                        <td>${koala.name}</td>
                        <td>${koala.age}</td>  
                        <td>${koala.gender}</td> 
                        <td>${koala.ready_to_transfer}</td>  
                        <td>${koala.notes}</td>                  
                    </tr>
                           `)
    })//end loop
  // ajax call to server to get koalas
  });
}// end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: newKoala
  }).then( function(){
    console.log('back from POST');
    getKoalas();
  }).catch( function(error) {
    alert('POST request failed', error);
  });
} // end saveKoala
