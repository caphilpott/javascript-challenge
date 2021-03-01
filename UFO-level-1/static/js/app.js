// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // filter date code
  let filteredData = data.filter(selectDate => (selectDate.datetime ===inputValue));  

  // Get a reference to the table body
  let tbody = d3.select("tbody");
  
  // Remove previous table results
     d3.selectAll("td").remove()
  
  // use the arrow function to create new filtered html table records
  filteredData.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
  
// Test filtered date
  console.log(filteredData);
}

