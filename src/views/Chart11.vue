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
      mainContainer.style.height = 900 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();

    var mychart = this.$echarts.init(document.getElementById("main"));

    mychart.setOption({
      title: [
        {
          text: "Vaccination Situation in Different country (Vaccinations per 100 people)",
        },
      ],
      polar: {
        radius: [30, "80%"],
      },
      angleAxis: {
        max: 270,
        startAngle: 75,
      },
      radiusAxis: {
        type: "category",
        data: ["Worldwide", "America", "China", "Australia"],
      },
      tooltip: {},
      series: {
        type: "bar",
        data: [
        {
          value: 147.34,
          itemStyle: {
            color: '#FFDAB9'
          }
        }, 
        {
          value: 173.53,
          itemStyle: {
            color: '#00E5EE'
          }
        },
        {
          value: 232.37,
          itemStyle: {
            color: '#90EE90'
          }
        }, 
        {
          value: 221.94,
          itemStyle: {
            color: '#EEB4B4'
          }
        }],
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "middle",
          formatter: "{b}: {c}",
        },
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
  height: 60%;
  width: 80%;
}
.chartCard {
  position: flex;
  height: 60%;
  width: 80%;
}
</style>