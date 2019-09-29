<template>
  <list-layout>
    <template v-slot:header>
      <header-manager
        @addList="addList"
        @addItem="addItem"
        @deleteList="deleteList"
        @deleteItem="deleteItem"
        @save="save"
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
      <show-list ref="showList" @addToAdd="addToAdd" />
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
    // deleteList() {
      
    //    const list = this.$refs.addList.getCurrentList().slice();

    //   console.log(list);
    //   if (list.length === 0) {
    //     showWarnToast("请选择要删除单目");
    //   }
    //   //const a = Date.now();
    //   const form = {
    //     organCode: list[0].organCode,
    //     planPageno: list[0].planpageno + "",
    //     // sendFlag: 1 + "",
    //     // sendDate: a
    //   };
    //   this.request.PurchasePlanDelByIdlist(form).then(() => {
    //     this.$refs.addList.deleteList();
    //     showSuccessToast("删除成功");
        
    //   });
    // },
    deleteList() {
      
      const addListDel = this.$refs.addList.getCurrentList().slice();
      console.log(addListDel.length);
      const allMainDel = [];
      addListDel.forEach(item => {
        allMainDel.push({
          planPageno: item.planpageno,
          organCode: item.organCode,
         
        });
      });
      this.request.PurchasePlanDelByIdlist([...allMainDel]).then(() => {
         
      showSuccessToast("删单成功");
     window.location.reload();
         

      });
    },
    deleteItem() {
       const addListDeldetail = this.$refs.addList.getCurrentListdetail().slice();
      console.log(addListDeldetail.length +'aaa');
      const allDateDel = [];
      addListDeldetail.forEach(item => {
        allDateDel.push({  
         plandetailid:item.plandetailid, 
        });
      });
      this.request.PurchasePlanDetailid([...allDateDel]).then(() => {   
      showSuccessToast("删条条目成功");
    // window.location.reload();
      });
      //this.$refs.addList.deleteItem();
    },
    invalid() {
      // const list = this.$refs.addList.getCurrentList().slice();
      // console.log(list);
      // if (list.length === 0) {
      //   showWarnToast("请选择要作废单目");
      // }
      // const form = {
      //   organCode: list[0].organCode,
      //   planPageno: list[0].planpageno + "",
      //   cancelFlag: 1 + ""
      // };
      // this.request.purchasePlanUpdate(form).then(() => {
      //   showSuccessToast("作废成功");
      //   window.location.reload();
      // });
      const listInvalid = this.$refs.addList.getCurrentList().slice();
      console.log(listInvalid.length);
      if (listInvalid.length === 0) {
        showWarnToast("请选择要作废单目");
       }
      const allMainInvalid = [];
      listInvalid.forEach(item => {
        allMainInvalid.push({
          planPageno: item.planpageno,
          organCode: item.organCode,
          cancelFlag: 1 + "" 
        });
      });
      this.request.purchasePlanUpdate([...allMainInvalid]).then(() => {  
      showSuccessToast("作废成功");
      window.location.reload();
      });
    },
    send() {
      // const list = this.$refs.addList.getCurrentList().slice();
      // console.log(list);
      // if (list.length === 0) {
      //   showWarnToast("请选择要发送单目");
      // }
      // const a = Date.now();
      // const form = {
      //   organCode: list[0].organCode,
      //   planPageno: list[0].planpageno + "",
      //   sendFlag: 1 + "",
      //   sendDate: a
      // };
      // this.request.purchasePlanUpdate(form).then(() => {
      //   showSuccessToast("发送成功");
      // });
      const listSend = this.$refs.addList.getCurrentList().slice();
      console.log(listSend.length);
      if (listSend.length === 0) {
        showWarnToast("请选择要发送单目");
       }
      const allMainSend = [];
      const a = Date.now();
      listSend.forEach(item => {
        allMainSend.push({
          planPageno: item.planpageno,
          organCode: item.organCode,
          sendFlag: 1 + "",
          sendDate: a
        });
      });
      this.request.purchasePlanUpdate([...allMainSend]).then(() => {  
      showSuccessToast("发送成功");
      //window.location.reload();
      });
    },
    review() {
      // const list = this.$refs.addList.getCurrentList().slice();
      // console.log(list);
      // if (list.length === 0) {
      //   showWarnToast("请选择要审核单目");
      // }
      // const a = Date.now();
      // const form = {
      //   organCode: list[0].organCode,
      //   planPageno: list[0].planpageno + "",
      //   verifyFlag: 1 + "",
      //   verifydate: a
      // };
      // this.request.purchasePlanUpdate(form).then(() => {
      //   showSuccessToast("审核成功");
      // });
      const listReview = this.$refs.addList.getCurrentList().slice();
      console.log(listReview.length);
      if (listReview.length === 0) {
        showWarnToast("请选择要审核单目");
       }
      const allMainReview = [];
      const a = Date.now();
      listReview.forEach(item => {
        allMainReview.push({
          planPageno: item.planpageno,
          organCode: item.organCode,
          verifyFlag: 1 + "",
          verifydate: a
         
        });
      });
      this.request.purchasePlanUpdate([...allMainReview]).then(() => {
         
      showSuccessToast("审核成功");
     window.location.reload();
         

      });
    },
    save() {
      //const addList = this.$refs.addList.getList().slice();
      const addList = this.$refs.addList.getCurrentList().slice();
      console.log(addList);
      const allMain = [];
      const allData = [];
      addList.forEach(item => {
        allMain.push({
          planPageno: item.planpageno,
          organCode: item.organCode,
          inDate: item.inDate
        });
        item.data.forEach(dataitem => {
          dataitem.organ_code = item.organCode;
          dataitem.planPageno =item.planpageno;
          dataitem.inDate = item.inDate;
          allData.push(dataitem);
          
        });
      });
      this.request.PurchasePlanMainList([...allMain]).then(() => {
      this.request.planpagenoInsertList([...allData]);
      showSuccessToast("保存成功");
      //window.location.reload();
         

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
    },
    addToAdd(val) {
      //yjs
	  for (var i = 0; i < val.tintendpurchasePlandetail.length; i++) {
		  // console.log(val.tintendpurchasePlandetail[i].materialCode);
	  	this.$refs.addList.addNewItemList(val.tintendpurchasePlandetail[i]);
	  }
     
      // this.$refs.addList.add(val);
      
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
