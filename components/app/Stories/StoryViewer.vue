<template>
  <div class="story-viewer">
    <div class="viewer-header">
      <span>{{ currentUser.username }}</span>
      <!-- Дополнительная информация о пользователе -->
      <button @click="closeStory">Закрыть историю</button>
    </div>
    <!-- Отображение выбранной истории -->
    <div class="selected-story">
      <!-- Ваш код для отображения выбранной истории -->
      {{ currentUser.storiesItems[storyIndex] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
    storyIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      autoSwitchInterval: null,
    };
  },
  mounted() {
    // Установите интервал для автопереключения сторис каждые 7 секунд
    this.autoSwitchInterval = setInterval(this.switchToNextStory, 7000);
  },
  beforeDestroy() {
    // Очистите интервал перед уничтожением компонента
    clearInterval(this.autoSwitchInterval);
  },
  methods: {
    switchToNextStory() {
      // Логика для переключения на следующую историю
      // Если текущая история - последняя, то переключиться на первую
      const nextIndex = (this.storyIndex + 1) % this.currentUser.storiesItems.length;
      this.$emit('switch-to-next-story', nextIndex);
    },
    closeStory() {
      // Закрывает открытую историю и очищает интервал
      clearInterval(this.autoSwitchInterval);
      this.$emit('close-story');
    },
  },
};
</script>

<style scoped>
.story-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.viewer-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
}

.viewer-header span {
  font-size: 16px;
}

.selected-story {
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

.selected-story img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>

