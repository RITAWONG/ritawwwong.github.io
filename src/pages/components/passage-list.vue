<template>
  <div class="ritawwwong-blog-list">
    <ul class="passage">
      <li class="item" v-for="(item, i) in data" :key="i" @click="handleClickPassage(i)">
        <div class="time">{{item.time}}</div>
        <div><div class="title">{{item.title}}</div></div>
        <div class="desc">{{item.desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  export default {
    components: {VueMarkdown},
    props: {
      data: {
        type: Array,
        default: () => []
      },
    },
    // create() {
    //   console.log('data', this.data);
    // },
    methods: {
      handleClickPassage(idx) {
        this.$router.push(`${this.$route.path}/${idx}`);
      }
    }
  }
</script>

<style lang="less" scoped>
  .ritawwwong-blog-list {
    padding: 20px;
    .passage {
      padding: 0 20%;
      .item {
        list-style: none;cursor: pointer;padding: 50px 0;
        .time {
          position: relative;display: inline-block;padding:0 10px;margin-bottom: 20px;
          &:before, &:after { position:absolute;content: '';width:30px;height:1px;top: 40%;background: linear-gradient(to right,#333,transparent);border-radius: 10px;}
          &:before { left: -30px;transform: rotate(-180deg); }
          &:after { left: 100%; }
        }
        .title {
          font-size: 22px;font-weight: bold;color: #333;margin-bottom: 20px;display: inline-block;position: relative;
          &:after {position:absolute;content:'';top:100%;border:1px solid #333;border-radius: 3px;left:0;width:100%;}
          &:hover:after { animation: menubling 0.2s linear forwards; }

          @keyframes menubling { from{left:50%;width:0;border-color:#333;} to{left:0;width:100%;border-color:#333;} }
        }
        .desc {
          font-size: 14px;color: #666;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
        }
      }
    }
  }
</style>
