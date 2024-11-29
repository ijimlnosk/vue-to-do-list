<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium mb-1">
            {{ label }}
        </label>
        <input
            :id="id"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :calss="[
                'block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                inputClasses,
            ]"
            @input="handleInput"
        />
        <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'CommonInput',
    props: {
        id: { type: String, required: true },
        type: { type: String, default: 'text' },
        modelValue: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        label: { type: String, default: '' },
        disabled: { type: String, default: false },
        error: { type: String, default: '' },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const inputClasses = props.error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gary-300 focus:ring-blue-500'

        const handleInput = (event: Event) => {
            const target = event.target as HTMLInputElement
            if (target) {
                emit('update:modelValue', target.value)
            }
        }

        return { inputClasses, handleInput }
    },
})
</script>
