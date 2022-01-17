<template>
  <div class="Home">
    <el-carousel :interval="4000" type="card" height="300px" class="car">
      <el-carousel-item v-for="item in carData" :key="item" height="300px" width="400px">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import request from "@/utils/request";
export default {
  name: "home",
  components: {},
  data() {
    return {
      carData: [
        // { url: require("../assets/1.jfif") },
        { url: require("../assets/2.png") },
        { url: require("../assets/3.png") },
        { url: require("../assets/1.jpg") },
        { url: require("../assets/2.jpg") },
        // { url: require("../assets/4.jfif") },
      ],
    }
  }
}
</script>

<style scoped>
.Home {
  background-color: #e4f9f5;
  height: 100vh;
}
.car {
  position: relative;
  top: 150px;
}
</style>