<!-- src/views/Modules.vue -->
<template>
  <!-- 卡片部分 -->
  <div class="card-container">
    <el-card class="card" v-for="(card, cardIndex) in cardStoreData" :key="cardIndex">
      <div class="card-title">
        {{ card.title }}
      </div>
      <div class="card-options">
        <el-radio
          v-for="(option, optionIndex) in card.options"
          :key="optionIndex"
          :id="`option_${cardIndex}_${optionIndex}`"
          :name="`option_${cardIndex}`"
          v-model="card.useroption"
          :label="option.name"
          @change="onDialogOpen(card.title, option.name,option.opt, option.args)"
        ></el-radio>
      </div>
    </el-card>
  </div>
  <!-- 弹出窗逻辑 -->
  <div>
    <el-dialog title="参数选择" v-model="dialogVisible" @close="onDialogClose">
      <p>当前选项：{{ currentOption }}</p>
      <p v-if="currentArgs && Object.keys(currentArgs).length > 0">
        <p v-for="(argopts,argname) in currentArgs">
        {{ argname }}:
        
        <el-select v-model="selectedopt[argname]" placeholder="请选择参数">
          <!-- 
          label	这是给用户看的
          value	点击某个label(option)之后，将对应的值给v-model绑定的值model
          key	 相当于身份令牌，唯一的，防止出错
 -->
          <el-option
            v-for="(item,index) in argopts"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </p>
      <el-button @click="submitArgs">确认</el-button>
      </p> 
    </el-dialog>
    </div>
  <!--  -->
  
</template>
  
<script setup lang="ts">

////
import { useCardStore,currentTitle,currentOption, currentArgs,selectedopt,selectedArgs} from "@/stores/elementcard/elementcard";
import { valueEquals } from "element-plus";
import { ref, computed } from 'vue';


const cardStore = useCardStore();
const cardStoreData = computed(() => cardStore.receiveData);
const dialogVisible = ref(false);

const onDialogOpen = (cardTitle: string, option: string, opt:Record<string,any>,args: Record<string, any>) => {
  currentTitle.value=cardTitle;
  currentOption.value = option;
  currentArgs.value = args;
  dialogVisible.value = true;
  // console.log("openPopup函数执行")
  selectedopt.value = opt;
  selectedArgs.value = args;
};

const submitArgs = () => {
  console.log("submitArgs函数运行")
  if (currentOption.value && selectedArgs.value !== undefined) {
    const cardIndex = cardStoreData.value.findIndex(card => card.title === currentTitle.value);
     
    if (cardIndex !== -1) {
      const card = cardStoreData.value[cardIndex];
      cardStore.updateArgs(currentTitle.value, currentOption.value, { args: selectedopt.value });
      // console.log()
      // const argsValue=Reflect.get(selectedopt.value,'__v_raw')
      // delete argsValue.Prototype
      console.log(currentTitle.value,currentOption.value,  { args: Reflect.get(selectedopt.value,'__v_raw')});
      
    }
  }
  dialogVisible.value = false;
};
const onDialogClose = () => {
    console.log('Dialog is closing...');
    submitArgs();
  };
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.card {
    margin-bottom: 20px;
    margin-left: 100px;
    display: block;
    width: calc(80% - 10px);
    transition: box-shadow 0.3s ease;
    /* 添加阴影的过渡动画 */
    border: 1px solid gainsboro;
}

.card-title {
    text-align: center;
    font-size: 18px;
    padding: 10px;
}

.card-options {
    text-align: center;
    padding: 10px;
    margin: 20px;

}

.hovered {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
}
 /* test */
 .dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  