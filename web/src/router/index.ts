import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { setupRouterGuard } from './guard'
export * from './routes'

const router = createRouter({
    routes,
    history: createWebHistory()
})


export async function setupRouter(app: App) {
    app.use(router)
    setupRouterGuard(router)
    await router.isReady()
}

