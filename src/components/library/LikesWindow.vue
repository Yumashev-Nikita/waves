<template>
  <div v-if="!overviewed" class="likes-window__barrier">
    <div class="likes-window__barrier_text">Hear the tracks you've liked:</div>
  </div>
  <div class="likes-window__track-list">
    <div class="likes-window__track-list_block" v-for="track in Likes" :key="track.id">
      <div class="likes-window__track-list_track-window">
        <img :src="track.thumbnail">
        <MusicWindow :author="track.author" :name="track.name" :id="track.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import MusicWindow from '../general/MusicWindow.vue'

export default {
  name: "LikesWindow",
  props: {
    overviewed: {type: Boolean, default: true} 
  },
  components: {
    MusicWindow,
  },
  data() {
    return {
      Likes: [ 
        {id: 1,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Gadzooks",      name: "Crazy And Mic"},
        {id: 2,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Detinue",       name: "Street And Mic"},
        {id: 3,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Mantissa",      name: "Dear And Nightmare"},
        {id: 4,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Ossuary",       name: "It Takes Two"},
        {id: 5,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Discalceate",   name: "I Love That Cha-Ching Sound"},
        {id: 6,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Clangor",       name: "I Heard She Did It Like That"},
        {id: 7,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "HazelSphinx",   name: "She Hates You're A Player"},
        {id: 8,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Isodose",       name: "I Love She Made Her Choice"},
        {id: 9,  thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Spelunker",     name: "Triumph For Another Night"},
        {id: 10, thumbnail: "https://picsum.photos/seed/" + Math.random() + "/180", author: "Spelunker",     name: "Triumph For Another Night"},
      ],
    }
  }
}
</script>

<style scoped>
  .likes-window__track-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  .likes-window__barrier {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 55px;
    margin-bottom: 20px;
    
  }
  .likes-window__track-list_barrier_text {
    font-size: 17px;
    font-weight: 100;
    color: #9b9b9b;
  }
  .likes-window__track-list_block {
    padding-right: 20px;
  }
  .likes-window__track-list_track-window {
    width: 180px;
    height: 260px;
  }
</style>