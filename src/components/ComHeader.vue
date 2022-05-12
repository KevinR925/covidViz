<!-- eslint-disable -->
<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-container"
      mode="horizontal"
      @select="handleSelect"
      background-color="#DDDDDD"
      text-color="#000000"
      active-text-color="#ffd04b"
    >
      <div>
        <router-link to="/"
          ><i class="el-icon-s-home"></i
        ></router-link>
      </div>

      <el-button class="btn" type="info" @click="gotolink1"
        >America</el-button
      >
      <el-button class="btn" type="info" @click="gotolink2"
        >Australia</el-button
      >
      <el-button class="btn" type="info" @click="gotolink3"
        >China</el-button
      >
      <el-button class="btn" type="warning" @click="gotolink4"
        >Comparison</el-button
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    gotolink1() {
      this.$router.replace("/dataset1");
      this.seeUSA();
    },
    gotolink2() {
      this.$router.replace("/dataset2");
    },
    gotolink3() {
      //this.$router.push("http://52.78.15.53:5000/");
      //this.$router.push({ path:  'http://52.78.15.53:5000/' })
      window.open('http://3.36.91.40:5000/', '_blank') 
    },
    gotolink4() {
      this.$router.replace("/dataset4");
    },
    seeUSA(){
      this.gotolink1 = true;
      this.gotolink2 = false;
      this.gotolink3 = false;
      this.gotolink4 = false;
    }
  },
};
</script>

<style scoped>
.el-menu-container {
  display: flex;
  align-items: center;
  position: fixed;
  height: 8%;
  top: 0%;
  left: 0%;
  right: 0%;
  padding: 0 30px;
}

.el-icon-s-home {
  font-size: 40px;
  margin-left: 10px;
  color: black;
}


.btn {
  margin-left: 25px;
  font-size: 15px;
}



.el-avatar {
  margin-left: 15px;
}
</style>