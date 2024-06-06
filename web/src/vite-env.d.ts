/// <reference types="vite/client" />
/// <reference path="../../data/api.d.ts" />

import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        hideInMenu?: boolean
        title?: string
        icon?: string
        expandChildren?: boolean
    }
}