<template>
  <div class="home">
      <div class="content" style="display:block;">
        <img src="../assets/picture/dialogbg.png" alt="">
        <div class="qrcode">
          <div class="list">
            <img src="../assets/picture/TokenPocket.png" alt="">
            <div class="text"> TokenPocket</div>
            <button @click="submit('tp')">点击进入</button>

          </div>
          <div class="list">
            <img src="../assets/picture/imToken.png" alt="">
            <div class="text"> imToken</div>
            <button @click="submit('im')">点击进入</button>
          </div>
          <div class="list">
            <img src="../assets/picture/tl.png" style="padding: 2px;">
            <div class="text">Tronlink</div>
            <button class="btn-copy" v-clipboard:copy="shareLink+'About?token=8ROXBX'" v-clipboard:success="onCopy">点击进入</button>
          </div>
          <div class="list">
            <img src="../assets/picture/sp.png" style="padding: 2px;">
            <div class="text">SafePal Pro</div>
            <button class="btn-copy" v-clipboard:copy="shareLink+'About?token=8ROXBX'" v-clipboard:success="onCopy">点击进入</button>
          </div>
          <div class="list">
            <img src="../assets/picture/tw.png" style="padding: 2px;">
            <div class="text"> Trust Wallet</div>
            <button class="btn-copy" v-clipboard:copy="shareLink+'About?token=8ROXBX'" v-clipboard:success="onCopy">点击进入</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    // CountTo
  },
  data() {
    return {
      shareLink: window.location.href
    };
  },
  created() {

  },
  methods:{
    submit(target){
      if ('tp' == target){
        // this.$router.push({ path:'/About?token=8ROXBX'})
        window.location.href="tpdapp://open?params={\"url\": \"http://imtrx.info/?from=bitkeep&lang=en&token=8ROXBX\", \"chain\": \"Pay\", \"source\":\"xxx\"}";
      }else if('im' == target){
        // this.$router.push({ path:'/About?token=8ROXBX'})
        window.location.href="imtokenv2://navigate?screen=DappView&url=http://imtrx.info/?from=bitkeep&lang=en&token=8ROXBX";
      }
      // else if('tl' == target){
      //   // this.$router.push({ path:'/About?token=8ROXBX'})
      //   window.location.href="imtokenv2://navigate?screen=DappView&url=http://192.168.1.5:8850/#/About?token=8ROXBX";
      // }else if('wp' == target){
      //   // this.$router.push({ path:'/About?token=8ROXBX'})
      //   window.location.href="imtokenv2://navigate?screen=DappView&url=http://192.168.1.5:8850/#/About?token=8ROXBX";
      // }else if('tw' == target){
      //   // this.$router.push({ path:'/About?token=8ROXBX'})
      //   window.location.href="imtokenv2://navigate?screen=DappView&url=http://192.168.1.5:8850/#/About?token=8ROXBX";
      // }
    },
    onCopy(){
      this.$toast({ message: "复制成功，请在钱包DAPP中打开"});
    }
  }
};
</script>
<style>
.content img {
  width: 100%;
  border-radius: 10px;
  position: relative;
}
.content .qrcode {
  width: 100%;
  height: 160px;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: 0;
}
.content .qrcode .list {
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 35px;
}
.content .qrcode .list img {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
.content .qrcode .list .text {
  flex: 1;
}

.content .qrcode .list button {
  margin-left: 15px;
  border: none;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 10px;
  letter-spacing: 0px;
  width: 79px;
  height: 24px;
  border-radius: 15px;
  background-color: #fff8e1;
  color: #8b405b;
}

</style>
