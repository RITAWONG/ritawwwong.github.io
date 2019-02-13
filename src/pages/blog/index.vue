<template>
  <div>
    <Passage :data="passages"></Passage>
  </div>
</template>

<script>
  import Passage from '@/pages/components/passage-list.vue';
  import { getPassages, datas } from './data/passage.js';
  export default {
    components: {Passage},
    data() {
      return {
        datas,
        codes: {
          digest: 'digests',
          translate: 'translates',
        },
        passages: []
      }
    },
    created() {
      this.passages = this.getDatas();
    },
    watch: {
      $route() {
        this.passages = this.getDatas();
      }
    },
    computed: {
      code() {
        let codes = this.codes;
        let code = this.$route.params.type || 'digest';
        return codes[code];
      }
    },
    methods: {
      getPassages,
      getDatas() {
        let data = this.datas[this.code];
        return this.getPassages(data);
      }
    }
  }
</script>

<style scoped>

</style>
