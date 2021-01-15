
// // Create listener on dropdown
// d3.select("#selDataset").on("click", handleSubmit);
// function handleSubmit(){
//     d3.event.preventDefault();
// }

function unpack(rows,index){
    return rows.map(function(row){
        return row[index];
    });
}


d3.json("data/samples.json").then(function(data){
console.log(data);
var names = data.names;
console.log(names);
// var sampleValues = unpack(data.names.samples.sample_values,1);
// console.log(sampleValues);

})
// var names = bButtondata.names
// console.log(names);
