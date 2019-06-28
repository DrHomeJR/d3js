/**
 * My fake data 
 */
const data = [
    {width: 20, height: 200, fill: 'blue'}
];
/**
 * Binding data using .data(...)
 */
const svg = d3.select('svg');
const rect = svg.selectAll('rect')   // select something inside svg's scope
    .data(data)
    .attr('width', (d, i, n) => d.width)
    .attr('height', (d, i, n) => d.height)
    .attr('fill', (d, i, n) => d.fill);
/**
 * Altenative way to bind data
 */

