<template>
  <div id="setting">
    <HeadBar title="海芯导航" :searchVal="searchVal" :activeIndex="activeIndex" />
    <div class="content">
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span slot="title">多用户</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-coin"></i>
              <span slot="title">数据库配置</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-box"></i>
              <span slot="title">存储配置</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-box"></i>
              <span slot="title">Banner配置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main v-if="showMain == 1">
            <!-- 主要内容 -->
            <el-button type="primary" size="small" @click="openMultiUserDrawer"><i class="el-icon-plus"></i>添加用户
            </el-button>
            <el-table :data="userList" style="width: 100%; margin-top: 20px" :row-class-name="tableRowClassName">
              <el-table-column prop="Id" label="序号" width="180">
              </el-table-column>
              <el-table-column prop="Account" label="账号" width="180">
              </el-table-column>

              <el-table-column prop="CreateTime" label="添加时间"></el-table-column>
              <el-table-column fixed="right" prop="" label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteUserRow(scope.$index, userList)" type="text" size="small">
                    <i class="el-icon-delete"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>

          <!-- 这里是弹出层 -->
          <div class="drawer">
            <el-drawer title="添加用户" :visible.sync="multiUserDialog" direction="rtl" custom-class="demo-drawer"
              ref="drawer">
              <div class="demo-drawer__content" style="padding: 30px">
                <el-form :model="mutilUserForm">
                  <el-form-item label="账号" :label-width="formLabelWidth">
                    <el-input id="linked_name" v-model="mutilUserForm.account" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input type="password" id="linked_url" v-model="mutilUserForm.passwd"></el-input>
                  </el-form-item>
                </el-form>
                <div class="demo-drawer__footer" style="float: right">
                  <el-button @click="cancelMultiUserDrawer">取 消</el-button>
                  <el-button type="primary" @click="multiUserSubmit">确 定</el-button>
                </div>
              </div>
            </el-drawer>
          </div>
          <!-- 这里弹出层结束 -->

          <el-main v-if="showMain == 2">
            <h3>如何完成数据迁移</h3>
            <el-steps :active="active" finish-status="success" style="width:500px;margin-bottom: 30px">
              <el-step title="导出数据" description="将现在的数据导出到本地"></el-step>
              <el-step title="切换数据库" description="更换新配置数据库连接信息并且初始化数据库"></el-step>
              <el-step title="导入数据" description="将本地的数据导入新的数据库"></el-step>
            </el-steps>

            <el-tooltip class="item" effect="dark" content="将现在的数据导出到本地" placement="bottom-end">
              <el-button type="primary" size="small" @click="exportDBData">导出数据库</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="更换新配置数据库连接信息并且初始化数据库" placement="bottom-end">
              <router-link to="/install" style="margin:0 10px"><el-button type="primary" size="small"
                  @click="exportDBData">更改数据库配置</el-button></router-link>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="将本地的数据导入新的数据库" placement="bottom-end">
              <el-button type="primary" size="small" @click="exportDBData">导入历史数据</el-button>
            </el-tooltip>
          </el-main>

          <el-main v-if="showMain == 3">
            <!-- 存储配置 -->
            <el-form ref="form" :model="config" label-width="100px">
              <el-form-item label="存储地址" style="width: 60%;">
                <el-input v-model="config.cos" placeholder="请输入地址，https://%s-***.cos.ap-***.myqcloud.com/"></el-input>
              </el-form-item>
              <el-form-item label="AccessKey" style="width: 60%;">
                <el-input v-model="config.cosSecretID" placeholder="请输入SecretID" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="SecretKey" style="width: 60%;">
                <el-input type="password" v-model="config.cosSecretKey" placeholder="请输入SecretKey" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" size="small" @click="onSubmit">保存并初始化数据</el-button>
                <!--                <el-button type="plain" size="small" @click="onInitHandle">初始化</el-button>-->
              </el-form-item>
            </el-form>
          </el-main>

          <el-main v-if="showMain == 4">
            <!-- Banner配置 -->
            <el-form ref="form" :model="config" label-width="100px">
              <el-form-item label="首页 Banner" style="width: 60%;">
                <el-input v-model="config.navBanner" placeholder="请输入地址，https://..."></el-input>
              </el-form-item>
              <el-form-item label="快链 Banner" style="width: 60%;">
                <el-input v-model="config.linkBanner" placeholder="请输入地址，https://..."></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" @click="saveBanner">保 存</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";

export default {
  name: "SettingView",
  components: {
    HeadBar,
  },
  data: function () {
    return {
      searchVal: "",
      activeIndex: "99",
      showMain: 1,
      multiUserDialog: false,
      mutilUserForm: {
        account: "",
        passwd: "",
      },
      userList: [
        {
          date: "2016-05-02",
          account: "wangxiaohu",
          uid: "1",
        },
        {
          date: "2016-05-04",
          account: "wangxiaohu",
          uid: "2",
        },
        {
          date: "2016-05-01",
          account: "wangxiaohu",
          uid: "3",
        },
        {
          date: "2016-05-03",
          account: "wangxiaohu",
          uid: "4",
        },
      ],
      config: {},
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSelect: function (key, keyPath) {
      this.showMain = key;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    exportDBData() {
      console.log('export db data')
    },
    onSubmit() {
      this.$store
        .dispatch("config/cosMigrate", JSON.stringify(this.config))
        .then((response) => {
          console.log(response);
          if (response.code == 0) {
            this.$message.success("success");
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },

    listUser() {
      let self = this;
      this.$store
        .dispatch("user/listUser", {})
        .then((response) => {
          console.log(response);
          self.userList = response.data.users;
        })
        .catch((res) => {
          console.log(res);
        });
    },

    deleteUserRow(index, rows) {
      console.log(index, rows)
      this.$store
        .dispatch("user/delUser", "id=" + rows[index].Id)
        .then((response) => {
          if (response.code != 0) {
            this.$message({
              message: "用户删除失败",
              type: 'warning'
            })
            return
          }
          this.multiUserDialog = false;
          this.$message({
            message: "用户删除成功",
            type: 'success'
          })
          this.listUser()
        })
        .catch(() => {
          this.$message({
            message: "用户删除失败",
            type: 'warning'
          })
        });
    },
    openMultiUserDrawer() {
      this.multiUserDialog = true;
    },
    cancelMultiUserDrawer() {
      this.multiUserDialog = false;
    },
    multiUserSubmit() {
      this.$store
        .dispatch("user/addUser", JSON.stringify(this.mutilUserForm))
        .then((response) => {
          console.log(response);
          if (response.code != 0) {
            this.$message({
              message: "用户添加失败",
              type: 'warning'
            })
            return
          }
          this.multiUserDialog = false;
          this.$message({
            message: "用户添加成功",
            type: 'success'
          })
          this.listUser()
        })
        .catch(() => {
          this.$message({
            message: "用户添加失败",
            type: 'warning'
          })
        });
    },
    saveBanner(){
      console.log(this.config)
    },
  },
  created() {
    this.listUser()
  }
};
</script>

<style scoped>
.el-menu-vertical {
  border: 0;
  padding-right: 20px;
}

.setting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  width: 1024px;
  display: block;
  padding-top: 20px;
  margin: 0 auto;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
