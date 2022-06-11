<template>
  <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem , index) in this.storedTodoItems" 
            v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fa-solid fa-check" 
               v-bind:class="{checkBtnCompleted: todoItem.completed}" 
               v-on:click="toggleComplete({todoItem, index})"></i>
            <span v-bind:class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
              <i class="fa-solid fa-trash-can"></i>
            </span>
        </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      // 여기서 인자를 선언안해도 위에서 v-on:click에 객체로 묶어서 파라미터를 넘기면 알아서 넘어감
      // 2개 이상일시 꼭 객체로 넘겨준다.
      removeTodo: 'removeOneItem',
      toggleComplete : 'toggleOneItem'
    }),
    // removeTodo(todoItem, index) {
    //   //this.$emit('removeItem',todoItem, index); --> vuex껄 호출
    //   this.$store.commit('removeOneItem', { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   //this.$emit('toggleItem', todoItem, index);
    //   this.$store.commit('toggleOneItem', { todoItem, index })
    // }
  },
  computed : {
    ...mapGetters(['storedTodoItems'])
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}

.checkBtnCompleted{
  color: #b3adad;
}

.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn{
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active{
  transition: all 1s;
}

.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>