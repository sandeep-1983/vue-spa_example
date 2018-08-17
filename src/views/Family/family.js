export default {
    name: 'family',
    methods: {
        onClick(event) {
            const path =`./${event.target.dataset.val}`;
            this.$router.push(path);
        },
    },
};
