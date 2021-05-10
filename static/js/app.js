// from data.js
var tableData = data;

var ufoTableBody = d3.select("#ufo-table>tbody");

data.forEach((ufoSighting) => {
    var row = ufoTableBody.append("tr");
    Object.values(ufoSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
});

