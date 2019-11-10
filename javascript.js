
// Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     //   this.console.log("click")
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

function tableMaker() {
  var dynaTable = document.getElementById("dynaTable");
  var table = document.createElement("TABLE");
  var numberForm = document.getElementById("numberForm");
  
  table.border = "1";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  var x = document.getElementById("newRow").value;
  var y = document.getElementById("newColumn").value;
  //This handles if there is no input I could have set the default in the
  //input to 6 but I chose this direction instead so it doesn't start with 6
  if (x === "") {
    x = 6;
  }
  if (y === "") {
    y = 6;
  }
  //consol.log outside of if statements to test scope
  console.log(x);
  console.log(y);

  for (let j = 0; j < x; j++) {
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (let i = 0; i < y; i++) {
      let z = (j + 1) * (i + 1);
      var td = document.createElement("TD");
      td.width = "75";
      td.appendChild(document.createTextNode(`${j + 1} x ${i + 1} = ${z}`));
      tr.appendChild(td);
    }
  }
  dynaTable.appendChild(table);
  numberForm.style.display("none");
}
