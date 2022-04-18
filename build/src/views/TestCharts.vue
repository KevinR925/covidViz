<template>
  <el-container>
    <el-header>
      <GeneralHeader class="header"></GeneralHeader>
    </el-header>
    <el-main>
      <div class="testEchart">
        <el-card>
          <div id="main" ></div>
        </el-card>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import GeneralHeader from "../components/GeneralHeader";

export default {
  components: {
    GeneralHeader,
  },

  mounted() {
    var mainContainer = document.getElementById('main');
    //Used to make the chart adaptive to height and width, and calculate the height and width of the container through the height and width of the form
     var resizeMainContainer = function () {
         mainContainer.style.width = window.innerWidth+'px';
         mainContainer.style.height = window.innerHeight*0.8+'px';
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
        text: "test",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    });
  },
};
</script>

<style scoped>
/* .testEchart {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main{
      height: 500px;
    }
  }
} */
</style>
