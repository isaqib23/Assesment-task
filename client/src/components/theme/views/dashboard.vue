<template>

    <v-container fluid>
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-layout wrap>
            <v-flex xs12 class="pa-2">
                <v-subheader class="pa-0 subtitle-2 black--text font-weight-bold">Dashboard</v-subheader>
                <GmapMap
                        :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
                        :zoom="7"
                        map-type-id="terrain"
                        style="width: 500px; height: 300px"
                >
                    <GmapMarker
                            :key="index"
                            v-for="(m, index) in locations"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=m.position"
                    />
                </GmapMap>
            </v-flex>
            <!-- Top Content -->
        </v-layout>

    </v-container>
</template>

<script>
    import axios from 'axios';
    import {google} from 'vue2-google-maps'
    export default {
        data: () => ({
            locations : [{lat: 24.4860841 , lng: 54.3576481}],
            currentLocation : { lat : 0, lng : 0},
            dummyRestaurants : [
                {"name" : "test1", lat: "24.4860841", lng: "54.3576481", "address": "Besides Crown Plaza - Hamdan Bin Mohammed St - Zone 1E3-02 - Abu Dhabi"},
                {"name" : "test2", lat: "24.4884259", lng: "54.3440424", "address": "Fatima Bint Mubarak St - Zone 1 - Abu Dhabi"},
                {"name" : "test3", lat: "24.4687319", lng: "54.3270987", "address": "Delma St - Zone 1E20-02 - Abu Dhabi"},
            ]
        }),

        created () {
            this.addDummyRestaurants();
            this.getAllRestaurants();
            this.geolocation();
        },

        methods: {
            addDummyRestaurants () {
                for (let i=0; i<this.dummyRestaurants.length; i++) {
                    axios.post("http://localhost:8080/api/restaurants/create", this.dummyRestaurants[i])
                        .then(res => {
                            this.locations.push(res.data);
                        });
                }
            },
            getAllRestaurants () {
                axios.get("http://localhost:8080/api/restaurants/all", {})
                    .then(res => {
                        this.locations = res.data;
                    });
            },
            geolocation : function() {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address': this.searchAddressInput}, (results, status) => {
                    if (status === 'OK') {
                        this.currentLocation.lat = results[0].geometry.location.lat();
                        this.currentLocation.lng = results[0].geometry.location.lng();
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>
