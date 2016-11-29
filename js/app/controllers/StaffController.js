function StaffController() {
  var vm = this;

  vm.name = 'Sancho Panza';
  vm.email = 'spanza@gmail.com';
  vm.phone = '555-982-1387';
}

angular
  .module('app')
  .controller('StaffController', StaffController)