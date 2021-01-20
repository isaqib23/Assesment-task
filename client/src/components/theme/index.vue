<template>
    <div class="fill-height appBG">
        <v-main>
            <v-container fluid
               :class="$vuetify.breakpoint.smAndDown ? 'elevated pa-1' : 'elevated pa-5'"
            >
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-main>
    </div>
</template>

<script>

export default {
    data: () => ({
    }),


    methods: {
    }
}
</script>
