<template>
  <div class="header">
    <div class="header__container">
      <img class="header__img" src="../assets/header/logo_1.svg">
      <a class="header__text_btn">Home</a>
      <a class="header__text_btn">Stream</a>
      <a class="header__text_btn">Library</a>
      <div class="header__searchbar-container">
        <textarea class="header__searchbar"></textarea>
      </div>
      <a class="header__text_btn header__upload_btn">Upload</a>
      <a class="header__account_btn header__text_btn">M8ZA</a>
      <div class="header__square_btn_container"><img class="header__square_btn_image" src="../assets/header/rating.svg"></div>
      <div class="header__square_btn_container"><img class="header__square_btn_image" src="../assets/header/notification.svg"></div>
      <div class="header__square_btn_container"><img class="header__square_btn_image" src="../assets/header/menu_point.svg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
}
</script>

<style scoped>
  .header {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    background-color: #333333;
  }
  .header__container {
    width: 1240px;
    height: 46px;
    margin-left: 330px;
    display: flex;
    flex-direction: row;
  }
  .header__img {
    height: 36px;
    width: 69px;
    padding: 5px 0;
    background-color: #85F4FF;
  }
  .header__text_btn {
    text-align: center;
    font: bold;
    font-size: 14px;
    color: #EEEEEE;
    height: 16px;
    width: 104px;
    padding: 15px 0;

  }
  .header__searchbar-container {
    padding: 10px 15px 0px 15px;
    height: 36px;
    width: 520px;
  }
  .header__searchbar {
    height: 20px;
    width: 100%;
    resize: none;
    border-radius: 4px;
    font-size: 15px;
    color: #9c9c9c;
  }
  .header__upload_btn {
    width: 64px;
  }
  .header__account_btn {
    width: 109px;
  }
  .header__square_btn_container {
    padding: 13px;
  }
  .header__square_btn_image {
    height: 20px;
    width: 20px;
  }
</style>
