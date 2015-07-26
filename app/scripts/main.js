(function () {
  'use strict';
  $( document ).ready(function() {
    $('.slider').slider({});
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.materialize-textarea').characterCounter();
    $('select').material_select();
  });
})();
