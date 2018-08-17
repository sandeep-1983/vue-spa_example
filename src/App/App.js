import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            resp: '',
        };
    },
    methods: {
        makeGetRequest() {
            axios({ method: "GET", "url": "dummyAjaxCall/WelcomeNote" })
                .then(result => {
                    console.log(result);
                    this.resp = result.data;
                }, error => {
                    console.log('Error in SPA land:', error);
                    console.error(error);
                });

        }
    },
};
