const dataset = [25, 30, 45, 60, 20];

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const barWidth = width / dataset.length;

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, height]);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * barWidth)
  .attr("y", d => height - yScale(d))
  .attr("width", barWidth - 10)
  .attr("height", d => yScale(d))
  .attr("fill", "steelblue");
