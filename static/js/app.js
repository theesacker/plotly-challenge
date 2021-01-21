function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}
d3.json("data/samples.json").then(function (data) {
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
});

    // function init() {
    //     // create MetaData box
    //     var sampleBoxpre = data.metadata.filter(bButton => bButton.id == "940");
    //     console.log(sampleBoxpre)
    //     var mDataPre = sampleBox[0];
    //     var htmlBoxpre = d3.select("#sample-metadata");
    //     htmlBoxpre.html("");
    //     Object.entries(mDataPre).forEach(([key, value]) => {
    //         htmlBoxpre.append("h3").text(`${key}: ${value}`);
    //     });
    //     // Create OTU graph
    //     var OTUChartpre = data.samples.filter(bButton => bButton.id == "940");
    //     console.log(OTUChartpre);
    //     var Results_pre = OTUChart_pre[0];
    //     // var topTenSearch = Results.sort((a, b) => b.sample_values - a.sample_values);
    //     // console.log(Results_pre);
    //     console.log("hello world");

    //     // console.log(topTenSearch);
    //     var Pre_ids = Results_pre.otu_ids;
    //     var PRE_OTUID = Pre_ids.map(data => "OTU " + data)
    //     var pre_labels = Results_pre.otu_labels.slice(0, 10);
    //     var pre_values = Results_pre.sample_values.slice(0, 10).reverse();
    //     // console.log(ids);
    //     // console.log(labels);
    //     // Create bar Chart
    //     // var barChart0 = d3.select("#bar");
    //     var trace0 = {
    //         x: pre_values,
    //         y: PRE_OTUID,
    //         type: "bar",
    //         text: pre_labels,
    //         orientation: "h"
    //     };
    //     var graphData0 = [trace0]
    //     var layout0 = {
    //         title: " Top Ten Belly Button Bacteria"
    //     };
    //     Plotly.newPlot("bar", graphData0, layout0);
    //     // Create bubble chart
    //     var bubbleChart0 = d3.select("#bubble");
    //     var trace3 = {
    //         x: Pre_ids,
    //         y: pre_values,
    //         type: "scatter",
    //         mode: "markers",
    //         marker: {
    //             color: Pre_ids,
    //             size: pre_values
    //         }
    //     };
    //     var bubbleData0 = [trace3]
    //     var layout3 = {
    //         title: "OTU ID size"
    //     };
    //     Plotly.newPlot("bubble", bubbleData0, layout3);


// // unfreexe thes entire line below
// -------------------- create function for when dropdown changes
d3.selectAll("#selDataset").on("change", getData);
function getData() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    // console.log(dataset);

    // create MetaData box
    d3.json("data/samples.json").then(function (data) {
        console.log(data);
    var sampleBox = data.metadata.filter(bButton => bButton.id == dataset);
    console.log(sampleBox)
    var mData = sampleBox[0];
    var htmlBox = d3.select("#sample-metadata");
    htmlBox.html("");
    Object.entries(mData).forEach(([key, value]) => {
        htmlBox.append("h3").text(`${key}: ${value}`);
    });
    // Create OTU graph
    var OTUChart = data.samples.filter(bButton => bButton.id == dataset);
    // console.log(OTUChart);
    var Results = OTUChart[0];
    // var topTenSearch = Results.sort((a, b) => b.sample_values - a.sample_values);
    console.log(Results);
    // console.log(topTenSearch);
    var ids = Results.otu_ids;
    OTUID = ids.map(data => "OTU " + data)
    var labels = Results.otu_labels.slice(0, 10);
    var values = Results.sample_values.slice(0, 10).reverse();
    console.log(ids);
    // console.log(labels);
    // Create bar Chart
    // var barChart = d3.select("#bar");
    var trace1 = {
        x: values,
        y: OTUID,
        type: "bar",
        text: labels,
        orientation: "h"
    };
    var graphData = [trace1]
    var layout1 = {
        title: " Top Ten Belly Button Bacteria"
    };
    Plotly.newPlot("bar", graphData, layout1);
    // Create bubble chart
    var bubbleChart = d3.select("#bubble");
    var trace2 = {
        x: ids,
        y: values,
        type: "scatter",
        mode: "markers",
        marker: {
            color: ids,
            size: values
        }
    };
    var bubbleData = [trace2]
    var layout2 = {
        title: "OTU ID size"
    };
    Plotly.newPlot("bubble", bubbleData, layout2);


// };
// console.log("helloworldwide")
// d3.json("data/samples.json").then(function (data) {
//     function init() {
//         // create MetaData box
//         var sampleBoxpre = data.metadata.filter(bButton => bButton.id == 940);
//         console.log(sampleBoxpre)
//         var mDataPre = sampleBox[0];
//         var htmlBoxpre = d3.select("#sample-metadata");
//         htmlBoxpre.html("");
//         Object.entries(mDataPre).forEach(([key, value]) => {
//             htmlBoxpre.append("h3").text(`${key}: ${value}`);
//         });
//         // Create OTU graph
//         var OTUChartpre = data.samples.filter(bButton => bButton.id == 940);
//         console.log(OTUChartpre);
//         var Results_pre = OTUChart_pre[0];
//         // var topTenSearch = Results.sort((a, b) => b.sample_values - a.sample_values);
//         // console.log(Results_pre);
//         console.log("hello world");

//         // console.log(topTenSearch);
//         var Pre_ids = Results_pre.otu_ids;
//         var PRE_OTUID = Pre_ids.map(data => "OTU " + data)
//         var pre_labels = Results_pre.otu_labels.slice(0, 10);
//         var pre_values = Results_pre.sample_values.slice(0, 10).reverse();
//         // console.log(ids);
//         // console.log(labels);
//         // Create bar Chart
//         // var barChart0 = d3.select("#bar");
//         var trace0 = {
//             x: pre_values,
//             y: PRE_OTUID,
//             type: "bar",
//             text: pre_labels,
//             orientation: "h"
//         };
//         var graphData0 = [trace0]
//         var layout0 = {
//             title: " Top Ten Belly Button Bacteria"
//         };
//         Plotly.newPlot("bar", graphData0, layout0);
//         // Create bubble chart
//         var bubbleChart0 = d3.select("#bubble");
//         var trace3 = {
//             x: Pre_ids,
//             y: pre_values,
//             type: "scatter",
//             mode: "markers",
//             marker: {
//                 color: Pre_ids,
//                 size: pre_values
//             }
//         };
//         var bubbleData0 = [trace3]
//         var layout3 = {
//             title: "OTU ID size"
//         };
//         Plotly.newPlot("bubble", bubbleData0, layout3);
        

//     };
//     init();

    


    });
};

