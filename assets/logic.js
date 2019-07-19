// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_lDfeInyEDAlRwnXj0Vuc-HuEgXdorrc",
    authDomain: "homework-207e1.firebaseapp.com",
    databaseURL: "https://homework-207e1.firebaseio.com",
    projectId: "homework-207e1",
    storageBucket: "",
    messagingSenderId: "581801717131",
    appId: "1:581801717131:web:b4421c03537e6359"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var destination = "";
var nextArrival = "";
var frequency = "" ;

// Search Button
$("#searchButton").on("click", function (event) {
    event.preventDefault();

    frequency = $("#frequencyInput").val().trim();
    destination = $("#destinationInput").val().trim();
    nextArrival = $("#nextArrivalInput").val().trim();
    trainName = $("#trainNameInput").val().trim();

    console.log(frequency);
    console.log(destination);
    console.log(nextArrival);
    console.log(trainName);

    database.ref().push({
        trainName: trainName,
        nextArrival: nextArrival,
        destination: destination,
        frequency: frequency
    });


    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val());
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().nextArrival);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().frequency);
  
        // Change the HTML to reflect
        $("#trainNameOutput").text(childSnapshot.val().trainName);
        $("#nextArrivalOutput").text(childSnapshot.val().nextArrival);
        $("#destinationOutput").text(childSnapshot.val().destination);
        $("#frequencyOutput").text(childSnapshot.val().frequency);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });


      //current time + frequencyInput 
      // var currentTime = 
      var a = moment([2007, 0, 28]);
      var b = moment([2007, 15, 28]);
      a.to(b) // "in a day"
      console.log(a.to(b));
      // put in nextArrivalOutput 
});
