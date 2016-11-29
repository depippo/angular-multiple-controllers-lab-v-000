function ContactController() {
  var vm = this;

  vm.name = 'Don Quixote';
  vm.email = 'dquixote@gmail.com';
  vm.phone = '555-765-4321';
 
  this.changeName = function () {
    vm.name = 'Alonso';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController)