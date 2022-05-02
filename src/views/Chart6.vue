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
      mainContainer.style.height = 700 + "px";
    };
    //Set the height and width of the div container
    resizeMainContainer();

    var mychart = this.$echarts.init(document.getElementById("main"));

    // var getVirtulData = function() {
    //   var year = '2022';
    //   var date = this.$echarts.number.parseDate(year + '-01-01');
    //   var end = +echarts.number.parseDate(+year + 1 + '-01-01');
    //   var dayTime = 3600 * 24 * 1000;
    //   var data = [];
    //   for (var time = date; time < end; time += dayTime) {
    //     data.push([
    //       echarts.format.formatTime('yyyy-MM-dd', time),
    //       Math.floor(Math.random() * 10000)
    //     ]);
    //   }
    //   return data;
    // };

    // var damidata = getVirtulData();

    mychart.setOption({
      title: {
        top: 30,
        left: "center",
        text: "Daily Case Count",
      },
      tooltip: {
        formatter(params) {
          // const item = params[0];
          //   console.log(params)
          const item = params[0];
          return `
                直接访问：${time}
                所需天数：${value}
               `;
        },
      },
      visualMap: {
        min: 0,
        max: 10000,
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
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: "heatmap",

        coordinateSystem: "calendar",
        //data: [{"2022-04-01": 8000},{"2022-04-02": 8000},{"2022-04-03": 8000},{"2022-04-04": 8000},{"2022-04-05": 8000},{"2022-04-06": 8000},{"2022-04-07": 8000},{"2022-04-08": 8000},{"2022-04-09": 8000},{"2022-04-10": 8000},{"2022-04-11": 8000},{"2022-04-12": 8000},{"2022-04-13": 8000},{"2022-04-14": 8000},{"2022-04-15": 8000},{"2022-04-16": 8000},{"2022-04-17": 8000},{"2022-04-18": 8000},{"2022-04-20": 8000},{"2022-04-21": 8000},{"2022-04-22": 8000},{"2022-04-23": 8000},{"2022-04-24": 8000},{"2022-04-25": 8000},{"2022-04-26": 8000},{"2022-04-27": 8000},{"2022-04-28": 8000},{"2022-04-29": 8000},{"2022-04-30": 8000}],
        data: [
          ["2022-05-01", 5000],
          ["2022-05-02", 8000],
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