// from data.js
var tableData = data;

function printTable(data){
    // quick and dirty update method
    d3.select("#ufo-table>tbody").remove();
    d3.select("#ufo-table").append("tbody");

    var ufoTableBody = d3.select("#ufo-table>tbody");

    data.forEach((ufoSighting) => {
        var row = ufoTableBody.append("tr");
        Object.values(ufoSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function filterByInput(){
    d3.event.preventDefault();
    var inputs = ['datetime', 'city', 'state', 'country', 'shape'];
    var inputValues = [];
    var filtered = tableData;

    inputs.forEach(input => {
        var temp = d3.select(`#${input}-input`);
        if (temp.property("value") != null) {inputValues.push(temp.property("value"));};
    });

    for (var i = 0; i < inputValues.length; i++){
        if (inputValues[i] != ""){
            filtered = filtered.filter(item => item[inputs[i]] == inputValues[i]);            
        } 
    };

    printTable(filtered);
};

// initial print
printTable(tableData);

var dateBtn = d3.select("#filter-btn");
var form = d3.select("form");

dateBtn.on("click", filterByInput);
form.on("submit", filterByInput);
