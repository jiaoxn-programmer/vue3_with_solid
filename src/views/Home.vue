<script>
import { onMounted, ref } from 'vue';
import MyHeader from '../components/MyHeader.vue';
import MyTodoList from '../components/MyTodoList.vue';
// import MyTodoCard from '../components/MyTodoCard.vue';
import MyTodoRow from '../components/MyTodoRow.vue';
import { Api } from '../services/api';

export default {
    name: 'Home',
    components: {
        MyHeader,
        MyTodoList,
        // MyTodoCard,
        MyTodoRow,
    },
    setup() {
        let todos = ref([]);

        const fetchTodos = async () => {
            const api = new Api();
            return await api.fetch('todos');
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
        <MyHeader listName="代办事项列表" />
        <main>
            <MyTodoList>
                <!-- <MyTodoCard v-for="todo in todos" :key="todo.id" :todo="todo"/> -->
                <MyTodoRow v-for="todo in todos" :key="todo.id" :todo="todo" />
            </MyTodoList>
        </main>
    </div>
</template>

<style lang="scss">
.container {
    padding: 1.5rem;
}
</style>
