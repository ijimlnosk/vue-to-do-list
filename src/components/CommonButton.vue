<template>
    <button
        :class="[
            'px-4 py-2 rounded-md font-semibold text-sm transition duration-300',
            buttonClasses,
            disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-80',
        ]"
        :disabled="disabled"
        @click="onClick"
    >
        {{ label }}
    </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'CommonButton',
    props: {
        label: { type: String, required: true },
        type: {
            type: String as PropType<'primary' | 'secondary' | 'danger'>,
            default: 'primary',
        },
        disabled: { type: Boolean, default: false },
    },
    emits: ['click'],
    setup(props, { emit }) {
        const buttonClasses = {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-200 text-gary-700',
            danger: 'bg-red-500 text-white',
        }

        const onClick = () => {
            if (!props.disabled) emit('click')
        }
        return { buttonClasses: buttonClasses[props.type], onClick }
    },
})
</script>
