<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">
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
      mainContainer.style.width = 140 + "%";
      mainContainer.style.height = 700 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();

    var mychart = this.$echarts.init(document.getElementById("main"));
    mychart.setOption({
          title: {
            text: "15 days new cases trend",
          },
          grid: {
             x:35,
             y:55,
             x2:500,
             y2:60,
             containLabel: true,
          },
          xAxis: {
            type: "category",
            data: [ "4.19", "4.20", "4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30", "5.1", "5.2", "5.3"],

          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [7501, 61390, 50580, 68900, 59522, 90019, 19650, 12365, 69238, 45334, 88644, 73346, 60051, 23349, 16153],
              type: "bar",
              showBackground: true,
              backgroundStyle:{
                color: 'rgba(180,180,180,0.2)'
              }
            },
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
  height: 60%;
  width: 80%;
}
.chartCard {
  position: flex;
  height: 60%;
  width: 80%;
}
</style>
