<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newToDoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>
      </span>
      <Modal v-if="showModal" @close="showModal = false">
        <!--
            you can use custom content here to overwrite
            default content
          -->
        <h3 slot="header">
          경고!
          <i class="closeModalBtn fa-solid fa-circle-xmark" @click="showModal = false"></i>
        </h3>
        <h3 slot="body">아무것도 입력하지 않으셨습니다.</h3>
        <h3 slot="footer">copy right</h3>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/ModalPage.vue';

export default {
  data(){
    return {
      newToDoItem : "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newToDoItem !== ''){
        //this.$emit('addTodoItem', this.newToDoItem);
        this.$store.commit('addOneItem', this.newToDoItem);
        this.clearInput();
      }
      else{  // 공백란
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newToDoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input {
  margin-right: 0.2rem;
}

input:focus {
  outline: none;
}

.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  margin-top: 0.8rem;
  font-size: 1.3rem;
}

.addContainer{
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn{
  cursor: pointer;
  color: white;
  vertical-align: middle;
}

.closeModalBtn{
  color: #42b983;
}

</style>