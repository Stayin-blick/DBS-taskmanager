document.addEventListener('DOMContentLoaded', function () {
  // side nav intialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // modal intialization
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);

  // datepicker intialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    autoClose: true,
    // format: "yyyy-mm-dd",
    i18n: {
      done: "Select"
    }
  });

  // form select intialization
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // collapsible initialization
  let collapsible = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsible);
});