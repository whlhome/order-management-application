<template>
  <list-layout>
    <template v-slot:header>
      <header-manager
        @addList="addList"
        @addItem="addItem"
        @deleteList="deleteList"
        @deleteItem="deleteItem"
        @invalid="invalid"
        @review="review"
        @send="send"
      />
    </template>
    <div class="main">
      <add-list ref="addList" />
      <div class="tab">
        <p>记录</p>
        <el-button type="primary" size="mini" @click="confirm">确定</el-button>
      </div>
      <show-list ref="showList" />
    </div>
  </list-layout>
</template>
<script>
import ListLayout from "@/components/ListLayout";
import HeaderManager from "./components/Header";
import AddList from "./components/AddList";
import ShowList from "./components/ShowList";
import { showSuccessToast, showWarnToast } from "@/util/Toast";
export default {
  name: "BudgetAdd",
  components: {
    ListLayout,
    HeaderManager,
    AddList,
    ShowList
  },
  methods: {
    addList() {
      this.request.planpagenoGetno().then(result => {
        console.log(result);
        this.$refs.addList.addNewList(result.planpageno);
      });
    },
    addItem() {
      this.$refs.addList.addNewItem();
    },
    deleteList() {
      this.$refs.addList.deleteList();
    },
    deleteItem() {
      this.$refs.addList.deleteItem();
    },
    invalid() {
      const list = this.$refs.addList.getCurrentList().slice();
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要作废单目");
        return;
      }
      let form = [];
      list.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.collectPageno = item.collectPageno;
        data.bf = 1;
        data.mainid = 16; //暂时写死
        form.push(data);
      });
      this.request.PurchasesumPlanUpdate(form).then(() => {
        showSuccessToast("作废成功");
      });
    },
    send() {
      const list = this.$refs.addList.getCurrentList().slice();
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要发送单目");
        return;
      }
      const a = Date.now();
      let form = [];
      list.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.collectPageno = item.collectPageno;
        data.sendFlag = 1 + "";
        data.sendDate = a;
        data.mainid = 15; //暂时写死
        form.push(data);
      });
      this.request.PurchasesumPlanUpdate(form).then(() => {
        showSuccessToast("发送成功");
      });
    },
    review() {
      const list = this.$refs.addList.getCurrentList().slice();
      console.log(list);
      if (!list || list.length === 0) {
        showWarnToast("请选择要审核单目");
        return;
      }
      const a = Date.now();
      let form = [];
      list.forEach(item => {
        const data = {};
        data.organCode = item.organCode;
        data.collectPageno = item.collectPageno;
        data.acceptFlag = 1 + "";
        data.acceptDate = a;
        data.mainid = 1; //暂时写死
        form.push(data);
      });
      this.request.PurchasesumPlanUpdate(form).then(() => {
        showSuccessToast("审核成功");
      });
    },
    confirm() {
      const addList = this.$refs.addList.getList().slice();
      console.log(addList);
      const allMain = [];
      const allData = [];
      addList.forEach(item => {
        allMain.push({
          collectPageno: item.collectPageno,
          organCode: item.organCode,
          inDate: item.inDate
        });
        item.data.forEach(dataitem => {
          dataitem.organ_code = item.organCode;
          dataitem.collectPageno = item.collectPageno;
          dataitem.inDate = item.inDate;
          allData.push(dataitem);
        });
      });
      this.request.PurchasesumPlanMainList([...allMain]).then(() => {
        this.request.PurchasesumPlanInsertList([...allData]);
      });
    },
    deepClone(source) {
      const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
      for (let keys in source) {
        // 遍历目标
        if (source.hasOwnProperty(keys)) {
          if (source[keys] && typeof source[keys] === "object") {
            // 如果值是对象，就递归一下
            targetObj[keys] = source[keys].constructor === Array ? [] : {};
            targetObj[keys] = this.deepClone(source[keys]);
          } else {
            // 如果不是，就直接赋值
            targetObj[keys] = source[keys];
          }
        }
      }
      return targetObj;
    }
  }
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab {
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
}
</style>
