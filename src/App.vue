<template>
  <el-container>
    <el-header id="nav">
      <div id="title">
        My Intro to CS
      </div>
      <div id="items">
        <router-link to="/">Home</router-link> | 
        <el-dropdown>
          <span class="el-dropdown-link1">
            课程学习
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/Relations">关系图</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/Refs">参考资料</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> | 
        <el-dropdown>
          <span class="el-dropdown-link2">
            关于我
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/myView">对专业的认识</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/myPlan">学业规划</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </el-container>
  <router-view/>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  /* font-size: 25px; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #00adb5;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

#items {
  position: absolute;
  right:75px;
  top: 20px;
  font-size: 25px;
}

#title {
  position: absolute;
  left: 75px;
  top: 20px;
  font-weight: bold;
  color: #2c3e50;
}

.el-dropdown-link1 {
  font-weight: bold;
  color: #2c3e50;
  /* padding: 30px; */
}

.el-dropdown-link2 {
  font-weight: bold;
  color: #2c3e50;
  /* padding: 30px; */
}

a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

span {
  font-size: 25px;
}

#title {
  font-size: 25px;
}
</style>