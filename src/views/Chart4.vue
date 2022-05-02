<template>
  <div class="chart1">
    <el-container>
      <el-main>
        <div class="testEchart">
          <el-card>
            <div class="chartCard" id="main" style="overflow-y:hidden;overflow-x:scroll;height:100%"></div>
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
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      title: {
        text: "Confirmed age group"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "category",
        data: ["Age 0-19", "Age 20-24", "Age 25-29", "Age 30-34", "Age 35-39", "Age 40-44", "Age 45-49","Age 50-54", "Age 55-59", "Age 60-64", "Age 65-69", "Age 70+" ],
      },
      series: [
        {
          name: "PCR confirmed",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [810, 338, 426, 403, 354, 319, 291, 340, 302, 291, 214, 535],
        },
        {
          name: "Not Confirmed",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          data: [1395, 520, 577, 616, 632, 535, 476, 380, 313, 252, 194, 309],
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
  height: 70%;
  width: 80%;
}
.chartCard {
  position: flex;
  height: 70%;
  width: 80%;
}
</style>