<script lang='ts' setup>
import { FormItemRule } from 'naive-ui'
import { useNaiveForm } from '@/hooks'
interface FormModel {
    username: string;
    password: string;
}

const { formRef, validate } = useNaiveForm()

const rules = computed<Record<keyof FormModel, FormItemRule>>(() => ({
    username: {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
    },
    password: {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
    }
}))

const model = reactive({
    username: '',
    password: ''
})

async function onSubmit() {
    await validate()
    console.log(model)

}
</script>

<template>
    <div class="h-full flex justify-center items-center bg-gray-50">
        <div class=" max-w-[420px] w-5/6 shadow-md rounded-md bg-white px-10 py-8">
            <NH2>登录</NH2>
            <NForm ref="formRef" :model="model" size="large" :show-label="false" :rules="rules">
                <NFormItem path="username">
                    <NInput placeholder="请输入用户名" v-model:value="model.username" />
                </NFormItem>
                <NFormItem path="password">
                    <NInput placeholder="请输入密码" v-model:value="model.password" type="password"
                        show-password-on="mousedown" />
                </NFormItem>
                <NFormItem>
                    <NButton round block type="primary" @click="onSubmit">登录</NButton>
                </NFormItem>
            </NForm>
        </div>
    </div>
</template>

<style></style>
