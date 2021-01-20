

function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}


d3.json("data/samples.json").then(function(data) {
    console.log(data);
    var names = data.names;
    // console.log(names);

    for (var i = 0; i < data.names.length; i++) {
    for (var j = 0; j < data.names.length; j++) {
        // console.log(names[j]);
        // create Dropdown of IDs
        d3.select("#selDataset").selectAll("option")
            .data(data.names)
            .enter()
            .append("option")
            .html(function (d) {
                return `<option value="${i++}">${names[j++]}</option>`;
            });
    }
}
    // var sampValues = data.samples;
    // var 
    // console.log(sampValues[1])
// // Create listener on dropdown
d3.selectAll("#selDataset").on("change", getData);
function getData() {
    // d3.event.preventDefault();
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    // console.log(dataset);

// create MetaData box
var sampleBox = data.metadata.filter(bButton =>bButton.id == dataset);
console.log(sampleBox)
var mData = sampleBox[0];
var htmlBox = d3.select("#sample-metadata");
htmlBox.html("");
Object.entries(mData).forEach(([key,value]) => {
    htmlBox.append("h3").text(`${key}: ${value}`);
});
// Create OTU graph
var OTUChart = data.samples.filter(bButton =>bButton.id == dataset);
// console.log(OTUChart);
var Results = OTUChart[0];
// var topTenSearch = Results.sort((a, b) => b.sample_values - a.sample_values);
console.log(Results);
// console.log(topTenSearch);
var ids = Results.otu_ids;
OTUID = ids.map(data => "OTU " + data)
var labels = Results.otu_labels.slice(0,10);
var values = Results.sample_values.slice(0,10).reverse();
console.log(ids);
// console.log(labels);

var barChart = d3.select("#bar");
var trace1 = {
    x: values,
    y: OTUID,
    type:"bar",
    text:labels,
    orientation:"h"
};
var graphData = [trace1]
var layout1 = {
    title: "belly Button ID ${id}"
};
Plotly.newPlot("bar", graphData, layout1);
var bubbleChart = d3.select("#bubble");
var trace2 = {
    x: ids,
    y: values,
    type: "scatter",
    mode:"markers",
    marker:{
        color: ids,
        size: values
    }
};
var bubbleData = [trace2]
var layout2 = {
    title: "OTU ID size"
};

Plotly.newPlot("bubble", bubbleData, layout2);
};

// };
// d3.json("data/samples.json").then(function(data) {


// var sampleValues = data.samples.id;
// console.log(sampleValues);

});

