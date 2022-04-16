<!-- eslint-disable -->
<template>
  <el-container>
    <el-header>
      <!-- header area -->
      <Header class="header"></Header>
    </el-header>

    <el-container class="homefirst">
      <el-aside class="slogan" height="400px" width="700px"
        >Covid-19 Data Visualization</el-aside
      >
      <el-main>
        <img :src="img001" style="width: 700px; height: 400px" />
      </el-main>
    </el-container>

    <el-footer>
      <!-- eslint-disable -->
      <Footer class="header"></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      img001: require("@/static/covidData.png"),
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {},
};
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 100;
}
.homefirst {
  max-width: 1800px;
  margin: auto;
}
.slogan {
  font-weight: 700;
  font-size: 300%;
  width: 500px;
  height: 500px;
  margin: 50px auto;
  /* border: 1px solid red; */
  line-height: 100px;
  text-align: center;
  overflow: hidden;
}
</style>
