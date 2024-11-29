<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h1 class="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <form @submit.prevent="addTask" class="flex space-x-2 mb-4">
                <common-input
                    id="task-input"
                    v-model="newTask"
                    placeholder="Enter your task"
                    label="New Task"
                    :error="newTask.trim() === '' ? 'Tack cannot be empty' : ''"
                />
                <common-button
                    label="Add"
                    type="primary"
                    :disabled="newTask.trim() === ''"
                    @click="addTask"
                />
            </form>
            <ul class="space-y-2">
                <li v-for="(task, index) in tasks" :key="index">
                    <task-item
                        :task="task"
                        @toggle="toggleTask(index)"
                        @remove="removeTask(index)"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import CommonButton from './components/CommonButton.vue'
import CommonInput from './components/CommonInput.vue'
import TaskItem from './components/TaskItem.vue'

interface Task {
    text: string
    completed: boolean
}

export default {
    components: { CommonInput, CommonButton, TaskItem },
    setup() {
        const tasks = ref<Task[]>([])
        const newTask = ref<string>('')

        const addTask = () => {
            if (!newTask.value.trim()) return
            tasks.value.push({ text: newTask.value.trim(), completed: false })
            newTask.value = ''
        }

        const toggleTask = (index: number) => {
            tasks.value[index].completed = !tasks.value[index].completed
        }

        const removeTask = (index: number) => {
            console.log('remove task at index', index)
            tasks.value.splice(index, 1)
        }

        return { tasks, newTask, addTask, toggleTask, removeTask }
    },
}
</script>
