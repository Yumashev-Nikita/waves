<template>
  <div class="track-window__container">
      <div class="track-window__track-name">
        <img class="heart-inline" src="../../assets/heart.svg">
        {{ name }}
      </div>
      <div class="track-window__track-author">
        {{ author }}
      </div>
      
  </div>
</template>

<script>

export default {
  name: 'MusicWindow',
  props: {
      id: String,
      author: String,
      name: String
  }
}
</script>

<style scoped>
  .heart-inline {
    width: 11px;
    margin-right: 3px;
  }
  .track-window__container {
    display: flex;
    flex-direction: column;
  }
  .track-window__track-name {
    margin-top: 5px;
    height: 20px;
    width: 180px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
  }
  .track-window__track-author {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #999999;
    cursor: pointer;
  }
</style>
