<template>
  <div class="ritawwwong-blog-passage-detail">
    <vue-markdown :source="markdown" v-highlight></vue-markdown>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  export default {
    components: {VueMarkdown},
    props: ['markdown']
  }
</script>

<style lang="less">
.ritawwwong-blog-passage-detail {
  & > div {
    padding: 20px 20%;
    text-align: initial;
    & > p:first-child {display: none}
  }
}
</style>
