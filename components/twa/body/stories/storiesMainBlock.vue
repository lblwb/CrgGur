<template>
  <div class="StoriesMain">
    <div class="StoriesMainWrapper">
      <div class="StoriesMainScrollList">
        <div class="StoriesMainItem" v-for="UserStoriesItem in storiesByUsers" @click="selectStory(UserStoriesItem)">
          <div class="StoriesMainItemBlock">
            <img :src="UserStoriesItem.img_src">
          </div>
        </div>
      </div>
      <div class="StoriesMainOverlayStories">
        <AppStorySlider username="test" :showSlider="showStorySlide" :stories="userStories" v-if="showStorySlide"
                        @closeBtn="showStorySlide=false"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppStorySlider from '~/components/app/StorySlider.vue'

/**
 * Истории на главной
 */

export default {
  name: "storiesMainBlock",
  data() {
    return {
      storiesByUsers: [
        {
          img_src: "https://picsum.photos/200/300/?blur=1&random=1",
          username: "test1",
          user_stories: [
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
          ]
        },
        {
          img_src: "https://picsum.photos/200/300/?blur=1&random=2",
          username: "test1",
          user_stories: [
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
            {
              src: "https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",
              type: 'image'
            },
          ]
        },
        // {
        //   img_src: "https://picsum.photos/200/300/?blur=2&random=6",
        //   username: "test2",
        //   user_stories: [
        //     {src: "https://picsum.photos/200/600/?blur=1&random=1", type: 'image'},
        //     {src: "https://picsum.photos/200/600/?blur=1&random=2", type: 'image'},
        //     {src: "https://picsum.photos/200/600/?blur=1&random=3", type: 'image'},
        //   ]
        // },
        // {
        //
        //   img_src: "https://picsum.photos/200/300/?blur=2&random=8",
        //   username: "test3",
        //   user_stories: [
        //     {src: "https://picsum.photos/200/300/?blur=2&random=1", type: 'image'},
        //     {src: "https://picsum.photos/200/300/?blur=2&random=2", type: 'image'},
        //     {src: "https://picsum.photos/200/300/?blur=2&random=3", type: 'image'},
        //   ]
        // },
      ],
      userStories: [],
      showStorySlide: false
    }
  },
  props: {},
  methods: {
    selectStory(story) {
      this.userStories = [];
      this.showStorySlide = true;
      this.userStories = story.user_stories;
    }
  },
  components: {
    AppStorySlider
  }
}
</script>

<style scoped>
.StoriesMain {
  width: 100%;
  overflow: hidden;
}

.StoriesMainWrapper {
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.StoriesMainScrollList {
  display: flex;
  padding-bottom: 10px;
}

.StoriesMainItem {
  margin-right: 8px;
  border-radius: 18px;
  overflow: hidden;
}

.StoriesMainItem:focus,
.StoriesMainItem:hover {
  /*filter: brightness(0.7);*/
  filter: opacity(0.7);
  cursor: pointer;
}


.StoriesMainItem .StoriesMainItemBlock {
  position: relative;
  width: 10.8vh;
  height: 10.8vh;
  padding: 2px 2px;
  overflow: hidden;
}

.StoriesMainItem:first-child .StoriesMainItemBlock:before {
  position: absolute;
  content: "";

  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--stories-bd-radius);
  background: var(--stories-bd-bg-grd);
}


.StoriesMainItem .StoriesMainItemBlock:before {
  position: absolute;
  content: "";
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--stories-bd-radius);
}

.StoriesMainItemBlock img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: var(--stories-bd-radius);
}


</style>
