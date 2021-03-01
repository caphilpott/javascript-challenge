// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  let inputElement1 = d3.select("#city");
  let inputElement2 = d3.select("#state");
  let inputElement3 = d3.select("#country");
  let inputElement4 = d3.select("#shape");

  // Get the value property of the input element
  let dateValue = inputElement.property("value");
  let cityValue = inputElement1.property("value");
  let stateValue = inputElement2.property("value");
  let countryValue = inputElement3.property("value");
  let shapeValue = inputElement4.property("value");

  // Print the value to the console
  console.log(dateValue);
  console.log(cityValue);
  console.log(stateValue);
  console.log(countryValue);
  console.log(shapeValue);

  // filter date code
  let filteredData = data.filter(selectData => (selectData.datetime.includes(dateValue) && selectData.city.includes(cityValue) && selectData.state.includes(stateValue) && selectData.country.includes(countryValue) && selectData.shape.includes(shapeValue)));  
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
