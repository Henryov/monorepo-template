import { RouteRecordRaw, RouterView } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/Login.vue'),
        meta: { hideInMenu: true }
    },
    {
        name: 'root',
        path: '/',
        component: () => import('@/layouts/BaseLayout.vue'),
        meta: { expandChildren: true },
        children: [
            {
                name: 'proxies',
                path: '/proxies',
                component: RouterView,
                redirect: { name: 'proxies-view' },
                meta: { expandChildren: true },
                children: [
                    {
                        name: 'proxies-view',
                        path: 'view',
                        component: () => import('@/views/ProxiesView.vue'),
                        meta: { title: '全部代理', icon: 'line-md:list-3' }
                    },
                    {
                        name: 'proxies-rules',
                        path: 'rules',
                        component: () => import('@/views/ProxiesRules.vue'),
                        meta: { title: '抓取规则', icon: 'line-md:document-code' }
                    }
                ],
            },
            {
                name: 'settings',
                path: 'settings',
                component: () => import('@/views/Settings.vue'),
                meta: {
                    title: '系统设置',
                    icon: 'line-md:cog-loop'
                }
            }
        ]
    }
]
