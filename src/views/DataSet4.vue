<!-- eslint-disable -->
<template>
  <el-container>
    <el-header>
      <!-- header area -->
      <Header class="header"></Header>
    </el-header>

    <el-aside>
      <el-menu
        default-active="1"
        class="side-navigation-bar"
        active-text-color="#b9771498"
        :router="true"
      >
        
        <el-menu-item :class="{'activeDashboard':style1}" index="/CaseNumber">
          <!-- <i class="el-icon-setting"></i> -->
          <span slot="title">Case Number</span>
        </el-menu-item>
        <el-menu-item :class="{'activeProfile':style2}"  index="/Vaccination">
          <!-- <i class="el-icon-setting"></i> -->
          <span slot="title">Vaccination</span>
        </el-menu-item>
        
      </el-menu>
    </el-aside>

    <!-- main-container -->
    <el-main>
      <router-view></router-view>
    </el-main>


  </el-container>
</template>

<script>
import Header from "../components/ComHeader";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      
    };
  },
  watch:{
    $route(to,from){
      //define the path
      if(to.path === '/CaseNumber') {
        this.style1 = true;
        this.style2 = false;
      }
      if(to.path === '/Vaccination') {
        this.style1 = false;
        this.style2 = true;
      }
    }
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
.side-navigation-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 10%;
  top: 20%;
  border: #000000 1px solid;
  width: 12%;
  height: 100%;
}

.avatar-box {
  width: 100%;
  border: #000000 1px solid;
  text-align: center;
  display: flex;
  height: 170px;
  justify-content: center;
  align-items: center;
}


.el-menu-item {
  width: 100%;
  text-align: center;
  font-size: 18px;
  border-bottom: #000000 1px solid;
  color: #838485;
}

.el-menu-item:hover {
  background-color: rgba(128, 128, 128, 0.308);
}

.el-menu-item:active {
  background-color: rgba(128, 128, 128, 0.308);
}

</style>