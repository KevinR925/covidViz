<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">NB: This chart shows last week new cases trend!
          <el-card>
            <div id="main" style="overflow-y:hidden;overflow-x:scroll;height:100%"></div>
          </el-card>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  mounted() {
    var mainContainer = document.getElementById("main");
    //Used to make the chart adaptive to height and width, and calculate the height and width of the container through the height and width of the form
    var resizeMainContainer = function () {
      mainContainer.style.width = 120 + "%";
      mainContainer.style.height = 700 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();
    //  // Initialize the chart
    //  var mainChart = this.$echarts.init(mainContainer);
    //  $(window).on('resize',function(){//
    //      //The screen size is adaptive, reset the height and width of the container
    //     resizeMainContainer();
    //     mainChart.resize();
    // });

    var mychart = this.$echarts.init(document.getElementById("main"));
    mychart.setOption({
      title: {
          text: 'Weekly main state cases'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['California', 'Texas', 'Florida', 'New York', 'Illinois']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
           x:35,
           y:55,
           x2:500,
           y2:60,
           containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'California',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [2775, 925, 1058, 14428, 7235, 0, 8]
          },
          {
            name: 'Texas',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [1716, 2438, 3227, 3032, 0, 0, 0]
          },
          {
            name: 'Florida',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [3060, 2108, 2552, 2919, 2899, 0, 0]
          },
          {
            name: 'New York',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [9374, 3508, 5550, 7434, 6886, 4265, 3352]
          },
          {
            name: 'Illinois',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [4503, 1745, 2067, 3339, 2416, 0, 0]
          }
        ],
    });
  },
};
</script>

<style scoped>
.chart1 {
  display: flex;
  position: absolute;
  top: 10%;
  left: 18%;
  right: 0%;
  /* width: 40%; */
  /* border: 1px red solid; */
  padding-left: 7%;
  padding-right: 7%;
  /* background-color: #dddddd3a; */
}
.testEchart {
  position: absolute;
  height: 60%;
  width: 80%;
}
.chartCard {
  position: flex;
  height: 60%;
  width: 80%;
}
</style>