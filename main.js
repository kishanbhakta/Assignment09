$('section').on ('click', function() {
  $('section').removeClass('firstSection');
  $(this).addClass('firstSection')
});

// This makes my firstSection to be on and other sections to be off.
// When I click on the 2nd section it removes the class to firstSection and 3rd
// Same applies to the 3rd section