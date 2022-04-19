<template>
  <div class="home">
    <div class="topBackgroup">
      <div class="content">
        <img src="../assets/images/top_trx_logo.png" draggable="true" />
      </div>
      <div class="title_text">
        <div class="title_tips">Lossless mining</div>
        <div class="title_tips">Liquidity pledge-free</div>
        <div class="reward">
          Reward
          <b class="value"><span>120 Million</span></b>
          USDT
        </div>
        <div class="submit">
          <a class="btnConnect" href="javascript:;">Connect wallet</a>
        </div>
      </div>
    </div>
    <div class="itemText" style="padding: 10px 20px">
      <van-tabs v-model="active">
        <van-tab title="Mining Pool">
          <div class="blockBox">
            <div class="blockTitle">
              <div class="leftIcon"></div>
              Pool data
            </div>
            <div class="blockContent">
              <div class="blockItem">
                <div class="itemTitle">Total output</div>
                <div class="itemValue">
                  <span id="totaloutput">30,110,050.98</span> TRX
                </div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">Valid node</div>
                <div class="itemValue"><span id="validnode">128</span></div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">Participant</div>
                <div class="itemValue"><span id="participant">1214</span></div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">User Revenue</div>
                <div class="itemValue red" style="color: #de3639!important;">
                  <span id="revenue">1,956,804.90</span> USDT
                </div>
              </div>
            </div>
          </div>
          <div
            class="sectionTips red"
            id="notice"
            style="color: #de3639!important;"
          >
            The first single deposit of more than 20,000 USDT will be rewarded
            10%, and this reward can only be enjoyed once. For example, the
            first single deposit of 30,000 USDT will be rewarded with 3,000
            USDT.
          </div>
          <div
            class="sectionTitle"
            style="width: 100%;
              text-align: center;
              color: #000;
              font-size: 17px;
              font-weight: 600;"
          >
            Mining
          </div>
          <div
            class="sectionTips"
            style="width: 100%;
              text-align: center;
              color: #a1a1b3;
              padding: 10px 0;
              font-size: 13px;"
          >
            Liquidity mining income
          </div>
          <div
            class="blockTitle alignCenter minerTitle"
            style="background-color: #c63127;
              color: #fff;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              padding: 10px 0;
              font-size: 15px;
              font-weight: 700;"
          >
            Supercomputing miner
          </div>
          <div class="sectionTitle">Help center</div>
          <div class="sectionTips">Hope it helps you</div>
          <van-collapse v-model="activeNames" style="text-align: left;">
            <van-collapse-item title="How do i need to join？" name="1"
              ><p style="font-size: 14px;color: #8f8f94;">
                Participating in non-destructive and non-guaranteed liquidity
                mining requires payment of TRX miner fees to receive the
                replacement gold coupons, and the TRX wallet address only needs
                to be claimed once. Automatically open mining permissions after
                success.
              </p></van-collapse-item
            >
            <van-collapse-item title="How to calculate income？" name="2">
              <p style="font-size: 14px;color: #8f8f94;">
                When you join successfully, the smart contract starts to
                calculate your address through the node and start to calculate
                the revenue.
              </p>
            </van-collapse-item>
            <van-collapse-item
              title="What is the yield percentage rate?"
              name="3"
            >
              <div
                class="mui-collapse-content"
                style="font-size: 14px;color: #8f8f94;"
              >
                <p>The yield below 20000USDT Rate≈3%,</p>
                <p>20000USDT-50000USDT yield Rate≈4%,</p>
                <p>50000USDT-100000USDT yield Rate≈5%,</p>
                <p>100000USDT-300000USDT yield Rate≈6%,</p>
                <p>
                  300000USDT-600000USDT yield Rate≈8% (limited to 100 places
                  worldwide),
                </p>
                <p>
                  and 600000USDT yield Rate≈10% (limited to 50 places worldwide)
                </p>
              </div>
            </van-collapse-item>
            <van-collapse-item title="How do i withdraw money?" name="2">
              <p>
                USDT withdrawals will be automatically sent to the wallet
                address you added to the node, other addresses are not
                supported.
              </p>
            </van-collapse-item>
            <van-collapse-item title="Friends recommendation reward" name="2">
              <p>
                Send your invitation link, and your friends will join the node
                through your link, and you will receive generous token
                rewards.You can get 20% of the income of the referrer.
              </p>
            </van-collapse-item>
          </van-collapse>
          <div class="sectionTitle">Audit report</div>
          <div class="sectionTips">We have a secure audit report</div>
          <div class="partnerBox">
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p1.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p2.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p3.png" draggable="true" />
              </div>
            </div>
          </div>
          <div class="sectionTitle">Partner</div>
          <div class="sectionTips">Our business partner</div>
          <div class="partnerBox">
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p4.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p5.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p6.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p7.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p8.png" draggable="true" />
              </div>
            </div>
            <div class="partnerItem">
              <div class="imgbox">
                <img src="../assets/images/p9.png" draggable="true" />
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="Account">
          <div class="blockBox">
            <div class="blockTitle">
              <div class="leftIcon"></div>
              My account
            </div>
            <div class="blockContent">
              <div class="blockItem">
                <div class="itemTitle">Total output</div>
                <div class="itemValue">
                  <span id="output_usdt">0.00</span> USDT
                </div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">Wallet balance</div>
                <div class="itemValue">
                  <span id="account_usdt">0.00</span> USDT
                </div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">Withdrawable</div>
                <div class="itemValue">
                  <span id="withdrawable_usdt">0.00</span> USDT
                </div>
              </div>
            </div>
            <div class="changeTab">
              <div
                @click="isActive = 1"
                :class="['changeItem', isActive == 1 ? 'active' : '']"
              >
                Withdraw2
              </div>
              <div
                @click="isActive = 2"
                :class="['changeItem', isActive == 2 ? 'active' : '']"
              >
                Record
              </div>
            </div>
            <div class="blockTitle">
              <div class="leftIcon"></div>
              Withdraw
            </div>
            <div class="exchange">
              <div class="changeLeft">
                <div class="changeValue">
                  <div class="innum uni-input">
                    <input
                      id="changevalue"
                      maxlength="140"
                      placeholder="0.00"
                      step="0.000000000000000001"
                      enterkeyhint="done"
                      autocomplete="off"
                      type="number"
                      class="uni-input-input"
                    />
                  </div>
                </div>
                <div class="changeAll">
                  <a style="color: inherit;" href="javascript:redeeall();"
                    >Redeem all</a
                  >
                </div>
              </div>

              <div
                class="changeIcon"
                style="height: 40px;border-right: 1px solid #777777;"
              ></div>
              <div class="changeRight">
                <div class="changeValue">
                  <div class="usdtimage">
                    <img src="../assets/images/top_usdt_icon.png" />
                    <span class="coinName">USDT</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="exchangeBtn"><a id="postChangeValue">Confirm</a></div>
            <div class="exchangeTips">
              Your withdraw will be sent to your USDT wallet address within 24
              hours in the future
            </div>
          </div>
        </van-tab>
        <van-tab title="Team">
          <div class="blockBox">
            <div class="blockTitle">
              <div class="leftIcon"></div>
              Team Data
            </div>
            <div class="blockContent">
              <div class="blockItem">
                <div class="itemTitle">Number of teams</div>
                <div class="itemValue">0</div>
              </div>
              <div class="blockItem">
                <div class="itemTitle">Team Revenue</div>
                <div class="itemValue">0 USDT</div>
              </div>
            </div>
          </div>
          <div class="blockBox shareBox">
            <div class="shareTitle">My wallet address</div>
            <div class="shareInfo">
              <div class="infoLeft"><span id="myaddress"></span></div>
              <div class="infoRight">
                <div class="copy">
                  <a class="btnmyaddress" id="btn_myaddress">Copy</a>
                </div>
              </div>
            </div>
            <div class="shareTips">
              Set the referrer, the referrer will get additional rewards from
              the mining pool
            </div>
            <div class="shareTitle">My share link</div>
            <div class="shareInfo">
              <div class="infoLeft">
                <span id="sharelink"
                  >https://www.imoretron.site/?token=I1X4LB&amp;from=bitkeep&amp;saleman=0</span
                >
              </div>
              <div class="infoRight">
                <div class="copy">
                  <a
                    id="btn_sharelink"
                    data-clipboard-text="https://www.imoretron.site/?token=I1X4LB&amp;from=bitkeep&amp;saleman=0"
                    >Copy</a
                  >
                </div>
              </div>
            </div>
            <div class="shareTips">
              Through the invitation link, invite friends to join the node to
              send, and get the results of friends
            </div>
            <div class="shareTips">
              Share with your friends through the link, and if your friends
              participate in the event and deposit 1,000 USDT or more of digital
              currency for the first time, both you and your friends can get a
              free reward worth 100 USDT.
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      active: 0,
      isActive: 1,
      activeNames: ["0"]
    };
  }
};
</script>
<style lang="scss" scoped>
.active {
  background-color: #c63127 !important;
  color: #fff;
}
.home {
  .topBackgroup {
    height: 340px;
    background-image: url("../assets/images/top_kv.jpg");
    background-size: cover;
    .content {
      display: inline-block;
      width: 140px;
      height: 25px;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title_text {
      color: #fff;
      margin-top: 30px;
      .title_tips {
        padding: 5px 0;
        font-size: 20px;
      }
      .reward {
        padding-top: 20px;
        font-size: 25px;
        .value {
          color: #f7931a;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
      .submit {
        position: relative;
        z-index: 10;
        width: 230px;
        text-align: center;
        background: #c63127;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        padding: 0px 0;
        font-weight: 700;
        margin: 50px auto;
        .btnConnect {
          display: block;
          padding: 10px 0;
          color: #fff;
        }
      }
    }
  }
  .itemText {
    .blockBox {
      margin-bottom: 20px;
      padding-left: 20px;
      text-align: left;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 1px 1px 10px 1px #ece6e6;
      .blockTitle {
        padding: 10px 0;
        font-size: 15px;
        font-weight: 700;
      }
      .blockContent {
        padding: 0 15px 10px 15px;
        .blockItem {
          display: flex;
          line-height: 25px;
          .itemTitle {
            flex: 4;
            color: #a1a1b3;
            font-size: 14px;
          }
          .itemValue {
            flex: 6;
            text-align: right;
            font-size: 14px;
            color: #000;
            font-weight: 600;
          }
        }
      }
      .changeTab {
        width: 96%;
        margin: 0 auto;
        .changeItem {
          width: 48%;
          display: inline-block;
          text-align: center;
          font-size: 14px;
          background-color: #ebf2fb;
          padding: 7px 0;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
      .blockTitle {
        padding: 10px 0;
        font-size: 15px;
        font-weight: 700;
        .leftIcon {
          display: inline-block;
          position: relative;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 5px;
          height: 15px;
          border-radius: 2px;
          margin-right: 10px;
          background: linear-gradient(1turn, rgba(90, 71, 217, 0.09), #71a8e0);
        }
      }
      .exchange {
        border: 1px solid #f3f3f3;
        border-radius: 7px;
        display: flex;
        padding: 10px 10px;
        .changeLeft {
          text-align: left;
          width: 45%;
          .changeValue {
            font-size: 20px;
            display: flex;
            align-items: baseline;
            .uni-input {
              width: 80%;
              display: block;
              font-size: 16px;
              line-height: 1.4em;
              height: 1.4em;
              min-height: 1.4em;
              overflow: hidden;
              .uni-input-input {
                position: relative;
                height: 100%;
                background: none;
                color: inherit;
                opacity: 1;
                font: inherit;
                line-height: inherit;
                letter-spacing: inherit;
                text-align: inherit;
                text-indent: inherit;
                text-transform: inherit;
                text-shadow: inherit;
                width: 100%;
                outline: none;
                border: none;
                padding: 0;
                margin: 0;
                text-decoration: inherit;
              }
            }
          }
          .changeAll {
            display: block;
            font-size: 15px;
          }
        }
        .changeRight {
          line-height: 40px;
          text-align: right;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          font-size: 16px;
          width: 45%;
          .usdtimage {
            height: 25px;
            position: relative;
            img {
              width: 25px;
              display: block;
              position: absolute;
              left: 0px;
              top: 0px;
            }
            .coinName {
              display: block;
              height: 25px;
              position: absolute;
              left: 30px;
              top: -5px;
            }
          }
        }
      }
      .exchangeBtn {
        margin: 20px auto;
        text-align: center;
        padding: 10px 0;
        font-size: 15px;
        background-color: #c63127 !important;
        color: #fff;
        border-radius: 5px;
        a {
          display: block;
          color: #fff;
        }
      }
    }
    .shareBox {
      padding: 10px 20px;
      margin-bottom: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 1px 1px 10px 1px #ece6e6;
      .shareTitle {
        color: #a1a1b3;
        font-size: 14px;
      }
      .shareInfo {
        margin-top: 10px;
        display: flex;
        padding: 15px 0;
        .infoLeft {
          width: 75%;
          font-size: 13px;
          line-height: 25px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .infoRight {
          width: 25%;
          font-size: 13px;
          .copy {
            display: block;
            padding: 5px 5px;
            background-color: #c63127;
            text-align: center;
            color: #fff;
            border-radius: 5px;
            .btnmyaddress {
              display: block;
              color: #fff;
            }
          }
        }
      }
      .shareTips {
        font-size: 12px;
        margin-bottom: 30px;
        color: #a1a1b3;
      }
    }
  }
  #notice {
    width: 100%;
    text-align: center;
    color: #a1a1b3;
    padding: 10px 0;
    font-size: 13px;
  }
  .sectionTitle {
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 17px;
    font-weight: 600;
  }
  .sectionTips {
    width: 100%;
    text-align: center;
    color: #a1a1b3;
    padding: 10px 0;
    font-size: 13px;
  }
  .mui-navigate-right:after,
  .mui-push-left:after,
  .mui-push-right:after {
    font-family: Muiicons;
    font-size: inherit;
    line-height: 1;
    position: absolute;
    top: 50%;
    display: inline-block;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-decoration: none;
    color: #bbb;
    -webkit-font-smoothing: antialiased;
  }
  .partnerItem {
    width: 32%;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
