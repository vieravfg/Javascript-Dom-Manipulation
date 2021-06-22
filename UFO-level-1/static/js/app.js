// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!
// Select the button
// Use D3 to select the table
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");
var form = d3.select("form")

//Create function for table
function newtable(realdata) {
  tbody.html("");
//Loop Through `data`
realdata.forEach((uforeports) => {
  var row = tbody.append("tr");
  Object.entries(uforeports).forEach(function([key, value]) {
      // Append a cell to the row for each value in the ufo report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
}
// Create table with tableData
newtable(data)

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter)
// Complete the event handler function for the button
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

   // Select the input element and get the raw HTML node
  var inputdate = d3.select("#datetime");
  // Get the value property of the input element
  var inputvaluedate = inputdate.property("value");

   // Print the value to the console
  console.log(inputvaluedate);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputvaluedate);

  console.log(filteredData); 
  tbody.html("");

  newtable(filteredData)
  }

// Reset table 
reset.on("click", () => {
  tbody.html("");
  newtable(data);
   
      })
      
      
  
      
  