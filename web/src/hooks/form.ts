import { FormInst } from "naive-ui";
export function useNaiveForm() {
    const formRef = ref<FormInst | null>(null);

    async function validate() {
        await formRef.value?.validate();
    }

    async function restoreValidation() {
        formRef.value?.restoreValidation();
    }

    return {
        formRef,
        validate,
        restoreValidation
    };
}
