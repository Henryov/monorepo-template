<script lang="ts" setup>
import { MenuOption, NMenu } from 'naive-ui'
import { routes } from '@/router'
import { transformRouteToMenuOption } from '@/utils'
import { Icon } from '@iconify/vue'
const collapsed = ref(false)


const menuOptions = ref<MenuOption[]>([])
onMounted(() => {
    menuOptions.value = transformRouteToMenuOption(routes)
})
</script>

<template>
    <NLayout class="h-full" has-sider>
        <NLayoutSider collapse-mode="width" :collapsed="collapsed" :collapsed-width="64" :width="240"
            :native-scrollbar="false" bordered>
            <NLayoutHeader class="h-[64px] flex justify-center items-center" bordered>
                Logo
            </NLayoutHeader>
            <NMenu :collapsed="collapsed" :collapsed-width="64" :options="menuOptions"
                :default-value="($route.name as string)">
            </NMenu>
        </NLayoutSider>
        <NLayout>
            <NLayoutHeader class="flex justify-between items-center h-[64px] px-[12px]" bordered>
                <NSpace>
                    <NButton quaternary @click="collapsed = !collapsed">
                        <NIcon size="24">
                            <Icon v-if="collapsed" icon="line-md:menu-fold-right" />
                            <Icon v-else icon="line-md:menu-fold-left" />
                        </NIcon>
                    </NButton>
                </NSpace>
                <div></div>
                <NSpace></NSpace>
            </NLayoutHeader>
            <NLayoutContent position="absolute" class="!top-[64px] !bottom-[50px]" content-class="p-[24px]"
                :native-scrollbar="false">
                <RouterView />
            </NLayoutContent>
            <NLayoutFooter position="absolute" class="h-[50px]" bordered> 城府路 </NLayoutFooter>
        </NLayout>
    </NLayout>
</template>

<style></style>
