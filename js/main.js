var addressBook = (function() {
    'use strict';
  var people = [{
    firstName: 'Olaf',
    lastName: 'Zimny',
    phone: '55678999',
      adress: 'Złota 9'
  }];
  
  var table = $('#table1');
  var tbody = table.find('tbody');
  var $firstName = table.find('#firstName');
  var $lastName = table.find('#lastName');
  var $phone = table.find('#phone');
     var $adress = table.find('#adress');
  var $button = table.find('#add');
  var $btnSave = table.find('#save');
  var $btnEdit = table.find('#edit');
  var $btnRemove = table.find('#remove');
  var $input = table.find(".edit");

  
  $button.on('click', addPerson);
  table.on('click', '#remove', deletePerson);
  /*table.on("click",'.edit' ,editPerson);*/
  console.log($input);
  _render();

  
  function _render() {
    tbody.html('');
    var length = people.length;
    for (var i = 0; i < length; i++) {
      table.prepend('<tr><td><input class="edit" type="text" value="' + people[i].firstName + '" ></td><td><input class="edit" type="text" value="' + people[i].lastName + '" ></td><td><input type="text" class="edit" value="' + people[i].phone + '" ></td><td><input type="text" class="edit" value="' + people[i].adress + '" ></td><td> <button id="remove" class="btn btn-block">X</button></td></tr>');
    }
  }

  
  function addPerson() {
    var person = {
      firstName: $firstName.val(),
      lastName: $lastName.val(),
      phone: $phone.val(),
      adress:$adress.val(),
    };
    people.push(person);
    $firstName.val('');
    $lastName.val('');
    $phone.val('');
    $adress.val('');
    _render()
  }

//  function deletePerson(event) {
//      var element = event.target.closest('tr');
//      var i = table.find('td').index(element);
//      people.splice(i, 1);
//      _render();
//      
//     
//    }
    
     function deletePerson(event) {
      var element = event.target.closest('tr');
      var i = table.find('td').index(element);
      people.splice(i, 1);
      _render();
      
     
    }
    
    
    
//    function oknoConfirm() {
//    if (remove('Czy jesteś pewien, że chcesz sunąc?')) {
//        alert('ok...');
//    } else {
//       
//};
//
//document.getElementById('confirm').addEventListener('click', function() {
//    oknoConfirm()
//});
//    
    
    
    
    /*
    function editPerson(event){
       var element=event.target.closest('tr');
    	var i=table.find('tr').index(element);
      var index = (table.find('tr').length -i)-1;
      console.log(element.firstChild());
      var person= {
      firstName: ,
      lastName: $lastName.val(),
      phone: $phone.val()
      };
        _render();
    }    
*/
    
    
    
    
    
    
  
    
    
  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  };

})();