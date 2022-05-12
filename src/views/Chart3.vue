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
      mainContainer.style.width = 100 + "%";
      mainContainer.style.height = 900 + "px";
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
          text: 'Share of states'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            data: [
              'California',
              'Texas',
              'Florida',
              'New York',
              'Pennsylvania',
              'Ohio',
              'Illinois',
              'Georgia',
              'others'
            ]
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              label: {
                position: 'inner',
                fontSize: 14
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 17205, name: 'Population in other state' },
                { value: 15745, name: 'Population in main state' }
              ]
            },
            {
              name: 'Access From',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                length: 30
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              data: [
                { value: 89752, name: 'California' },
                { value: 87986, name: 'Texas' },
                { value: 73689, name: 'Florida' },
                { value: 67459, name: 'New York' },
                { value: 44488, name: 'Pennsylvania' },
                { value: 38266, name: 'Ohio' },
                { value: 37815, name: 'Illinois' },
                { value: 36087, name: 'Georgia' },
                { value: 511686, name: 'others' }
              ]
            }
          ]
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
