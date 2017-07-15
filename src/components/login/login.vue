<template>
  <div class="login-wrap">
    <div class="old_user_login">
      <label class="acct_top_back" @click="goback"></label>
      <img src="./login01.png" class="acct_top_show">
    </div>
    <div data-v-4e187200="" class="bg-wrap" style="height: 526px;">
      <div data-v-4e187200="" class="login_content">
        <h1 data-v-4e187200="">老用户登录</h1>
        <div data-v-4e187200="" id="wrap">
          <div data-v-4e187200="" v-show="false">
            <form data-v-4e187200="" id="reset-form">
              <ul data-v-4e187200="" class="fm_list">
                <li data-v-4e187200="" class="multi">
                  <input data-v-4e187200="" required="required" type="tel" maxlength="11" placeholder="请输入手机号" class="field_ipt">
                  <a data-v-4e187200="" class="fidld_skip">获取验证码</a>
                </li>
                <li data-v-4e187200="">
                  <input data-v-4e187200="" required="required" type="text" maxlength="10" id="loginVerifyCode" placeholder="请输入手机验证码" class="field_ipt">
                </li>
              </ul>
              <div data-v-4e187200="" class="set_link">
                <p data-v-4e187200="" class="problem_contact_service">遇到问题？请
                  <a data-v-4e187200="" href="tel:400-609-2288">联系客服</a>
                </p>
                <a data-v-4e187200="">
                  <b data-v-4e187200=""></b>
                  <span data-v-4e187200="">账号密码登录</span>
                </a>
              </div>
            </form>
          </div>
          <div data-v-4e187200="" v-show="true">
            <form data-v-4e187200="" id="login-form">
              <ul data-v-4e187200="" class="fm_list">
                <li data-v-4e187200="">
                  <input data-v-4e187200="" type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
                </li>
                <li data-v-4e187200="" class="multi">
                  <input data-v-4e187200="" type="password" maxlength="20" placeholder="请输入登录密码" required="required" class="field_ipt">
                  <a data-v-4e187200="" class="fidld_skip">忘记密码</a>
                </li>
              </ul>
              <div data-v-4e187200="" id="setting" class="set_link">
                <a data-v-4e187200="" href="javascript:;">
                  <span data-v-4e187200="">手机号快捷登录</span>
                  <b data-v-4e187200=""></b>
                </a>
              </div>
            </form>
          </div>
          <input data-v-4e187200="" type="button" value="登录" class="btn_login">
          <input data-v-4e187200="" type="button" value="注册" class="btn_regisiter" @click="register">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goback(){
        this.$router.push('/user')
      },
      register(){
          this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #f2f2f2;
  }

  .old_user_login {
    width: 100%;
    height: 11.75rem;
    background: #fff;
    position: relative;
  }

  .old_user_login .acct_top_back {
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: .3rem;
    top: 46px;
    border: 1px solid #3aad36;
  }

  .old_user_login .acct_top_back:after {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }

  .acct_top_show {
    width: 10rem;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 30%;
    left: 40%;
    margin-left: -1.2rem;
  }

  .bg-wrap {
    height: 526px;
    background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    height: 79%;
  }

  .login_content{
    width: 100%;
    height: 6.5rem;
    box-sizing: border-box;
  }

  #loginBg h1, #registerBg h1,.login_content h1{
    width: 100%;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 6rem;
    box-sizing: border-box;
    height: 7rem;
    font-weight: 400;
  }

  .fm_list li{
    width: 90%;
    margin: 0 auto;
    height: 4.1667rem;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }

  .field_ipt{
    font-size: 16px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    height: 4.1667rem;
    box-sizing: border-box;
    border: 0;
    font-family: Microsoft YaHei;
    outline: 0 none;
  }

  .fidld_skip{
    display: inline-block;
    float: right;
    font-size: 16px;
    color: #3aad36;
    text-decoration: none;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding:0.3333rem 1.25rem;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0.8333rem;
  }

  .set_link{
    padding: 0.75rem 0 1.66666rem;
    text-align: right;
    height: 4.167rem;
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    box-sizing: border-box;
    position: relative;
  }

  .set_link a{
    color: #3aad36;
    letter-spacing: 1px;
    font-size: 15px;
    margin: 0 0 3.3333rem;
  }

  .set_link a span{
    float: right;
    line-height: 1.67rem;
    margin-right: 0.5833rem;
  }

  .set_link a b{
    width: 8px;
    height: 8px;
    display: block;
    position: absolute;
    right: 0;
    top: 1.16666rem;
    border-top: 1px solid;
    border-right: 1px solid;
    /*transform: rotate(45deg);*/
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }

  .btn_login, .btn_regisiter{
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height: 3rem;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .btn_login{
    margin: 0 auto 1.25rem;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
    font-family: \\5FAE\8F6F\96C5\9ED1,Microsoft YaHei,Helvetica,STHeiti,Droid Sans Fallback;
  }

  .btn_regisiter{
    margin: 10px auto 0;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: .5;
    fill-opacity: 50%;
  }
</style>
