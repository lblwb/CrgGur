<template>
  <div class="MainBodyRequestNewFormDataInput">
    <div class="MainBodyRequestNewFormDataInputBlock">
      <div class="MainBodyRequestNewFormDataInputLabel" style="margin-bottom: 12px" v-if="labelText !== null">
        {{ labelText }}
      </div>
      <!--        <select name=""-->
      <!--               >-->
      <!--          <option disabled selected>{{ inputPlaceholder }}</option>-->
      <!--          &lt;!&ndash; Options  &ndash;&gt;-->

      <!--        </select>-->

      <!--        {{inputSelectItems}}-->
      <div class="MainBodyRequestNewFormDataInputContext">
        <select :value="inputValue" @input="onChange($event)" style="">
          <option disabled selected value="">{{ inputPlaceholder }}</option>
          <option :value="inputOptionFieldName !== null ? option[inputOptionFieldName] : Object.entries(option)"
                  v-for="option in inputSelectItems">{{
              option[inputOptionLabelFieldName]
            }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "InputSelectBlock",
  props: {
    inputOptionFieldName: {
      type: String,
      default: null
    },
    inputOptionLabelFieldName: {
      type: String,
      default: "name"
    },
    inputSelectItems: {
      type: Array,
      default: []
    },
    labelText: {
      default: ""
    },
    inputPlaceholder: {
      default: ""
    },
    inputValue: {
      default: null
    },
  },
  methods: {
    onChange: function (event) {
      this.$emit('update:inputValue', event.target.value);
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


.MainBodyRequestNewFormDataInputContext select {
  padding: 18px 24px;
  background: var(--accent-block-color) !important;
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  color: currentColor;
}

.MainBodyRequestNewFormDataInputContext select > option:disabled,
.MainBodyRequestNewFormDataInputContext select > option:empty,
.MainBodyRequestNewFormDataInputContext select > option::selection {
  color: var(--text-second-color) !important;
}
</style>
