<template>
    <modal id="lpImageDialog" :shown="shown" @hide="shown = false">
        <img :src="imageUrl" />
    </modal>
</template>

<script>
import modal from './modal.vue';

export default {
    name: 'ItemViewImage',
    components: {
        modal,
    },
    computed: {
        shown: {
            get() {
                return !!(this.$store.activeItemDialog && this.$store.activeItemDialog.type === 'viewImage');
            },
            set(val) {
                if (!val) this.$store.closeItemDialog();
            },
        },
        imageUrl() {
            return this.$store.activeItemDialog && this.$store.activeItemDialog.type === 'viewImage'
                ? this.$store.activeItemDialog.imageUrl
                : '';
        },
    },
};
</script>

<style lang="scss">
#itemImageDialog {
    width: 640px;

    .imageUploadDescription {
        margin-bottom: 19px;
    }
}
</style>
