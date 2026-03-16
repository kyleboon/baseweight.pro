<template>
    <modal id="itemLinkDialog" :shown="shown" @hide="shown = false">
        <h2>Add a link for this item</h2>
        <form id="itemLinkForm" @submit.prevent="addLink">
            <input v-model="url" type="text" d="itemLink" placeholder="Item Link" />
            <input type="submit" class="lpButton" value="Save" />
            <a class="lpHref close" @click="shown = false">Cancel</a>
        </form>
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'ItemLink',
    components: {
        modal,
    },
    data() {
        return {
            url: '',
        };
    },
    computed: {
        shown: {
            get() {
                return !!(this.$store.activeItemDialog && this.$store.activeItemDialog.type === 'link');
            },
            set(val) {
                if (!val) this.$store.closeItemDialog();
            },
        },
        item() {
            return this.$store.activeItemDialog ? this.$store.activeItemDialog.item : null;
        },
    },
    watch: {
        shown(val) {
            if (val && this.item) {
                this.url = this.item.url;
            }
        },
    },
    methods: {
        addLink() {
            this.$store.updateItemLink({ url: this.url, item: this.item });
            this.$store.closeItemDialog();
        },
    },
};
</script>

<style lang="scss"></style>
