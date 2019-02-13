<template>
  <div class="ritawwwong-blog-wrap">
    <div class="ritawwwong-blog-main">
      <LayoutHeader/>

      <router-view/>

      <LayoutFooter/>
    </div>
    <!--<LayoutSideBar/>-->

  </div>
</template>

<script>
  import LayoutHeader from './layout-header';
  import LayoutSideBar from './layout-side-bar';
  import LayoutFooter from './layout-footer';
  export default {
    components: { LayoutHeader, LayoutFooter, LayoutSideBar }
  }
</script>

<style lang="less">
  .ritawwwong-blog {
    &-wrap {
      /*font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";*/
      display: flex;
      min-height: 100vh;
      background: #fff;
    }
    &-main {
      position: relative;
      flex: 1;
    }
  }
</style>
