var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var maleKwasiNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
var femaleKwasiNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];
var Century, YY, MM, DD, d, dayResult;

function validate() {
  var gender = document.getElementsByName("gender");
  if (
    document.myForm.year.value == "" ||
    document.myForm.year.value.length != 4 ||
    document.myForm.year.value > 2020 ||
    document.myForm.year.value < 1900
  ) {
    alert("Invalid! please enter a valid year of birth");
    document.myForm.year.focus();
    return false;
  } else if (
    (document.myForm.month.value =
      "" ||
      document.myForm.month.value.length != 2 ||
      document.myForm.month.value > 12 ||
      document.myForm.month.value <= 0 ||
      isNaN(document.myForm.month.value))
  ) {
    alert("Invalid! please enter month between 1 and 12");
    document.myForm.month.focus();
    return false;
  } else if (
    document.myForm.date.value > 31 ||
    document.myForm.date.value <= 0 ||
    isNaN(document.myForm.date.value) ||
    document.myForm.date.value.length != 2
  ) {
    alert("Invalid! please enter date between 1 and 31");
    document.myForm.date.focus();
    return false;
  }
}
