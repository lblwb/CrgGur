<template>
  <div class="AddNewRequestBlock" @click="showOrderNewRequest">
    <div class="AddNewRequestBlockWrapper">
      <div class="RequestBlockHeading">
        <div class="RequestBlockHeadingWrapper">
          <div class="RequestBlockHeadingTitle">
            Чат с поддержкой
          </div>
          <div class="RequestBlockHeadingIcon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.79988 7.43785C9.79988 7.84619 9.64238 8.25452 9.33321 8.56369L5.52988 12.367C5.36071 12.5362 5.08071 12.5362 4.91154 12.367C4.74238 12.1979 4.74238 11.9179 4.91154 11.7487L8.71488 7.94535C8.99488 7.66535 8.99488 7.21035 8.71488 6.93035L4.91154 3.12702C4.74238 2.95785 4.74238 2.67785 4.91154 2.50869C5.08071 2.33952 5.36071 2.33952 5.52988 2.50869L9.33321 6.31202C9.64238 6.62119 9.79988 7.02952 9.79988 7.43785Z"
                fill="#717171" stroke="#717171" stroke-width="0.5"/>
            </svg>
          </div>
        </div>
        <div class="RequestBlockHeadingDesc" style="font-size: 12px; color: var(--text-second-color)">
          Обсудим все детали и найдем оптимальное решение!
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SupportTicketBtn",
  methods: {
    showOrderNewRequest() {
      // this.$router.push({
      //   name: "app-more"
      // })
      window.open("https://t.me/spcrgwt_bot")
    }
  }
}

</script>

<style scoped>
.AddNewRequestBlock {
  border-radius: 10px;
  border: 1px solid var(--bg-second-color);
  padding: 14px 16px;
}

.AddNewRequestBlock:focus,
.AddNewRequestBlock:hover {
  opacity: 0.7;
  border: 1px solid var(--accent-block-color);
  background: var(--bg-second-color);
  color: var(--text-accent-color);
}

.RequestBlockHeadingWrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.AddNewRequestBlock .RequestBlockHeading .RequestBlockHeadingTitle {
  color: var(--text-accent-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.54px;
}

</style>
