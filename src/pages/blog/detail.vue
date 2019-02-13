<template>
  <div>
    <PassageDetail :markdown="passages[index].source"></PassageDetail>
  </div>
</template>

<script>
  import PassageDetail from '@/pages/components/passage-detail.vue';
  import { getPassages, datas } from './data/passage.js';

  export default {
    components: {PassageDetail},
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
      },
    },
    computed: {
      code() {
        let codes = this.codes;
        let code = this.$route.params.type || 'digest';
        return codes[code];
      },
      index() {
        let idx = this.$route.params.index || 0;
        return parseInt(idx);
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
