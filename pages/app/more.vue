<template>
  <TwaMainLt>
    <template #Body>
      <div class="appMoreBody">
        <div class="appMoreBodyMenu">
          <div class="appMoreBodyMenuWrapper">
            <div class="appMoreBodyMenuList">
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Редактирование профиля
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Конвертер
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Профиль
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Платежи
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Поддержка
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Часто задаваемые вопросы?
                  </div>
                </div>
              </div>
              <div class="appMoreBodyMenuListItem">
                <div class="menuListItemWrapper">
                  <div class="menuListItemTitle">
                    Обратная связь
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>
<script>

import TwaMainLt from "~/layout/twaMainLt.vue";

export default {
  name: "more",
  components: {TwaMainLt}
}
</script>
<style scoped>
.appMoreBodyMenuList {

}

.appMoreBodyMenuList .appMoreBodyMenuListItem {
  padding: 14px 20px;
//background: var(--accent-block-color); border: solid 1px var(--accent-block-color); border-radius: 16px; margin-bottom: 10px;
}
</style>
