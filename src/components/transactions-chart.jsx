import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import { getLastBlocks, getLastBlock } from 'utils/api';

const BLOCKS_COUNT = 15;
const TIMEOUT = 1000;

class TransactionsChart extends PureComponent {
  componentDidMount() {
    getLastBlocks(BLOCKS_COUNT)
      .then((blocks) => {
        const chartData = blocks.map(i => i.transactions.length).reverse();
        [this.lastBlock] = blocks;

        this.initChart(chartData);

        this.getLastBlockInterval = setInterval(() => {
          getLastBlock()
            .then((block) => {
              this.lastBlock = block;
            });
        }, TIMEOUT);
      });
  }

  componentWillUnmount() {
    clearInterval(this.getLastBlockInterval);
    this.svg.remove();
  }

  initChart(chartData) {
    const data = chartData;
    const width = +this.svg.attr('width');
    const height = +this.svg.attr('height');
    const chart = this.svg.append('g').attr('transform', 'translate(0, -1)');
    const focus = this.svg.append('g').style('display', 'none');

    const x = d3.scaleLinear()
      .domain([0, BLOCKS_COUNT - 1])
      .range([0, width]);

    const y = d3.scaleLinear();
    const setYDomain = (max) => {
      const padding = 10 ** (max.toString().length - 1);

      y.domain([0, max + padding]).range([height, 0]);
    };

    setYDomain(d3.max(data));

    const line = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveMonotoneX);

    const tick = () => {
      const chartLineEl = this.svg.select('.transactions-chart__line').node();

      if (!chartLineEl) {
        return;
      }

      data.push(this.lastBlock.transactions.length);
      setYDomain(d3.max(data));

      d3.select(chartLineEl)
        .attr('d', line)
        // .attr('d', area)
        .attr('transform', null);

      d3.active(chartLineEl)
        .attr('transform', `translate(${x(-1)},0)`)
        .transition()
        .on('start', tick);

      data.shift();
    };

    function mousemove() {
      const x0 = Math.round(x.invert(d3.mouse(this)[0]));

      focus.attr('transform', `translate(${x(x0)}, 0)`);
      focus.select('text').text(() => data[x0 - 1]);
    }

    focus.append('line')
      .attr('class', 'transactions-chart__x-hover-line')
      .attr('y1', 0)
      .attr('y2', height);

    focus.append('text')
      .attr('x', 5)
      .attr('dy', '1em');

    this.svg.append('rect')
      .attr('class', 'rect')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'none')
      .style('pointer-events', 'all')
      .on('mouseover', () => focus.style('display', null))
      .on('mouseout', () => focus.style('display', 'none'))
      .on('mousemove', mousemove);

    chart.append('g')
      .attr('clip-path', 'url(#clip)')
      .append('path')
      .datum(data)
      .attr('class', 'transactions-chart__line')
      .transition()
      .duration(TIMEOUT)
      .ease(d3.easeLinear)
      .on('start', tick);
  }

  render() {
    return (
      <div className="transactions-chart">
        <svg width="360" height="38" ref={(el) => { this.svg = d3.select(el); }} />
      </div>
    );
  }
}

export default TransactionsChart;
