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
        <router-link to="/homepage"
          ><i class="el-icon-discount"></i
        ></router-link>
      </div>

      <el-button class="btn" type="primary" @click="gotolink1"
        >America</el-button
      >
      <el-button class="btn" type="primary" @click="gotolink2"
        >Australia</el-button
      >
      <el-button class="btn" type="primary" @click="gotolink3"
        >China</el-button
      >
      <el-button class="btn" type="primary" @click="gotolink3"
        >Comparison</el-button
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotolink1() {
      this.$router.replace("/dataset1");
    },
    gotolink2() {
      this.$router.replace("/dataset2");
    },
    gotolink3() {
      this.$router.replace("/dataset3");
    },
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

.el-icon-discount {
  font-size: 40px;
  margin-left: 10px;
  color: black;
}

.btn-highlight {
  color: black;
  background-color: #ff9900;
  border: #ff9900;
  margin-left: 20px;
}

.btn-highlight:hover {
  background-color: #e98e06;
}

.btn {
  color: black;
  background-color: #fff;
  border: #fff;
  margin-left: 15px;
}

.right-container {
  height: 50px;
  position: absolute;
  right: 3%;
  display: flex;
  align-items: center;
}

.right-container:focus {
  outline: none;
}
.footer {
  width: 100%;
  height: 100px;
  background-color: grey;
  position: fixed;
  left: 0;
  bottom: 0;
}

.el-avatar {
  margin-left: 15px;
}
</style>