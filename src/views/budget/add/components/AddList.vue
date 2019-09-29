<template>
  <el-row style="width:100%">
    <el-col :span="4">
      <el-table
        :data="allList"
        style="width:100%"
        @selection-change="handleSelectionListChange"
        @row-click="openDetails"
      >
       
        <el-table-column label="计划单号" prop="planpageno" width="100"></el-table-column>
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
    <el-col :span="20" class="border-left">
      <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionItemChange">
       <el-table-column label="采购单号"  width="100">
          <template slot-scope="scope">
            <el-input v-model="scope.row.planpageno"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="物资编码">
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.materialCode"
              filterable
              remote
              reserve-keyword
              placeholder="请输入拼音码"
              :remote-method="getPyList"
              :loading="loading"
              @change="onSelectChange"
            >
              <el-option
                v-for="item in options"
                :key="item.materialCode"
                :label="item.tyName"
                :value="item"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column type="selection" label="操作" />
        <el-table-column label="采购数量">
          <template slot-scope="scope">
            <el-input v-model="scope.row.inAmount"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="价格" prop="buyPrice"></el-table-column>
        <el-table-column label="单位" prop="pack"></el-table-column>
        <el-table-column label="入出库单号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.in_out_docu"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="生产厂家" prop="manuCode"></el-table-column>
        <el-table-column label="规格" prop="spection"></el-table-column>
        <el-table-column label="条目id" prop="plandetailid">
            <template slot-scope="scope">
              <el-input v-model="scope.row.plandetailid"></el-input>
            </template>

        </el-table-column>
        <!-- <el-table-column label="采购数量">
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
            <el-input v-model="scope.row.pack"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="入出库单号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.in_out_docu"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="生产厂家">
          <template slot-scope="scope">
            <el-input v-model="scope.row.manuCode"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="规格">
          <template slot-scope="scope">
            <el-input v-model="scope.row.spection"></el-input>
          </template>
        </el-table-column>-->
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
      multipleItemSelection: [],
      loading: false,
      options: [],
      data: null
    };
  },
  mounted() {
    this.request.PurchasePlanCustGetlist().then(result => {
      
      result.forEach(item => {
        this.allList.push({
          planpageno: item.planPageno,

          organCode: item.organCode,
          inDate: item.organCode,
          
          data: item.tintendpurchasePlandetail,
          
        });
        this.tableData = item.tintendpurchasePlandetail;
      });
    });
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    getPyList(code) {
      const form = { pyCode: code };
      this.loading = true;
      this.request
        .goodsPylist(form)
        .then(result => {
          this.options = result;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onSelectChange(value) {
      this.data = value.materialCode;
     // console.log("onSelectChange");
      console.log(value);
      const index = this.tableData.length - 1;
      this.tableData[index].buyPrice = value.ghPrice;
      this.tableData[index].manuCode = value.manuCode;
      this.tableData[index].spection = value.spection;
      this.tableData[index].pack = value.minpack;
      this.tableData[index].materialCode = value.materialCode;
    },
    openDetails(row) {
      this.currentIndex = this.allList.indexOf(row);
      this.tableData = row.data;
    },
    addNewList(planpageno) {
      
      this.allList.push({ planpageno: planpageno, commt: "", data: [] });
      this.currentIndex = this.allList.length - 1;
      this.allList[this.currentIndex].data.push({});
      this.tableData = this.allList[this.currentIndex].data;
    },
    addNewItem() {
      this.tableData.push({});
    },
    addNewItemList(val) {
		// console.log(val.materialCode)
		//定义一个状态 true就添加 ，false就不添加
		let f =true;
		for (var i = 0; i < this.tableData.length; i++) {
			// console.log(this.tableData[i].materialCode);
			if(this.tableData[i].materialCode != val.materialCode){
				continue;
			}else{
				f=false;
			}
		}
		if(f){this.tableData.push(val);}
      
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
    },

    getCurrentListdetail() {
      return this.multipleItemSelection;
    },

    add(val) {
      console.log(val);
      this.allList.push({
        planpageno: val.planPageno,
        organCode: val.organCode,
        inDate: val.organCode,
        data: val.tintendpurchasePlandetail
      });
      this.tableData = val.tintendpurchasePlandetail;
    
         

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
  background: #494c4e;
}
.border-left {
  border-left: 1px solid #e4e7ed;
}
</style>
