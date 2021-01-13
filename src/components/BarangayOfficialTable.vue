<template>
    <div>
        <v-row justify="center">
            <div class="headline font-weight-bold pb-3 pt-3">Barangay Officials</div>
        </v-row>
        <v-row>
        <v-col
            cols="flex-12"
        >
            <v-simple-table
                fixed-header
                height="300px"
                class="elevation-1"
            >
                        
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left font-weight-black">
                        Name
                    </th>
                    <th class="text-left font-weight-black">
                        Brgy.Position
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="(item, i) in barangay_officials"
                    :key="i.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.position }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
        barangay_officials: [
                {
                    name: 'Frozen Yogurt',
                    position: 'Brgy Captain',
                },
                {
                    name: 'Ice cream sandwich',
                    position: 'Appropriation',
                },
                {
                    name: 'Eclair',
                    position: 'Agriculture',
                },
                {
                    name: 'Cupcake',
                    position: 'Infrastructure',
                },
                {
                    name: 'Gingerbread',
                    position: 'Education',
                },
                {
                    name: 'Jelly bean',
                    position: 'Peace and Order',
                },
                {
                    name: 'Lollipop',
                    position: 'Health',
                },
                {
                    name: 'Honeycomb',
                    position: 'Sk Chairwoman',
                },
                {
                    name: 'Jellyace',
                    position: 'Secretary',
                },
                {
                    name: 'Honeycomb',
                    position: 'Treasurer',
                },
                {
                    name: 'Honeycomb',
                    position: 'Record Keeper',
                },
            ],
        }
    },
}
</script>

<style>

</style>