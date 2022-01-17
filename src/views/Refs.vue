<template>
	<div class="mainContainer">
		<div class="leftBox"></div>
		<div class="myCollapse">
    	<el-collapse accordion>
    	  <el-collapse-item name="one">
			<template #title>
          		<div class="qwe1">数学基础</div>
        	</template>
    	    <div class="cours">
				<div><el-link type="warning" href="https://www.bilibili.com/video/BV1Ys411k7yQ/?spm_id_from=333.788.recommend_more_video.0">线性代数</el-link></div>
    		    <div><el-link type="warning" href="https://www.bilibili.com/video/BV1qW411N7FU?from=search&seid=7343802802956888886&spm_id_from=333.337.0.0">微积分</el-link></div>
    		    <div><el-link type="warning" href="https://www.bilibili.com/video/BV1zh41167Uy?from=search&seid=16999838763611353260&spm_id_from=333.337.0.0">离散数学</el-link></div>
			</div>
    	  </el-collapse-item>
				<el-collapse-item name="two">
					<template #title>
          		<div class="qwe2">计算机科学</div>
        	</template>
					<div class="cours">
						<div><el-link type="warning" href="https://sp18.datastructur.es/">算法与数据结构</el-link></div>
						<div><el-link type="warning" href="http://csapp.cs.cmu.edu/">计算机组成</el-link></div>
						<div><el-link type="warning" href="https://cs186berkeley.net/sp21/">数据库</el-link></div>
						<div><el-link type="warning" href="https://gaia.cs.umass.edu/kurose_ross/index.php">计算机网络</el-link></div>
						<div><el-link type="warning" href="https://pdos.csail.mit.edu/6.828/2021/schedule.html">操作系统</el-link></div>
					</div>
				</el-collapse-item>
				<el-collapse-item name="three">
					<template #title>
          				<div class="qwe2">电子学基础</div>
        			</template>
					<div class="cours">
						<div><el-link type="warning" href="https://inst.eecs.berkeley.edu/~ee16a/su20/#schedule">电路基础</el-link></div>
						<div><el-link type="warning" href="https://inst.eecs.berkeley.edu/~ee120/fa19/">信号与系统</el-link></div>
					</div>
				</el-collapse-item>
    </el-collapse>
  	</div>
	</div>
</template>

<style scoped>
.myCollapse {
	background-color: #e4f9f5;
	position: absolute;
	left: 20%;
	height: 92vh;
	width: 80%;
}
.leftBox {
	background-color: #409EFF;
	position: absolute;
	width: 20%;
	height: 92vh;
}
.qwe1 {
	font-size: 35px;
	position: relative;
	left: 540px;
}
.qwe2 {
	font-size: 35px;
	position: relative;
	left: 520px;
}
</style>