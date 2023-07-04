<template>
  <v-dialog
    v-model="isVisible"
    width="480"
    :attach="attach"
    :persistent="isPersistent"
  >
    <dialog-card>
      <v-window v-model="step" touchless class="dialog-content">
        <v-window-item :value="STEP_ENUM.FORM">
          <sub-title class="dialog-title"> 管理者を変更 </sub-title>
          <p class="message text--text">新しい管理者を選択してください。</p>
          <p class="mt-8 message caution">
            変更すると、あなたはメンバーユーザーとなり、以降ユーザー管理画面の閲覧・操作ができなくなります。
          </p>
          <label-title class="mt-8 mb-1"> 現在の管理者 </label-title>
          <v-text-field
            :model-value="currentAdminUser.text"
            class="admin-name-text-field"
            density="compact"
            variant="filled"
            hide-details
            disabled
          />
          <select-section
            v-model="newAdminUser"
            class="mt-3 new-admin-select"
            label="新しい管理者"
            placeholder="選択してください"
            no-data-text="あなた以外のメンバーがまだ登録されていないため変更できません"
            :is-loading="isLoading"
            :items="memberUsers"
            is-return-object
          />
          <div class="mt-8 dialog-content-footer">
            <v-btn
              width="100%"
              height="48"
              class="font-weight-bold"
              color="light"
              variant="outlined"
              @click="isVisible = false"
            >
              変更しない
            </v-btn>
            <base-button
              width="100%"
              height="48"
              :is-form-invalid="isFormValid"
              @click="step = STEP_ENUM.PREVIEW"
            >
              変更内容の確認
            </base-button>
          </div>
        </v-window-item>

        <v-window-item :value="STEP_ENUM.PREVIEW">
          <sub-title class="dialog-title"> 変更内容の確認 </sub-title>
          <p class="message text--text">以下の内容で管理者権限を変更します。</p>
          <p class="mt-8 message caution">
            変更すると、あなたはメンバーユーザーとなり、以降ユーザー管理画面の閲覧・操作ができなくなります。
          </p>
          <label-title class="mt-8 mb-1"> 現在の管理者 </label-title>
          <v-text-field
            :model-value="currentAdminUser.text"
            class="admin-name-text-field"
            density="compact"
            variant="filled"
            hide-details
            disabled
          />
          <label-title class="mt-3 mb-1"> 新しい管理者 </label-title>
          <v-text-field
            v-if="newAdminUser"
            :model-value="newAdminUser.text"
            class="admin-name-text-field new-admin-select"
            density="compact"
            variant="filled"
            hide-details
            disabled
          />
          <div class="mt-8 dialog-content-footer">
            <v-btn
              width="100%"
              height="48"
              class="font-weight-bold"
              color="light"
              variant="outlined"
              :disabled="isLoading"
              @click="step = STEP_ENUM.FORM"
            >
              修正
            </v-btn>
            <base-button
              width="100%"
              height="48"
              :is-form-invalid="true"
              :is-loading="isLoading"
              @click="handleFormSubmit"
            >
              この内容で権限変更する
            </base-button>
          </div>
        </v-window-item>

        <v-window-item :value="STEP_ENUM.DONE">
          <sub-title class="dialog-title"> 管理者権限変更完了 </sub-title>
          <p class="message text--text">
            管理者権限を指定のユーザーに変更しました。
          </p>
          <div class="mt-8 dialog-content-footer">
            <div class="hidden" />
            <base-button
              width="100%"
              height="48"
              :is-form-invalid="true"
              @click="isVisible = false"
            >
              アカウント設定に戻る
            </base-button>
          </div>
        </v-window-item>
      </v-window>

      <div class="dialog-close-button-wrapper">
        <v-btn
          height="24px"
          width="24px"
          icon
          class="bg-white"
          :disabled="isLoading"
          @click="isVisible = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </dialog-card>
  </v-dialog>
</template>

<script>
import BaseButton from '@/components/atoms/base-button';
import DialogCard from '@/components/molecules/dialog-card';
import LabelTitle from '@/components/atoms/label-title';
import SelectSection from '@/components/molecules/select-section';
import SubTitle from '@/components/atoms/sub-title';
import { VDialog } from 'vuetify/components/VDialog';
import { VBtn } from 'vuetify/components/VBtn';
import { VIcon } from 'vuetify/components/VIcon';
import { VTextField } from 'vuetify/components/VTextField';
import { VWindow, VWindowItem } from 'vuetify/components/VWindow';

