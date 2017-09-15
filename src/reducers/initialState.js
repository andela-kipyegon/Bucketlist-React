export default {
    bucketlists: { 
        bucketlist: [],
        meta: {}
    },
    session: !!localStorage.getItem('auth_token'),
    modal : {
        type: null,
        props: {}
    }
};