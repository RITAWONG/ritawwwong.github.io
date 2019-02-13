<template>
  <div class="ritawwwong-blog-header flex-box">
    <div class="header-left center-box">青旗沽酒趁梨花</div>
    <div class="header-right flex">
      <ul v-if="catalogies && catalogies.length" class="flex-box">
        <li v-for="(item,i) in catalogies" :key="i" class="flex" @click="handleClickCatalog(item)" :class="item.selected ? 'active' : ''"><span>{{item.name}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        catalogies: [
          // {name: '文章', code: 'passage', selected: false},
          {name: '文摘', code: 'digest', selected: false},
          {name: '译文集', code: 'translate', selected: false},
          // {name: '日志', code: 'log', selected: false}
        ]
      }
    },
    created() {
      this.matchCatalog();
    },
    watch: {
      $route(route) {
        this.matchCatalog();
      }
    },
    methods: {
      handleClickCatalog (item) {
      //   console.log(item);
        if (item && item.code) {
          this.$router.push(`/blog/${item.code}`);
        }
      },
      matchCatalog() {
        const code = this.$route.params.type;
        let self = this;
        let catalogies = self.catalogies;
        if (code) {
          catalogies.forEach((c, i) => {
            catalogies[i].selected = false;
            if (c.code && c.code === code) {
              catalogies[i].selected = true;
            }
          });
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ritawwwong-blog-header {
    position: relative;top: 0;left: 0;right: 0;border-bottom: 1px solid #333;
    .header {
      &-left {
        width: 38.1%;height: 60px;font-weight: bold;color: #333;font-size: 22px;
      }
      &-right {
        width: 61.8%;
        &>ul {
          width: 60%;margin: 0 auto;
          &>li {
            text-align: center;list-style: none;font-size: 16px;color: #666;height: 60px;line-height: 60px;cursor: pointer;
            span {
              display: inline-block;position:relative;
              &:after {position:absolute;content:'';left:50%;top:99%;border:1.5px solid transparent;border-radius: 3px;}
            }
            &:hover span, &.active span { font-weight: bold; }
            &:hover span:after, &.active span:after { animation: menubling 0.2s linear forwards; }

            @keyframes menubling { from{left:50%;width:0;border-color:#333;} to{left:0;width:100%;border-color:#333;} }
          }
        }
      }
    }
  }
</style>
