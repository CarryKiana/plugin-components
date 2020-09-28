<template>
  <div class="hello">
    <div class="d3-box"></div>
    <svg class="svg" :style="'width:'+ width + 'px;height:' + height + 'px;'" />
    <svg class="svg-linear" :style="'width:'+ width + 'px;height:' + height + 'px;'" />
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'HelloWorld',
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      // 矩形边距
      marge: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 60
      },
      // 矩形宽度
      dataset: [ 250, 210, 170, 130, 90 ],
      // 矩形高度
      rectheight: 30,
      scaleLinear: null, // 线性比例尺实例
      linearDomain: [1.2, 2.3, 0, 1.5, 3], // 线性比例尺domain域
      linearRange: [0, 300], // 线性比例尺range域, 即0.9变为0， 3.3变为300
      scaleOrdinal: null // 离散比例尺实例
    }
  },
  created() {
    
  },
  mounted() {
   this.changeText()
   this.drawRect()
   this.linearScale()
   this.addAxis()
   this.drawRectByScale()
  },
  methods: {
    // 更改文案
    changeText() {
      const box = d3.select('.d3-box')
      box.text('Hello Word')
    },
    // 绘制矩形
    drawRect() {
      const svg = d3.select('.svg')
      const g = svg.append('g').attr('transform', `translate(${this.marge.top}, ${this.marge.left})`)
      g.selectAll('rect')
        .data(this.dataset)
        .enter()
        .append('rect')
        .attr('x', 20)
        .attr('y', (d, i) => {
          return i * this.rectheight
        })
        .attr('width', (d) => {
          return d
        })
        .attr('height', this.rectheight - 5)
        .attr('fill', 'blue')
    },
    // 线性比例尺
    linearScale() {
      const min = d3.min(this.linearDomain)
      const max = d3.max(this.linearDomain)
      this.scaleLinear = d3.scaleLinear()
        .domain([min, max])
        .range(this.linearRange)
    },
    // 运用线性比例尺绘制矩形
    drawRectByScale() {
      const svg = d3.select('.svg-linear')
      const g = svg.append('g').attr('transform', `translate(${this.marge.top}, ${this.marge.left})`).attr('class', 'group1')
      g.selectAll('rect')
        .data(this.dataset)
        .enter()
        .append('rect')
        .attr('x', 20)
        .attr('y', (d, i) => {
          return i * this.rectheight
        })
        .attr('width', (d) => {
          return this.scaleLinear(d)
        })
        .attr('height', this.rectheight - 5)
        .attr('fill', 'blue')
    },
    // 离散比例尺
    ordinalScale() {
      const index = [0, 1, 2, 3, 4]
      const color = ['red', 'blue', 'yellow', 'black', 'green']
      this.scaleOrdinal = d3.scaleOrdinal()
        .domain(index)
        .range(color)
    },
    // 坐标轴
    addAxis() {
      const xAxis = d3.axisBottom(this.scaleLinear) // 定义坐标轴，bottom表示朝下
        .ticks(7) // 设置刻度数目
        this.$nextTick(() => {
          const g = d3.select('.group1')
          g.append('g')
            .attr('transform', `translate(20, ${this.dataset.length * this.rectheight})`)
            .call(xAxis)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
