<template>
  <div class="flex flex-col items-center space-y-5">
    <div>
      <el-button class="text-gray-500" @click="locale = 'en_US'"> English </el-button>
      <el-button class="text-gray-500" @click="locale = 'zh_TW'"> 中文 </el-button>
    </div>
    <div class="text-[100px] font-bold text-gray-900">
      {{ $t('hello') }}
    </div>
    <div v-for="item in repoList" :key="item.id">{{ item.description }}</div>
  </div>
</template>
<script lang="ts">
import { ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { getUserRepo } from '@/api/test'

export default defineComponent({
  name: 'App',
  components: {
    ElButton
  },
  setup: () => {
    /**
     * data
     */
    const repoList = ref<any>([])
    const pageNumber = ref<number>(6)
    const { locale } = useI18n()
    /**
     * mehtods
     */
    const infiniteHandler = async (): Promise<void> => {
      const params = {
        user: 'kurotanshi',
        pageNumber: pageNumber.value
      }
      const res: any = await getUserRepo(params)

      if (res.length) {
        repoList.value = []
        pageNumber.value += 6
        repoList.value.push(...res)
      }
    }
    onBeforeMount(() => {
      infiniteHandler()
    })
    return {
      infiniteHandler,
      repoList,
      locale
    }
  }
})
</script>
