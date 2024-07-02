<template>
  <div class="select-trigger">
    <button @click="toggleSelect" class="select-button" :class="{'__Placeholder': selectedOption !== null}">
      <span class="icon">
        <slot name="Icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17L11 13L7 12L16 8L12 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </slot>
      </span>
      <span>{{ selectedOption !== null ? selectedOption.name : selectDefTitle }}</span>
      <i :class="['arrow', isOpen ? 'up' : 'down']"></i>
    </button>
    <ul v-if="isOpen" class="options" @mouseleave="hiddenSelect">
      <li v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue';

const props = defineProps({
  selectDefTitle: {
    default: "Выберите город",
    type: String
  },
  selectedCity: {
    default: null,
    type: Object
  },
  cities: {
    default: () => [],
    type: Array
  }
});

const emit = defineEmits(['citySelected']);

const isOpen = ref(false);
const options = ref(props.cities);
let selectedOption = ref(props.selectedCity);

// Вычисляемое свойство для фильтрации опций
const filteredOptions = computed(() => {
  return options.value.filter(option => option.id !== (selectedOption.value ? selectedOption.value.id : null));
});

// Следим за изменениями в props.cities и сбрасываем выбранный город при необходимости
watch(() => props.cities, (newVal, oldVal) => {
  options.value = newVal;
  if (selectedOption.value && !newVal.some(city => city.id === selectedOption.value.id)) {
    selectedOption.value = null;
    emit('citySelected', null); // Отправляем null для сброса выбранного города в родительский компонент
  }
});

// Методы компонента
const toggleSelect = () => {
  isOpen.value = !isOpen.value;
};

const hiddenSelect = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 150)
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit('update:citySelected', option); // Отправляем выбранный город в родительский компонент
}
</script>

<style scoped>
.select-trigger {
  position: relative;
  width: 100%;
  flex: auto;
}

.select-button {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid var(--brd-second-color);
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  min-width: 10vw;
  width: 100%;
  color: #333;
  min-height: 44px;
}

.select-button .icon {
  margin-right: 10px;
  display: flex;
  color: var(--accent-second-color);
}

.arrow {
  margin-left: auto;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.arrow.up {
  border-bottom: 5px solid black;
}

.arrow.down {
  border-top: 5px solid black;
}

.options {
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  position: fixed;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  /*z-index: 1;*/
  overflow: hidden;
  z-index: 10;
  max-width: 56vw;
}

.options li {
  padding: 10px 15px;
  cursor: pointer;
}

.options li:hover {
  background-color: #f5f5f5;
}
</style>
