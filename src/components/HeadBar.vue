<template>
  <div class="head_bar">
    <el-row :gutter="10" type="flex" justify="space-between">
      <el-col :xs="24" :sm="24" :md="6" :lg="6">
       <h1 class="page-head">
         <a href="/" style="text-decoration: none; color: #000">
             <div class="logo" style="display: inline-block "></div>
           <!--          <div-->
           <!--            style="-->
           <!--              line-height: 60px;-->
           <!--              font-weight: 800;-->
           <!--              font-size: 20px;-->
           <!--              padding: 0 60px;-->
           <!--              color: #333333;-->
           <!--            "-->
           <!--          >-->
           <!--             <span>{{ title }}</span>-->
           <!--          </div>-->
         </a>
         <i :class="iconview" @click="chanView"></i>
       </h1>
      </el-col>
      <div :class="menuview">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-menu
            :default-active="activeIndex"
            :mode="menumode"
            style="text-decoration: none;"
            text-color="#303133"
            active-text-color="#409EFF"
            @select="handleSelect"
        >
          <el-menu-item index="1"> 导航 </el-menu-item>
          <el-menu-item index="2"> 快链 </el-menu-item>
          <el-menu-item index="3"> 云存储 </el-menu-item>
          <el-menu-item index="4"> 云图 </el-menu-item>
          <el-menu-item index="5"> 云账号 </el-menu-item>
          <el-menu-item v-if="!this.$store.state.user.signin" index="9"
          >登陆</el-menu-item
          >
          <el-submenu v-else>
            <template slot="title">我的</template>
            <el-menu-item index="99-0">设置中心</el-menu-item>
            <el-menu-item index="10">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col></div>


    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "HeadBar",
  props: {
    title: String,
    searchVal: String,
    activeIndex: String,
    activeIndex2: String,
  },
  data(){
    return {
      menumode: "horizontal",
      menuview: "hidden-sm-and-down",
      iconview: ["el-icon-s-unfold", "hidden-md-and-up"],
    };
  },
  methods: {
    chanView() {
      if (this.menuview != "menu-style") {
        this.iconview[0] = "el-icon-s-fold";
        this.menuview = "menu-style";
        this.menumode = ""
      } else {
        this.iconview[0] = "el-icon-s-unfold";
        this.menuview = "hidden-sm-and-down";
        this.menumode = "horizontal"
      }
    },
    handleSelect: function (key, keyPath) {
      this.activeIndex = key;
      // console.log(keyPath);
      if (key == 1) {
        this.$router.push("/");
      }
      if (key == 2) {
        this.$router.push("/article");
      }
      if (key == 3) {
        this.$router.push("/cloud-HOS");
      }
      if (key == 4) {
        this.$router.push("/cloud-image");
      }
      if (key == 5) {
        this.$router.push("/cloud-account");
      }
      if (key == "99-0") {
        this.$router.push("/setting");
      }
      // if (key == "2-1") {
      //   location.href = "./add-link";
      // }
      // if (key == "2-2") {
      //   location.href = "./article?dialog";
      // }
      if (key == 9) {
        this.$router.push("/signin");
      }
      if (key == 10) {
        this.logout();
      }
    },
    logout: function () {
      this.$store
        .dispatch("user/logout")
        .then((response) => {
          this.$router.go(0);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  created: function () {
    console.log(this.$store.state.nav.activeIndex);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head_bar {
  margin: 0;
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
}
.logo {
  width: 132px;
  height: 40px;
  background-image: url("../assets/logo.png");
  background-size: cover;
}
a {
  color: #409eff;
  text-decoration: none;
}
.page-head{
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  font-weight: 400;
  margin: 10px 10px 0px 10px;
}

.page-head i {
  line-height: 44px;
}

.menu-style{
  position: fixed;
  right: 0;
  top:58px;
  z-index: 999
}

</style>
