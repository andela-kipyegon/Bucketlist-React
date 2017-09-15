
class bucketlistApi {
    static load_bucketlists() {
        return new Promise((resolve) => {
           const request = new Request('https://bucketlist-application.herokuapp.com/api/v1/bucketlist/', {
               method: 'GET',
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': 'Token ' + localStorage.getItem('auth_token')
               })
           });

           return fetch(request).then(response => {
                resolve(response.json());
           }).catch(error => {
               return error;
           });
       });
    }

    static deleteBucketlist(bucketId) {
        return new Promise((resolve) => {
           const request = new Request('https://bucketlist-application.herokuapp.com/api/v1/bucketlist/' + bucketId, {
               method: 'DELETE',
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': 'Token ' + localStorage.getItem('auth_token')
               })
           });

           return fetch(request).then(response => {
               resolve(response.json());
           }).catch(error => {
               return error;
           });
       });
    }

    static createBucket(name) {
        return new Promise((resolve,reject) => {
            const request = new Request('https://bucketlist-application.herokuapp.com/api/v1/bucketlist/', {
               method: 'POST',
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': 'Token ' + localStorage.getItem('auth_token')
               }),
               body: JSON.stringify(name)
            });

            return fetch(request).then(response => {
                if (!response.ok) {
                   reject('Enter a valid Bucket name');
                }
                resolve(response.json());
            }).catch(error => {
                return error;
            });
        });
    }

}

export default bucketlistApi;