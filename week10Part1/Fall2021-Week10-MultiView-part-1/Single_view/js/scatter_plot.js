function scatter_plot(data,
                                 ax,
                                 title="",
                                 xLabel="",
                                 yLabel="",
                                 legend=[],
                                 legendcolors=[],
                                 margin = 100)
{
    let xScale= d3.scaleLinear().domain(d3.extent(data,function (d){return d.x}))
                                .range([margin,1000-margin])
    let yScale= d3.scaleLinear().domain(d3.extent(data,function (d){return d.y})).range([1000-margin,margin])
    let rScale= d3.scaleLinear().domain(d3.extent(data,function (d){return d.r})).range([4,12])
    let axis = d3.select(`${ax}`)

    axis.selectAll('.markers')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function(d) {
            return `translate(${xScale(d.x)}, ${yScale(d.y)})`})
        .append('circle')
        .attr("class",function (d,i){
                    return `cls_${i}`})
        .attr("r",function (d){return rScale(d.r)})
        .attr("fill",function (d){return d.c})

    // x and y Axis function
    let x_axis = d3.axisBottom(xScale).ticks(4)
    let y_axis = d3.axisLeft(yScale).ticks(4)
    //X Axis
    axis.append("g").attr("class","axis")
        .attr("transform", `translate(${0},${1000-margin})`)
        .call(x_axis)
    // Y Axis
    axis.append("g").attr("class","axis")
        .attr("transform", `translate(${margin},${0})`)
        .call(y_axis)
    // Labels
    axis.append("g").attr("class","label")
        .attr("transform", `translate(${500},${1000-10})`)
        .append("text")
        .attr("class","label")
        .text(xLabel)

    axis.append("g")
        .attr("transform", `translate(${35},${500}) rotate(270)`)
        .append("text")
        .attr("class","label")
        .text(yLabel)
    // Title
    axis.append('text')
        .attr('x',500)
        .attr('y',80)
        .attr("text-anchor","middle")
        .text(title)
        .attr("class","title")
    // legend
    if (legend.length>0){
        legend.forEach(
            function (d,i){
            let space = 50
            let lgnd = axis.append("g").attr('transform',`translate(${900},${i*50 + space})`);
            lgnd.append('rect').attr('width',function (d){return 40})
                               .attr('height',function (d){return 40})
                               .attr('fill',function (d){
                                   return legendcolors[i]
                               })
                .attr("class",d)
            lgnd.append('text').attr("class","legend").attr("dx","-80").attr("dy","30").text(d)

        })
    }




}