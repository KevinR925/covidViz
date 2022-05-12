<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">
          <el-card>
            <div
              class="chartCard"
              id="main"
              style="overflow-y: hidden; overflow-x: scroll; height: 100%"
            ></div>
          </el-card>
          <el-card>
            <div class="content">
            <br>This chart demonstrate the overall Situation in this month
            <br>Data for this chart: https://www.covid19data.com.au/
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
      mainContainer.style.width = 100 + "%";
      mainContainer.style.height = 600 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();

    var mychart = this.$echarts.init(document.getElementById("main"));

    mychart.setOption({
      title: {
        top: 30,
        left: "center",
        text: "Monthly Case Count in Australia",
      },
      tooltip: {
        
      },
      visualMap: {
        min: 0,
        max: 40000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
      },
      calendar: {
        top: 150,
        left: 30,
        right: 30,
        cellSize: ["fixed", 50],
        range: "2022-05",
        orient: "vertical",
        itemStyle: {
          borderWidth: 2.0,
        },
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",

        coordinateSystem: "calendar",
        data: [
          ["2022-05-01", 18296],
          ["2022-05-02", 35939],
          ["2022-05-03", 35940],
          ["2022-05-04", 16462],
          ["2022-05-05", 18506],
          ["2022-05-06", 13835],
          ["2022-05-07", 11678],
          ["2022-05-08", 2233],
          ["2022-05-09", 2234],
          ["2022-05-10", 4407],
          ["2022-05-11", 5360],
          ["2022-05-12", 7349],
          ["2022-05-13", 4234],
          ["2022-05-14", 8407],
          ["2022-05-15", 5360],
          ["2022-05-16", 7349],
          ["2022-05-17", 7349],
          ["2022-05-18", 7349],
          ["2022-05-19", 7349],
          ["2022-05-20", 7349],
          ["2022-05-21", 7349],
          ["2022-05-22", 7349],
          ["2022-05-23", 7349],
          ["2022-05-24", 7349],
          ["2022-05-25", 7349],
          ["2022-05-26", 7349],
          ["2022-05-27", 7349],
          ["2022-05-28", 7349],
          ["2022-05-29", 7349],
          ["2022-05-30", 7349],
          ["2022-05-31", 7349],

        ],
      },
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