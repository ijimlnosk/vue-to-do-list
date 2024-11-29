<template>
    <div
        class="flex items-center justify-center bg-gray-50 p-4 rounded-md shadow-sm"
    >
        <span
            :class="{
                'line-through text-gray-400': task.completed,
                'text-gray-700': !task.completed,
            }"
        >
            {{ task.text }}
        </span>
        <div class="flex space-x-2">
            <common-button label="✔" type="secondary" @click="toggleTask" />
            <common-button label="✖" type="danger" @click="removeTask" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CommonButton from './CommonButton.vue'

export default defineComponent({
    name: 'TaskItem',
    components: { CommonButton },
    props: {
        task: {
            type: Object as PropType<{ text: string; complated: boolean }>,
            required: true,
        },
        emits: ['toggle', 'remove'],
        setup(props, { emit }) {
            const toggleTask = () => {
                console.log('toggle')
                emit('toggle')
            }
            const removeTask = () => {
                console.log('remove')
                emit('remove')
            }

            return { toggleTask, removeTask }
        },
    },
})
</script>
