// from data.js
var tableData = data;

function printTable(data){
    var ufoTableBody = d3.select("#ufo-table>tbody");
    data.forEach((ufoSighting) => {
        var row = ufoTableBody.append("tr");
        Object.values(ufoSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// adds data to table
printTable(tableData);

// filtering by date
var dateBtn = d3.select("#filter-btn");
//var form = d3.select("form");

dateBtn.on("click", () => {
    d3.event.preventDefault();
    var input = d3.select("#datetime");
    var value = input.property("value");
    var filtered = data.filter(sighting => sighting.datetime == value);
    printTable(filtered);
});

// form.on("submit", () => {
//     d3.event.preventDefault();
//     var input = d3.select("#datetime");
//     var value = input.property("value");

//     var filtered = data.filter(sighting => sighting.date == input);

//     printTable(filtered);
// });


