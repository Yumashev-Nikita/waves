<template>
  <div class="library-navbar__container">
    <router-link to='/overview'  class='rl-ntd library-navbar__row-element on-hover-bbt'> Overview  </router-link>
    <router-link to='/likes'     class='rl-ntd library-navbar__row-element on-hover-bbt'> Likes     </router-link>
    <router-link to='/playlists' class='rl-ntd library-navbar__row-element on-hover-bbt'> Playlists </router-link>
    <router-link to='/albums'    class='rl-ntd library-navbar__row-element on-hover-bbt'> Albums    </router-link>
    <router-link to='/stations'  class='rl-ntd library-navbar__row-element on-hover-bbt'> Stations  </router-link>
    <router-link to='/following' class='rl-ntd library-navbar__row-element on-hover-bbt'> Following </router-link>
    <router-link to='/history'   class='rl-ntd library-navbar__row-element on-hover-bbt'> History   </router-link>
  </div>
</template>

<script>
export default {
  name: "LibraryNavBar",
}
</script>

<style scoped>
  .library-navbar__container {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
      
  }
  .library-navbar__row-element {
    margin-bottom: -1px;
    padding-bottom: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 25px;
    font-size: 23px;
    font-weight: bold;
    height: 40px;
    border-bottom: 2px solid #e5e5e500;
  }
  
  .rl-ntd {
    color: #111;
    text-decoration: none;
  }
  .rl-ntd:hover {
    border-bottom: 2px solid #0094d9;
  }
  .router-link-active {
    color: #0094d9;
    border-bottom: 2px solid #0094d9;
  }
  .on-hover-bbt {
    transition: border-bottom 0.1s;
  }
</style>