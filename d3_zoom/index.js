// var svgWidth = 400,
//  svgHeight= 400,
//  originalLine = {"x1": 25, "y1": 25, "x2": 125, "y2": 125,
// "stroke_width": 2},
//  margin= {"top": 25, "right": 25, "bottom": 50, "left": 50},
//  width = svgWidth - margin. left- margin. right,
//  height=svgHeight- margin.top- margin.bottom;

//  var svgViewport=d3. select ("body").append ("svg")
// .attr("width", width + margin. left+margin.right)
// .attr("height", height + margin. top + margin.bottom)
// .style("border", "2px solid");

// var xAxisScale= d3.scale. linear()
// .domain ( [0, width])
// . range([0, width]);
// var yAxisScale = d3.scale. linear()
// .domain ( [0, height])
// .range ( [height, 0]);
// // Axis Functions
// var xAxis = d3.svg.axis ()
// .scale(xAxisScale)
// .orient ("bottom")
// .ticks (5);
// var yAxis = d3.svg. axis ()
// .scale(yAxisScale)
// .orient ("left")
// .ticks (5);

// function zoomFunction() {
//     // Select All Lines in the SVG G Element with Class Line Group
//     var lines = d3.select(".line_group").selectAll("line");
//     // Pan Vector
//     var panVector = d3.event.translate;
//     var panx= panVector[0];
//     var panY= panVector[1];
//     // Scaling Multiplier
//     var scaleMultiplier = d3.event.scale;
//     // Tell us in HTML what is going on
//     d3.select("#pan_x_span").text(panx);
//     d3.select("#pan_y_span").text(panY);
//     d3.select("#v_scale_val").text(scaleMultiplier);
//     // Redraw the Axis
//     innerSpace.select(".x.axis").call(xAxis);
//     innerSpace.select(".y.axis").call(yAxis);
//     // Redraw the Line
//     lines
//     .attr("x1", function(d) { return xAxisScale(d.x1); })
//     .attr("y1", function(d) { return yAxisScale(d.yl); })
//     .attr("x2", function(d) { return xAxisScale(d.x2); })
//     .attr("y2", function(d) { return yAxisScale(d.y2); })
//     .attr("stroke-width", function(d) { return d. stroke_width *
//     scaleMultiplier; });
//     }

//     var zoom= d3. behavior.zoom()
// .x(xAxisScale)
// .y(yAxisScale)
// .on("zoom", zoomFunction);

// var innerSpace = svgViewport.append("g")
// .attr("class", "inner_space")
// .attr("transform",
// "translate(" + margin. left + "," +margin.top+ ")")
// .call(zoom);

// innerSpace.append("g").attr("class", "hidden rectangle")
// .append("rect")
// .attr("class", "background")
// .attr("x", function(d, i) { return xAxisScale (0); })
// .attr("y", function(d, i) { return yAxisScale (height); })
// .attr("width", function(d, i) { return xAxisScale(width); })
// .attr("height", function(d, i) { return yAxisScale (0); })
// .style("fill", "white");

// // Draw Axes
// innerSpace.append("g")
// .attr("class", "x axis")
// .attr("transform", "translate (0," + height + ")")
// .call(xAxis);
// innerSpace.append("g")
// .attr("class","y axis")
// .call(yAxis);

// var line =innerSpace.append ("g").attr("class", "line_group")
// .selectAll("line")
// .data( [originalLine])
// .enter().append("line")
// .attr("x1", function(d) { return xAxisScale(d.x1); })
// .attr("y1", function(d) { return yAxisScale(d.y1); })
// .attr("x2", function(d) { return xAxisScale(d.x2); })
// .attr("y2", function(d) {return yAxisScale(d.y2); })
// .attr("stroke", "gray")
// .attr("stroke-width", function(d) { return d.stroke_width; });

