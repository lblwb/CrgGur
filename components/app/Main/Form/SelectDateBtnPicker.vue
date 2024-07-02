<template>
  <div class="date-select">
    <button @click="toggleCalendar" class="select-button">
            <span class="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
    stroke="#FF5E00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17L11 13L7 12L16 8L12 17Z" stroke="#FF5E00" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round"/>
</svg>

      </span>
      <span>{{ selectedDate ? selectedDate.toLocaleDateString() : 'Дата' }}</span>
      <i :class="['arrow', isOpen ? 'up' : 'down']"></i>
    </button>
    <div class="date_input" v-if="isOpen" @mouseleave="hiddenCalendar">
      <input
          type="date"
          @input="selectDate"
          :value="selectedDate"
          class="date-input"

      />
      <button class="select-button" style="min-width: unset;font-size: 12px">Применить</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedDate: null
    };
  },
  methods: {
    toggleCalendar() {
      this.isOpen = !this.isOpen;
    },
    hiddenCalendar() {
      setTimeout(() => {
        this.isOpen = false;
      }, 2500)

    },
    selectDate(event) {
      this.selectedDate = new Date(event.target.value);
      this.isOpen = false;
    }
  },
  mounted() {
    const currentDate = new Date(Date.now());
    this.selectedDate = currentDate;
  }

};
</script>

<style scoped>
.date-select {
  position: relative;
}

.select-button {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  /*background-color: #fff;*/
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  min-width: 10vw;
}

.select-button .icon {
  margin-right: 10px;
  display: flex;
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

.date_input {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 5px;
  z-index: 1;
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.date_input input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}

.date_input button {
  width: 100%;
  text-align: center;
}
</style>
