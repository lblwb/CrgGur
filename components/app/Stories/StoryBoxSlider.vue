<template>
  <div class="story-slider">
    <div class="story-section" @click="openStory(user)">
      <div class="section-header">
        <span>{{ user.username }}</span>
        <span>{{ user.storiesItems.length }}</span>
      </div>
      <div class="stories">
        <div v-for="(story, storyIndex) in user.storiesItems" :key="storyIndex" class="story"
             @click="openStory(user, storyIndex)">
          <!-- Ваш код для отображения истории, например, изображение или видео -->
          {{ story }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openStory(user, storyIndex = 0) {
      this.$emit('open-story', {user, storyIndex});
    },
  },
};
</script>

<style scoped>
.story-slider {
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid #ccc;
}

.story-section {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.story-section:hover {
  background-color: #f9f9f9;
}

.section-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 5px;
}

.stories {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}

.story {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.story img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
