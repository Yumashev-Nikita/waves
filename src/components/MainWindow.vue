<template>
  <div class="main-container">
    <ul class="ul-ns">
      <li v-for="track in Tracks" :key="track.id">
        <img :src="track.thumbnail">
      </li>
    </ul>
  </div>
</template>

<script>
import uniqueId from '../../node_modules/lodash/uniqueId'

export default {
  name: 'MainWindow',
  data() {
    return {
      Tracks: [ {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180"},
      ]
    }
  }
}
</script>

<style scoped>
  .main-container {
    width: 1240px;
    height: 1024px;
    margin-left: 322px;
    margin-top: 46px;
    padding-top: 34px;
    background-color: #ffffff;
  }
  .ul-ns {
    list-style-type: none;
  }
</style>
