<template>
  <el-row style="width:100%">
    <el-col :span="8">
      <el-table
        :data="allList"
        style="width:100%"
        @selection-change="handleSelectionListChange"
        @row-click="openDetails"
      >
        <el-table-column
          label="汇总单号"
          prop="collectPageno"
          width="100"
        ></el-table-column>
        <el-table-column type="selection" label="操作" width="50" />
        <el-table-column label="组织机构" width="100">
          <template slot-scope="scope">
            <el-input v-model="scope.row.organCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="选择入库日期" width="200">
          <template slot-scope="scope">
            <el-date-picker
              style="width: 100%"
              v-model="scope.row.inDate"
              type="date"
              placeholder="选择入库日期"
            ></el-date-picker>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="16" class="border-left">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionItemChange"
      >
        <el-table-column label="采购申请单号" width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.collectPageno"></el-input>
          </template>
        </el-table-column>
        <el-table-column type="selection" label="操作" />
        <el-table-column label="批次号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.batchPageno"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="物资编码">
          <template slot-scope="scope">
            <el-input v-model="scope.row.materialCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="采购数量">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inAmount"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="价格">
          <template slot-scope="scope">
            <el-input v-model="scope.row.buyPrice"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="单位">
          <template slot-scope="scope">
            <el-input v-model="scope.row.bf"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="金额">
          <template slot-scope="scope">
            <el-input v-model="scope.row.bf1"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="供应商">
          <template slot-scope="scope">
            <el-input v-model="scope.row.supplyerCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="包装">
          <template slot-scope="scope">
            <el-input v-model="scope.row.bf2"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "AddList",
  data() {
    return {
      allList: [],
      input: null,
      currentIndex: 0,
      tableData: [],
      multipleListSelection: [],
      multipleItemSelection: []
    };
  },
  mounted() {
    this.request.planCustSumCustGetlist().then(result => {
      result.forEach(item => {
        this.allList.push({
          collectPageno: item.collectPageno,
          organCode: item.organCode,
          inDate: item.organCode,
          data: item.tpurchaseplansumdetail,
          mainid: item.mainid
        });
        this.tableData = item.tpurchaseplansumdetail;
      });
    });
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    openDetails(row) {
      this.currentIndex = this.allList.indexOf(row);
      this.tableData = row.data;
    },
    addNewList(planpageno) {
      this.allList.push({ collectPageno: planpageno, commt: "", data: [] });
      this.currentIndex = this.allList.length - 1;
      this.allList[this.currentIndex].data.push({});
      this.tableData = this.allList[this.currentIndex].data;
    },
    addNewItem() {
      this.tableData.push({});
    },
    handleSelectionListChange(val) {
      this.multipleListSelection = val;
    },
    handleSelectionItemChange(val) {
      this.multipleItemSelection = val;
    },
    deleteList() {
      const item = this.allList[this.currentIndex];
      if (this.tableData == item.data) {
        this.tableData = [];
      }
      this.allList.splice(this.currentIndex, 1);
    },
    deleteItem() {
      this.multipleItemSelection.forEach(item => {
        const index = this.tableData.indexOf(item);
        this.tableData.splice(index, 1);
      });
    },
    getList() {
      return this.allList;
    },
    getCurrentList() {
      return this.multipleListSelection;
    }
  }
};
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.el-table .success-row {
  background: #409eff;
}
.border-left {
  border-left: 1px solid #e4e7ed;
}
</style>
