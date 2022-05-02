<template>
    <div class="library-window-container">
        <LibraryNavBar @change-state="changeState"/>
        <div class="track-list">
            <div class="track-list__block" v-for="item in Tracks" :key="item.id">
                <div class="track-list__track-window">
                    <img :src="item.thumbnail">
                    <MusicWindow :author="item.author" :name="item.name" :id="item.id"/>
                </div>
            </div>
        </div>
        <BottomRef/>
    </div>
</template>



<script>
import LibraryNavBar from './LibraryNavBar.vue'
import MusicWindow from '../general/MusicWindow.vue'
import BottomRef from '../general/BottomRef.vue'
import uniqueId from '../../../node_modules/lodash/uniqueId'

export default {
    name: 'LibraryWindow',
    components: {
        LibraryNavBar,
        MusicWindow,
        BottomRef
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
      ],
      state: 'overview',
    }
  },
  methods: {
    changeState(name) {
      this.state = name;
    }
  }
}
</script>

<style scoped>
    .library-window-container {
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
</style>