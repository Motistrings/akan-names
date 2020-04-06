var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var maleKwasiNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
var femaleKwasiNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
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
  } else if (gender[0].checked == false && gender[1].checked == false) {
    alert("Choose male or female");
    return false;
  } else {
    return true;
  }
}
function findDayResult() {
  year = document.getElementById("year").value;
  Century = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  //parseInt to convert strings to numbers.
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d =
    (Century / 4 - 2 * Century - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) %
    7;
  console.log(d);
  //round off to the nearest integer
  return math.floor(d);
}
function getGender() {
  var genderChoice = document.getElementsByName("gender");
  if (genderChoice[0].checked == true) {
    var gender = "male";
  } else if (genderChoice[1].checked == true) {
    var gender = "female";
  } else {
    return false;
  }
  switch (gender) {
    case "male":
      if (dayResult == 1) {
        alert(
          "You were born on " +
            weekDays[0] +
            " and Your Male Akan Name is " +
            maleKwasiNames[0] +
            "."
        );
      } else if (dayResult == 2) {
        alert(
          "You were born on " +
            weekDays[1] +
            " and Your Male Akan Name is " +
            maleKwasiNames[1] +
            "."
        );
      } else if (dayResult == 3) {
        alert(
          "You were born on " +
            weekDays[2] +
            " and Your Male Akan Name is " +
            maleKwasiNames[2] +
            "."
        );
      } else if (dayResult == 4) {
        alert(
          "You were born on " +
            weekDays[3] +
            " and Your Male Akan Name is " +
            maleKwasiNames[3] +
            "."
        );
      } else if (dayResult == 5) {
        alert(
          "You were born on " +
            weekDays[4] +
            " and Your Male Akan Name is " +
            maleKwasiNames[4] +
            "."
        );
      } else if (dayResult == 6) {
        alert(
          "You were born on " +
            weekDays[5] +
            " and Your Male Akan Name is " +
            maleKwasiNames[5] +
            "."
        );
      } else if (dayResult == 0 || dayResult == -0) {
        alert(
          "You were born on " +
            weekDays[6] +
            " and Your Male Akan Name is " +
            maleKwasiNames[6] +
            "."
        );
      }
      break;
    case "female":
      if (dayResult == 1) {
        alert(
          "You were born on " +
            weekDays[0] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[0] +
            "."
        );
      } else if (dayResult == 2) {
        alert(
          "You were born on " +
            weekDays[1] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[1] +
            "."
        );
      } else if (dayResult == 3) {
        alert(
          "You were born on " +
            weekDays[2] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[2] +
            "."
        );
      } else if (dayResult == 4) {
        alert(
          "You were born on " +
            weekDays[3] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[3] +
            "."
        );
      } else if (dayResult == 5) {
        alert(
          "You were born on " +
            weekDays[4] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[4] +
            "."
        );
      } else if (dayResult == 6) {
        alert(
          "You were born on " +
            weekDays[5] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[5] +
            "."
        );
      } else if (dayResult == 0 || dayResult == -0) {
        alert(
          "You were born on " +
            weekDays[6] +
            " and Your Male Akan Name is " +
            femaleKwasiNames[6] +
            "."
        );
      }
      break;
    default:
  }
}
function findName() {
  dayResult = findDayResult();
  getGender();
}
