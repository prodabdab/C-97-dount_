var firebaseConfig = {
      apiKey: "AIzaSyDs-sp97c_ePGt21SlXzBGAhhFgPMzzvE4",
      authDomain: "kwitter-376f2.firebaseapp.com",
      databaseURL: "https://kwitter-376f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-376f2",
      storageBucket: "kwitter-376f2.appspot.com",
      messagingSenderId: "72847565131",
      appId: "1:72847565131:web:681104a2fb58f7103f48ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

    username=localStorage.getItem("username");
    document.getElementById('welcom2').innerHTML=username;
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
              console.log(Room_names);
              row = "<div class='Room_name_created' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
              document.getElementById("output").innerHTML += row;
          //End cod
          });});}
    getData();
    
    function redirectToRoomName(name){
          localStorage.setItem("room_name", name);
          window.location="Lets_chat_page.html";
    }
    
    function Button_Logout() {
          localStorage.removeItem("username");
          window.location="Lets_chat_coding.html";
          localStorage.removeItem("room_name");
    }
    
    function roomcreate() {
          room_add= document.getElementById("roomname").value;
          firebase.database().ref("/").child(room_add).update({
              purpose:"addingroom_name"
          });
          localStorage.setItem("room_name" , room_add);
          window.location="Lets_chat_page.html";
    }
    