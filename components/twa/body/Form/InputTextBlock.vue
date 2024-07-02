<template>
  <div class="MainBodyRequestNewFormDataInput">
    <div class="MainBodyRequestNewFormDataInputBlock">
      <div class="MainBodyRequestNewFormDataInputLabel" style="margin-bottom: 12px" v-if="labelText !== null">
        {{ labelText }}
      </div>
      <div class="formDataInputContext">
        <input type="url" :placeholder="inputPlaceholder" :value="inputValue" @input="onChange($event)" ref="textArea">
        <div class="formDataInputContextPasteBtn" v-if="inputPasteBtn" @dblclick="onPaste">
          <div class="formDataInputContextPasteBtnWrapper">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 5.93799H7C6.46957 5.93799 5.96086 6.1487 5.58579 6.52377C5.21071 6.89885 5 7.40756 5 7.93799V19.938C5 20.4684 5.21071 20.9771 5.58579 21.3522C5.96086 21.7273 6.46957 21.938 7 21.938H10M9 5.93799C9 5.40756 9.21071 4.89885 9.58579 4.52377C9.96086 4.1487 10.4696 3.93799 11 3.93799H13C13.5304 3.93799 14.0391 4.1487 14.4142 4.52377C14.7893 4.89885 15 5.40756 15 5.93799M9 5.93799C9 6.46842 9.21071 6.97713 9.58579 7.3522C9.96086 7.72727 10.4696 7.93799 11 7.93799H13C13.5304 7.93799 14.0391 7.72727 14.4142 7.3522C14.7893 6.97713 15 6.46842 15 5.93799M19 12.938V7.93799C19 7.40756 18.7893 6.89885 18.4142 6.52377C18.0391 6.1487 17.5304 5.93799 17 5.93799H15M13 17.938V16.938C13 16.6728 13.1054 16.4184 13.2929 16.2309C13.4804 16.0433 13.7348 15.938 14 15.938H15M18 15.938H19C19.2652 15.938 19.5196 16.0433 19.7071 16.2309C19.8946 16.4184 20 16.6728 20 16.938V17.938M20 20.938V21.938C20 22.2032 19.8946 22.4576 19.7071 22.6451C19.5196 22.8326 19.2652 22.938 19 22.938H18M15 22.938H14C13.7348 22.938 13.4804 22.8326 13.2929 22.6451C13.1054 22.4576 13 22.2032 13 21.938V20.938"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "InputTextBlock",
  props: {
    labelText: {
      default: ""
    },
    inputPlaceholder: {
      default: ""
    },
    inputValue: {
      default: ""
    },
    inputPasteBtn: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onChange: function (event) {
      this.$emit('update:inputValue', event.target.value);
    },
    onPaste(evt) {
      navigator.clipboard.readText().then(text => {
        this.$refs.textArea.value = text;
      });
      console.log('on paste', evt.clipboardData.getData('text'))
    }
  },
  mounted() {
  }
}
</script>


<style>
/*.MainBodyRequestNewFormDataInput + .MainBodyRequestNewFormDataInput*/
/*.MainBodyRequestNewFormDataInput + .MainBodyRequestNewFormDataInput {*/
/*  margin-top: 18px
};*/
</style>
<style>
.MainBodyRequestNewFormDataInput {
  margin-bottom: 18px;
}

.MainBodyRequestNewFormDataInputBlock {
  position: relative;
}

.MainBodyRequestNewFormDataInputBlock .formDataInputContext {
  position: relative;
}

.MainBodyRequestNewFormDataInputBlock .formDataInputContext input {
  padding: 18px 24px;
  background: var(--accent-block-color);
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
}

.formDataInputContext .formDataInputContextPasteBtn {
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
.formDataInputContext .formDataInputContextPasteBtn svg{
  color: var(--accent-comp-high-color);
}
</style>