const STEP_ENUM = {
  FORM: 'FORM',
  PREVIEW: 'PREVIEW',
  DONE: 'DONE',
};

export default {
  name: 'UsersUpdateAdminDialog',
  components: {
    BaseButton,
    DialogCard,
    LabelTitle,
    SelectSection,
    SubTitle,
    VDialog,
    VBtn,
    VIcon,
    VWindow,
    VWindowItem,
    VTextField,
  },
  model: {
    prop: 'modelValue',
    event: 'update:model-value',
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    attach: {
      type: [String, Boolean],
      default: false,
    },
    userList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      step: null,
      newAdminUser: null,
      isLoading: false,
    };
  },

  computed: {
    isVisible: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:model-value', newValue);

        if (!newValue && this.step === STEP_ENUM.DONE) {
          // 完了して閉じるときはページコンポーネントに通知
          this.$emit('finish-admin-update-event');
        }
      },
    },
    STEP_ENUM() {
      return STEP_ENUM;
    },
    convertedUserList() {
      return this.userList.map((user) => ({
        ...user,
        text: `${user.last_name} ${user.first_name}`, // select-section で表示するため必要
        isAdmin: this.isUserAdmin(this.getCurrentRole(user.role)),
      }));
    },
    memberUsers() {
      return this.convertedUserList.filter((user) => !user.isAdmin);
    },
    currentAdminUser() {
      return this.convertedUserList.find((user) => user.isAdmin);
    },
    isFormValid() {
      return this.newAdminUser != null;
    },
    isPersistent() {
      return this.isLoading || this.step === STEP_ENUM.PREVIEW;
    },
  },
  watch: {
    isVisible(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.handleOpenDialog();
      }
    },
  },
  methods: {
    isUserAdmin(role) {
      return role === 'admin';
    },
    getCurrentRole(role) {
      let result = '';

      if (role === 'ClientAdmin') {
        result = 'admin';
      } else if (role === 'ClientUser') {
        result = 'member';
      }
      return result;
    },
    handleOpenDialog() {
      this.step = STEP_ENUM.FORM;
      this.newAdminUser = null;
    },
    async handleFormSubmit() {
      this.isLoading = true;

      try {
        await this.$api.users.edit(this.newAdminUser.id, {
          role: 'ClientAdmin',
        });
        this.step = STEP_ENUM.DONE;
      } catch (e) {
        this.$notifier.show({
          content: '問題が発生しました。時間をおいて再度実行してください。',
          color: 'error',
          icon: 'error',
        });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.v-dialog__content ::v-deep .v-card {
  width: 100%;
  border: none;
  border-radius: 0;
}
.v-dialog__content ::v-deep .v-card .v-card__text {
  position: relative;
  padding: 0 !important;
}
.dialog-close-button-wrapper {
  position: absolute;
  top: 0;
  right: 0;
}
.dialog-title {
  margin-bottom: 29px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: var(--v-text-base);
}
.dialog-content .v-window-item,
.dialog-close-button-wrapper {
  padding: 24px;
}
p.message {
  font-size: 14px;
  line-height: 21px;
}
p.message.caution {
  color: var(--v-error-base);
}
.admin-name-text-field ::v-deep fieldset {
  border-color: var(--v-border-base) !important;
}
.admin-name-text-field ::v-deep .v-input__slot {
  padding: 0 16px !important;
}
.admin-name-text-field ::v-deep input {
  color: var(--v-darkGray-base);
}
.new-admin-select {
  margin-bottom: 144px;
}
.new-admin-select ::v-deep .v-menu__content {
  max-height: 128px !important;
}
.new-admin-select ::v-deep .v-list-item {
  min-height: 36px;
}
.new-admin-select ::v-deep .v-list-item__content {
  padding: 8px 0;
}
.admin-name-text-field ::v-deep .v-input__slot,
.new-admin-select ::v-deep .v-select__selections,
.new-admin-select ::v-deep .v-list-item__title {
  font-size: 12px !important;
}
.dialog-content-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: end;
  grid-gap: 8px;
}
</style>
