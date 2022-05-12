<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">
          <el-card>
            <div id="main"></div>
          </el-card>
          <el-card>
            <div class="content">
              <br>This page shows the number of new cases in each country in the past week 
              <br>Data for this chart:
              https://news.qq.com/zt2020/page/feiyan.htm#/
            </div>
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
      mainContainer.style.width = 130 + "%";
      mainContainer.style.height = 600 + "px";
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
              text: 'U.S., China & Australia',
              },
            grid: {
               x:35,
               y:55,
               x2:500,
               y2:60,
               containLabel: true,
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {},

            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} '
              }
            },
            series: [
              {
                name: 'America',
                type: 'line',
                data: [69238, 45334, 88644, 73346, 60051, 23349, 16153],
              },
              {
                name: 'China',
                type: 'line',
                data: [31010, 29609, 27281, 26034, 28853, 1381, 50507],
              },
              {
                name: 'Australia',
                type: 'line',
                data: [37480, 39909, 50876, 41780, 38172, 23349, 39217],
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
  left: 22%;
  right: 0%;
  /* width: 40%; */
  /* border: 1px red solid; */
  padding-left: 7%;
  padding-right: 7%;
  /* background-color: #dddddd3a; */
}
.testEchart {
  position: absolute;
  height: 70%;
  width: 80%;
}
.chartCard {
  position: flex;
  height: 70%;
  width: 80%;
}
</style>
