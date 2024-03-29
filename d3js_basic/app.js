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
/**
 * Grouping -> useful for applying one change to all elements
 * We will put every shape into one group
 */
const group = svg.append('g'); // it only work with 'g', not other string!
// rectancle
group.append('rect')
    .attr('x',50)
    .attr('y',125)
    .attr('fill','#FFC107')
    .attr('height', '200')
    .attr('width','100')
// circle
group.append('circle')
    .attr('cx',100)
    .attr('cy',60)
    .attr('fill','#FFEB3B')
    .attr('r', '50');
/**
 * Appending a text into svg
 */
group.append('text')
    .attr('x',50)
    .attr('y',390)
    .attr('fill','#000')
    .text('Hello D3!') // string 
    .style('font-family', 'Lobster') // apply css style directly
    .style('font-size','2em');
/**
 * Example of using group
 */
group.attr('transform','translate(100, 100)');