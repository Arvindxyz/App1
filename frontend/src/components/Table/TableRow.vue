<template>
    <tr>
        <td v-for="(cell,$index) in row"
            :key="$index">
            {{cell.value}}
        </td>
    </tr>
</template>
<script>
export default {
    props:['row']
}
</script>
<style scoped>

</style>
