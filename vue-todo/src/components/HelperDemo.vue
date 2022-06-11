<template>
  <div id="root">
      <p>{{ originalPrice }}</p>
      <p>{{ doublePrice }}</p>
      <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        // 아래 내용을 Helper로 간단하게 만들 수 있다. (이름과 값이 같은 경우)
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])

        // originalPrice(){
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice(){
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice(){
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style>

</style>