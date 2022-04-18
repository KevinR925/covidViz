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
        text: "Vaccination Situation",
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        data: ["Two Vaccination", "Booster", "Population"],
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "Australia", max: 26280000 },
          { name: "NSW", max: 8163000 },
          { name: "Victoria", max: 6620000 },
          { name: "Queensland", max: 5180000 },
          { name: "SA", max: 1753000 },
          { name: "WA", max: 2800000 },
          { name: "Tasmania", max: 421780 },
          { name: "ACT", max: 523890 },
          { name: "NT", max: 250730 },
        ],
      },
      series: [
        {
          name: "Vacc vs Booster",
          type: "radar",
          data: [
            {
              value: [21941520, 6846769, 5746927, 4266709, 1500546, 2331615, 402178, 501125, 223534],
              name: "Two Vaccination",
            },
            {
              value: [13294198, 4055755, 3558663, 2294839, 938100, 1608299, 301937, 263743, 117100],
              name: "Booster",
            },
            {
              value: [26280000, 8163000, 6620000, 5180000, 1753000, 2800000, 421780, 523890, 250730],
              name: "Population",
            },
          ],
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