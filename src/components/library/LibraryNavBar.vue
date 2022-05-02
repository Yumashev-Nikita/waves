<template>
  <div class="library-navbar__container">
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'overview'  ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('overview')">   Overview   </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'likes'     ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('likes')">      Likes      </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'playlists' ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('playlists')">  Playlists  </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'albums'    ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('albums')">     Albums     </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'stations'  ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('stations')">   Stations   </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'following' ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('following')">  Following  </div>
    <div class="library-navbar__row-element on-hover-bbt" :style="[state === 'history'   ? 'border-bottom: 2px solid #0094d9; color: #0094d9' : '']" @click="changeState('history')">    History    </div>
  </div>
</template>

<script>
export default {
  name: "LibraryNavBar",
  props: {
    state: String,
  },
  methods: {
    changeState(state) {
      this.$emit("change-state", state);
    }
  }
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
  .library-navbar__row-element:hover {
    border-bottom: 2px solid #85F4FF;
    cursor: pointer; 
  }
  .on-hover-bbt {
    transition: border-bottom 0.1s;
  }
</style>