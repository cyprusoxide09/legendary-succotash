var firebaseConfig = {
    apiKey: "AIzaSyDgC9VcY9LMzszQzLbPGGpCsn22t5BPb0Y",
    authDomain: "kwitter-c27ac.firebaseapp.com",
    databaseURL: "https://kwitter-c27ac-default-rtdb.firebaseio.com",
    projectId: "kwitter-c27ac",
    storageBucket: "kwitter-c27ac.appspot.com",
    messagingSenderId: "454187842266",
    appId: "1:454187842266:web:6e4b12e9aa4f4bc9a883e3",
    measurementId: "G-5BPDCEQ19V"
  };
 
  
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    

    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}