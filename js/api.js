var firebaseConfig = {
  apiKey: "AIzaSyD9LszjYX9MyGRiUWMySUHK7WiLfqVEUkI",
  authDomain: "webapp-project-78b5f.firebaseapp.com",
  databaseURL: "https://webapp-project-78b5f.firebaseio.com",
  projectId: "webapp-project-78b5f",
  storageBucket: "webapp-project-78b5f.appspot.com",
  messagingSenderId: "202631904481",
  appId: "1:202631904481:web:ba886167b0153de0224ba0",
  measurementId: "G-VH50JJ542X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var region = document.querySelector("select");
region.addEventListener("change", function() {
  let ref = firestore.collection("sugarcane_burning_area").doc(this.value);
  ref.get().then(function (doc) {
    if (doc.exists) {
      let options = ""
      for (let factory in doc.data()) {
        const temp = doc.data()[factory]
        // const newFac = `
        //   <div class="row">
        //     ชื่อ: ${temp.name} จำนวน: ${temp.amount}
        //   </div>
        // `
        options += `<option value=${temp.amount}>${temp.name}</option>`
        // document.getElementById("factory-container").innerHTML += (newFac)
      }
      document.getElementById("option-container").innerHTML = options
      document.getElementById("option-container").addEventListener("change", function () {
        document.getElementById("amount-container").textContent = this.value
      })
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
  
  
})