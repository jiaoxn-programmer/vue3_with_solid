<script>
export default {
    name: 'MyHeader',
    props: ['listName'],
};
</script>

<template>
    <header class="header">
        <nav class="header-nav" />
        <div class="container">
            <h1>{{$props.listName}}</h1>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    width: 100%;
    &-nav {
        background: teal;
        width: 100%;
        height: 56px;
    }
}
</style>
