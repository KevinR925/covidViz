<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Homepage</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Dataset 1</template>
      <!-- <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item> -->
      <!-- </el-submenu> -->
    </el-submenu>
    <el-menu-item index="3">Australia Data</el-menu-item>
    <el-menu-item index="3">Dataset 3</el-menu-item>
    <el-menu-item index="4"
      ><a
        href="https://www.covid19data.com.au/cases-last-28-days"
        target="_blank"
        >About Us</a
      ></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>