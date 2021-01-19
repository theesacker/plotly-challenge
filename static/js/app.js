

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

var sample = data.metadata.filter(bButton =>bButton.id == dataset);
// var foundMData = mData
console.log(sample)
var mData = sample[0];
var htmlBox = d3.select("#sample-metadata");
htmlBox.html("");
Object.entries(mData).forEach(([key,value]) => {
    htmlBox.append("h3").text(`${key}: ${value}`);
});

}
});
// d3.json("data/samples.json").then(function(data) {


// var sampleValues = data.samples.id;
// console.log(sampleValues);

// });

