<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">
          <el-card>
            <div class="chartCard" id="main"></div>
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
      mainContainer.style.height = 1000 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();

    var mychart = this.$echarts.init(document.getElementById("main"));

    

    mychart.setOption({
      title: {
        top: 30,
        left: "center",
        text: "Daily Case Count",
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["fixed", 30],
        range: "2022-04",
        itemStyle: {
          borderWidth: 0.7,
        },
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: [{"2022-04-01": 8000},{"2022-04-02": 8000},{"2022-04-03": 8000},{"2022-04-04": 8000}],
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