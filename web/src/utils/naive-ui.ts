import { MenuOption } from 'naive-ui'
import { RouteRecordRaw, RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue'
export function renderIcon(icon: string) {
    return () => h(Icon, { icon })
}


export function transformRouteToMenuOption(routes: RouteRecordRaw[]): MenuOption[] {
    return routes.reduce((acc: MenuOption[], route) => {
        const { hideInMenu, expandChildren } = route.meta || {}

        if (hideInMenu && !route.children) {
            return acc
        }

        if (expandChildren && route.children) {
            const children = transformRouteToMenuOption(route.children)
            acc.push(...children)
            return acc
        }

        const menuOption: MenuOption = {
            key: route.name as string,
            label: () => h(RouterLink, { to: { name: route.name } }, { default: () => route.meta?.title }),
            icon: route.meta?.icon ? renderIcon(route.meta.icon) : undefined,
        }

        if (route.children) {
            menuOption.children = transformRouteToMenuOption(route.children)
        }

        acc.push(menuOption)
        return acc
    }, [])

}