/// <reference types="vite/client" />

import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        hideInMenu?: boolean
        title?: string
        icon?: string
        expandChildren?: boolean
    }
}