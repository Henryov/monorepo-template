import { Router } from "vue-router";

export function setupRouterGuard(router: Router) {
    router.afterEach(to => {
        document.title = to.meta.title as string || 'Vue3 Admin'
    })
}