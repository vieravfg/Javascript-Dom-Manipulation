// from data.js
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!
// Select the button
// Use D3 to select the table
var tbody = d3.select("tbody")
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");

//Create function for table
function newtable(realdata) {
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
// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

   // Select the input element and get the raw HTML node
   // Get the value property of the input element
   var inputvaluedate = d3.select("#datetime").property("value");
   var inputdateid = d3.select("#datetime").attr("id");
   var inputvaluecity = d3.select("#city").property("value").toLowerCase();
   var inputcityid = d3.select("#city").attr("id");
   var inputvaluestate = d3.select("#state").property("value").toLowerCase();
   var inputstateid = d3.select("#state").attr("id");
   var inputvaluecountry = d3.select("#country").property("value").toLowerCase(); 
   var inputcountryid = d3.select("#country").attr("id");
   var inputvalueshape = d3.select("#shape").property("value").toLowerCase(); 
   var inputshapeid = d3.select("#shape").attr("id");
   // Print the value to the console
  console.log(inputvaluedate);
  console.log(inputvaluecity);
  console.log(inputvaluestate);
  console.log(inputvaluecountry);
  console.log(inputvalueshape);
  
  var filteredData = tableData

  var dict = {};

  if (inputvaluedate) {
  dict[inputdateid] = inputvaluedate;
  }
  if(inputvaluecity) {
  dict[inputcityid] = inputvaluecity;
  }
  if(inputvaluestate) {
  dict[inputstateid]= inputvaluestate;
  }
  if(inputvaluecountry) {
  dict[inputcountryid]=inputvaluecountry;
  }
  if(inputvalueshape) {
  dict[inputshapeid] = inputvalueshape;
  }

  Object.entries(dict).forEach(([key,value])=> { 
    filteredData = filteredData.filter(x => x[key] === value);
    console.log(filteredData);
    console.log(dict); 
  })

  tbody.html("");
  newtable(filteredData)

  }

reset.on("click", () => {
  tbody.html("");
  newtable(data);
   
      })
      
     