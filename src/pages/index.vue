<script setup>
import { VBtn } from 'vuetify/components/VBtn';
import { VIcon } from 'vuetify/components/VIcon';
import { computed, onMounted, ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import vResize from 'vuetify/directives/resize';
import UsersUpdateAdminDialog from '@/components/organisms/users-update-admin-dialog.vue';

const display = useDisplay();
console.log(display.name.value);

await new Promise((resolve) => {
  console.log(`loading index page... [server: ${process.server}]`);
  setTimeout(resolve, 1000);
});

const data = [
  {
    address: '湖 蒼空 結菜 Expressway 62',
    created_at: 1684129691,
    company_name: '加藤 Group Group',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'interface Designer Credit',
    doda_contract: 1,
    first_name: '莉子',
    first_name_furigana: 'メイフリガナ',
    id: 1,
    is_read_guideline: 1,
    is_read_policy: 1,
    last_name: '斎藤',
    last_name_furigana: 'セイフリガナ',
    mail: 'example44@example.net',
    office: '加藤, 田中 and 木村',
    prefecture: '福井県',
    phone_number: '0374-95-0818',
    signin_failed_count: 0,
    role: 'ClientAdmin',
    updated_at: 1684129691,
  },
  {
    address: 'Keller 愛菜 Trafficway 0',
    created_at: 1684129691,
    company_name: '田中 Group LLC',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'well-modulated',
    first_name: '結衣',
    first_name_furigana: 'メイフリガナ',
    id: 2,
    is_read_guideline: 1,
    is_read_policy: 0,
    last_name: '山口',
    last_name_furigana: 'セイフリガナ',
    mail: 'example10@example.net',
    office: '中村 - 吉田',
    prefecture: '鳥取県',
    phone_number: '02808-3-5314',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'Columbus 山本 Way 63',
    created_at: 1684129691,
    company_name: '伊藤 and Sons and Sons',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'Granite',
    first_name: '結菜',
    first_name_furigana: 'メイフリガナ',
    id: 3,
    is_read_guideline: 0,
    is_read_policy: 0,
    last_name: '斎藤',
    last_name_furigana: 'セイフリガナ',
    mail: 'example.mail@example.net',
    office: '伊藤, 松本 and 林',
    prefecture: '千葉県',
    phone_number: '049-422-4874',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '湖 杏 松本 Circles 50',
    created_at: 1684129691,
    company_name: '木村 and Sons Group',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'parsing 富山県 encryption',
    first_name: '愛菜',
    first_name_furigana: 'メイフリガナ',
    id: 4,
    is_read_guideline: 1,
    is_read_policy: 0,
    last_name: '伊藤',
    last_name_furigana: 'セイフリガナ',
    mail: 'example.mail41@example.net',
    office: '吉田, 田中 and 木村',
    prefecture: '岐阜県',
    phone_number: '00-1455-2120',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '北 大和 陸斗 Summit 90',
    created_at: 1684129691,
    company_name: '中村 - 加藤 LLC',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'explicit Dynamic',
    first_name: '愛菜',
    first_name_furigana: 'メイフリガナ',
    id: 5,
    is_read_guideline: 0,
    is_read_policy: 0,
    last_name: '佐藤',
    last_name_furigana: 'セイフリガナ',
    mail: 'example_mail64@example.net',
    office: '清水, 伊藤 and 中村',
    prefecture: '兵庫県',
    phone_number: '05-0560-6015',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '莉子市 中村 Gardens 97',
    created_at: 1684129691,
    company_name: '田中 - 田中 Inc',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'reintermediate De-engineered',
    first_name: '蓮',
    first_name_furigana: 'メイフリガナ',
    id: 6,
    is_read_guideline: 1,
    is_read_policy: 0,
    last_name: '山田',
    last_name_furigana: 'セイフリガナ',
    mail: 'example.mail15@example.com',
    office: '田中 Inc',
    prefecture: '熊本県',
    phone_number: '04-5493-9152',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '吉田村 陸斗 Glens 65',
    created_at: 1684129691,
    company_name: '渡辺 - 松本 LLC',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'override',
    first_name: '結衣',
    first_name_furigana: 'メイフリガナ',
    id: 7,
    is_read_guideline: 1,
    is_read_policy: 1,
    last_name: '清水',
    last_name_furigana: 'セイフリガナ',
    mail: 'example13@example.com',
    office: '鈴木, 小林 and 小林',
    prefecture: '熊本県',
    phone_number: '0127-06-3716',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'Fort Lauderdale 愛菜 Village 3',
    created_at: 1684129691,
    company_name: '加藤 Inc and Sons',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'Architect',
    first_name: '美羽',
    first_name_furigana: 'メイフリガナ',
    id: 8,
    is_read_guideline: 0,
    is_read_policy: 1,
    last_name: '田中',
    last_name_furigana: 'セイフリガナ',
    mail: 'example_mail99@example.net',
    office: '山口, 高橋 and 山田',
    prefecture: '静岡県',
    phone_number: '042-977-3561',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'West Covina 松本 Throughway 42',
    created_at: 1684129691,
    company_name: '伊藤 LLC and Sons',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'Licensed',
    first_name: '陽翔',
    first_name_furigana: 'メイフリガナ',
    id: 9,
    is_read_guideline: 0,
    is_read_policy: 0,
    last_name: '斎藤',
    last_name_furigana: 'セイフリガナ',
    mail: 'example45@example.net',
    office: '清水, 渡辺 and 伊藤',
    prefecture: '岡山県',
    phone_number: '05-9927-1616',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '湖 陸斗 莉子 Cape 47',
    created_at: 1684129691,
    company_name: '木村, 山口 and 佐々木 LLC',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'Optimization Handmade',
    first_name: '結菜',
    first_name_furigana: 'メイフリガナ',
    id: 10,
    is_read_guideline: 1,
    is_read_policy: 1,
    last_name: '佐々木',
    last_name_furigana: 'セイフリガナ',
    mail: 'example_mail37@example.com',
    office: '松本 and Sons',
    prefecture: '山口県',
    phone_number: '04-1381-7729',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '北 海翔 田中 Rue 47',
    created_at: 1684129691,
    company_name: '鈴木 - 加藤 Group',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'synthesize Bacon vertical',
    first_name: '大和',
    first_name_furigana: 'メイフリガナ',
    id: 11,
    is_read_guideline: 0,
    is_read_policy: 1,
    last_name: '山口',
    last_name_furigana: 'セイフリガナ',
    mail: 'example5@example.com',
    office: '中村 - 山田',
    prefecture: '茨城県',
    phone_number: '03783-0-9139',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: '木村村 翼 Underpass 59',
    created_at: 1684129691,
    company_name: '吉田, 渡辺 and 井上 Inc',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'multi-tasking Money Israeli',
    first_name: '樹',
    first_name_furigana: 'メイフリガナ',
    id: 12,
    is_read_guideline: 1,
    is_read_policy: 0,
    last_name: '山口',
    last_name_furigana: 'セイフリガナ',
    mail: 'example.mail22@example.com',
    office: '清水 - 井上',
    prefecture: '静岡県',
    phone_number: '08908-2-3296',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'Orem 斎藤 Ridges 41',
    created_at: 1684129691,
    company_name: '井上 LLC Inc',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'Drives Mouse',
    first_name: '杏',
    first_name_furigana: 'メイフリガナ',
    id: 13,
    is_read_guideline: 1,
    is_read_policy: 1,
    last_name: '鈴木',
    last_name_furigana: 'セイフリガナ',
    mail: 'example_mail@example.net',
    office: '小林, 佐藤 and 伊藤',
    prefecture: '北海道',
    phone_number: '08551-2-9660',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'Springfield 海翔 Extension 28',
    created_at: 1684129691,
    company_name: '清水 Inc Inc',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'International',
    first_name: '樹',
    first_name_furigana: 'メイフリガナ',
    id: 14,
    is_read_guideline: 0,
    is_read_policy: 0,
    last_name: '山口',
    last_name_furigana: 'セイフリガナ',
    mail: 'example9@example.com',
    office: '井上 Inc',
    prefecture: '富山県',
    phone_number: '01-2441-8675',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
  {
    address: 'Alpharetta 松本 Falls 96',
    created_at: 1684129691,
    company_name: '山口 and Sons Group',
    company_name_furigana: 'カイシャメイフリガナ',
    department: 'online payment',
    first_name: '翼',
    first_name_furigana: 'メイフリガナ',
    id: 15,
    is_read_guideline: 1,
    is_read_policy: 0,
    last_name: '中村',
    last_name_furigana: 'セイフリガナ',
    mail: 'example.mail@example.org',
    office: '吉田 - 山田',
    prefecture: '静岡県',
    phone_number: '0117-41-3692',
    signin_failed_count: 0,
    role: 'ClientUser',
    updated_at: 1684129691,
  },
];

const showsUpdateAdminDialog = ref(false);

onMounted(() => display.update());

const size = computed(() => {
  return display.name.value;
});

// const colorCode = computed(() => useTheme().themes.value.light.colors.info);

const hoge = () => {
  console.log('hoge');
};

definePageMeta({
  // layout: 'none',
});
</script>

<script>
export default {
  computed: {
    processStyleType() {
      return this.$vuetify.display.name;
    },
    colorCode() {
      return this.$vuetify.theme.themes.light.colors.info;
    },
  },
};
</script>

<template>
  <div v-resize="hoge">This is index page.</div>
  <p>This is p tag</p>
  <VBtn to="/other" color="info">
    <VIcon icon="mdi-magnify" start />
    Go to other
  </VBtn>
  <VBtn to="/sample">
    <VIcon icon="mdi-magnify" start />
    Go to sample
  </VBtn>
  {{ colorCode }}
  <v-btn
    width="136"
    height="48"
    class="font-weight-bold manage-admin-btn"
    color="light"
    variant="outlined"
    @click="showsUpdateAdminDialog = true"
  >
    管理者変更
  </v-btn>
  <users-update-admin-dialog
    v-model="showsUpdateAdminDialog"
    :user-list="data"
    @finish-admin-update-event="handleFinishAdminUpdate"
  />
</template>
