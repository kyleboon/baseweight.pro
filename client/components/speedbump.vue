<template>
    <modal id="speedbump" :shown="shown" @hide="shown = false">
        <h2 v-if="messages.title">
            {{ messages.title }}
        </h2>

        <p>{{ messages.body }}</p>

        <div class="buttons">
            <button v-focus-on-create class="lpButton" @click="confirmSpeedbump()">
                {{ messages.confirm }}
            </button>
            &nbsp;<button class="lpButton" @click="shown = false">
                {{ messages.cancel }}
            </button>
        </div>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'Speedbump',
    components: {
        modal,
    },
    data() {
        return {
            defaultMessages: {
                title: '',
                body: '',
                confirm: 'Yes',
                cancel: 'No',
            },
        };
    },
    computed: {
        shown: {
            get() {
                return this.$store.speedbump !== null;
            },
            set(val) {
                if (!val) this.$store.closeSpeedbump();
            },
        },
        messages() {
            const msgs = Object.assign({}, this.defaultMessages);
            const speedbump = this.$store.speedbump;
            if (!speedbump) return msgs;
            const options = speedbump.options;
            if (typeof options === 'string') {
                msgs.body = options;
            } else if (options) {
                Object.assign(msgs, options);
            }
            return msgs;
        },
    },
    methods: {
        confirmSpeedbump() {
            this.$store.confirmSpeedbump();
        },
    },
};
</script>

<style lang="scss"></style>
