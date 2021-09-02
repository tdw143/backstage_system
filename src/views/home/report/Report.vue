<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 2、为 echarts 准备一个具备大小（宽高）的 Dom -->
      <div id="main" style="width:750px; height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
// 1、导入 echarts
import * as echarts from 'echarts'
import _ from 'lodash'
export default {
  name: 'Report',
  data() {
    return {
      option: {
            title: {
                text: '用户来源'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#E9EEF3'
                }
              }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
              {
                boundaryGap: false
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ]
        }
    }
  },
  created() {

  },
  async mounted() {
    // 3、基于准备好的 dom ，初始化 echarts 实例
    var myChart = echarts.init(document.getElementById('main'));

    const { data: res } = await this.$http.get('reports/type/1')

    if(res.meta.status !== 200) {
      return this.$message.error('获取折线图数据失败！')
    }

    // 4、准备数据和配置项
    const result = _.merge(res.data, this.option)
    // 5、展示数据
    myChart.setOption(result);
  },
  methods: {

  }
}
</script>

<style>

</style>