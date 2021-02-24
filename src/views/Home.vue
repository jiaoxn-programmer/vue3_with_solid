<script>
import { onMounted, ref } from 'vue';
import MyHeader from '../components/MyHeader.vue';
import MyTodoList from '../components/MyTodoList.vue';
import { Api } from '../services/api'

export default {
    name: 'Home',
    components: {
        MyHeader,
        MyTodoList
    },
    setup() {
        let todos = ref([]);

        const fetchTodos = async () => {
            const api = new Api('todos')
            return await api.fetch()
        };
        onMounted(async () => {
            todos.value = await fetchTodos();
        });

        return {
            todos,
        };
    },
};
</script>

<template>
    <div>
        <MyHeader :listName="代办事项列表"/>
        <main>
            <MyTodoList :todos="todos"/>
        </main>
    </div>
</template>

<style lang="scss">
.container {
    padding: 1.5rem;
}

</style>
