/**
 * Here all d3js code must be written.
 * We can access all element from the DOM using d3js.
 */

/**
 * Difference between js vanilla select and d3js select
 */
const x = document.querySelector('svg'); // js
const y = d3.select('svg'); // d3js
console.log(x);
console.log(y);
/**
 * js vanilla select return simply the raw alement
 * 
 * d3js, otherwise, return a complex object where we can 
 * find out element, called d3js wrapper
 */
/**
 * Multiple selection
 */
const x_1 = document.querySelectorAll('svg'); // js
const y_2 = d3.selectAll('svg'); // svg
console.log(x_1);
console.log(y_2);
/**
 * js vanilla return an array of elements
 * 
 * d3js return a wrapper object contains all elements find
 */
/** 
 * Rendering shape using d3js
*/
const svg = d3.select('svg')
    .attr('height', '500')
    .attr('width','500');
// rectancle
svg.append('rect')
    .attr('x',50)
    .attr('y',125)
    .attr('fill','#FFC107')
    .attr('height', '200')
    .attr('width','100')
// circle
svg.append('circle')
    .attr('cx',100)
    .attr('cy',60)
    .attr('fill','#FFEB3B')
    .attr('r', '50');
/**
 * Appending a text into svg
 */
svg.append('text')
    .attr('x',60)
    .attr('y',345)
    .attr('fill','#000')
    .text('Hello world!')
    .style('font-family', 'arial'); // apply css style directly
