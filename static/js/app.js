
// // Create listener on dropdown
d3.select("#selDataset").on("change", handleSubmit);
function handleSubmit(){
    d3.event.preventDefault();
}

function unpack(rows,index){
    return rows.map(function(row){
        return row[index];
    });
}


d3.json("data/samples.json").then(function(data){
console.log(data);
var names = data.names;
console.log(names);

for (var j = 0; j < data.names.length; j++){
// console.log(names[j]);
// create Dropdown of IDs
d3.select("#selDataset").selectAll("option")
.data(data.names)
.enter()
.append("option")
.html(function(d) {
    return `<option>${names[j]}</option>`;
});
}
// var sampValues = data.samples;
// var 
// console.log(sampValues[1])

});



// var sampleValues = data.samples.id;
// console.log(sampleValues);

// });

