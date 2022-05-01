<template>
  <div class="app-container">
    <div class="main-window-container">
      <div class="track-list">
        <div class="track-list__block" v-for="item in Tracks" :key="item.id">
          <div class="track-list__track-window">
            <img :src="item.thumbnail">
            <MusicWindow :author="item.author" :name="item.name" :id="item.id"/>
          </div>
        </div>
      </div>
      <hr class="bottom-line">
      <div class="bottom-text">
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Legal</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Privacy</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Cookie Policy</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Consent Manager</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Imprint</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Creator Resources</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Blog</a> - 
        <a class="bottom-ref" href="https://vk.com/hasagi_les_report">Charts</a> - 
      </div>
    </div>
  </div>
</template>

<script>

import MusicWindow from './MusicWindow.vue'
import uniqueId from '../../node_modules/lodash/uniqueId'

export default {
  name: 'MainWindow',
  components: {
    MusicWindow
  },
  data() {
    return {
      Tracks: [ {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Gadzooks",      name: "Crazy And Mic"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Detinue",       name: "Street And Mic"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Mantissa",      name: "Dear And Nightmare"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Ossuary",       name: "It Takes Two"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Discalceate",   name: "I Love That Cha-Ching Sound"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Clangor",       name: "I Heard She Did It Like That"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "HazelSphinx",   name: "She Hates You're A Player"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Isodose",       name: "I Love She Made Her Choice"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Spelunker",     name: "Triumph For Another Night"},
                {id: uniqueId(""), thumbnail: "https://picsum.photos/seed/" + uniqueId("picsum") + "/180", author: "Spelunker",     name: "Triumph For Another Night"},
      ]
    }
  }
}
</script>

<style scoped>

  .app-container {
    width: 1240px;
    height: 1024px;
    margin-left: 322px;
    position: inherit;
    background-color: #ffffff;
  }
  .main-window-container {
    position: absolute;
    width: 1200px;
    margin-top: 69px;
    margin-right: 30px;
    margin-left: 30px;
  }
  .track-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  .track-list__block {
    padding-right: 20px;
  }
  .track-list__track-window {
    width: 180px;
    height: 260px;
  }
  .bottom-line {
    border: solid 1px #f3f3f3;
    width: 1180px;
  }
  .bottom-text {
    font-size: 12px;
    color: #d5d5d5;
  }
  .bottom-ref {
    color: #d5d5d5;
    text-decoration: none;
  }
</style>
