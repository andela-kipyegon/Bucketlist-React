// auth api service

// export const handleErrors = (response) => {
//     if (!response.ok) {
//         reject('user not found')
//     }
//     return resolve(response.json());
// };


class authApi {  
  static login(credentials) {
       return new Promise((resolve, reject) => {
           const request = new Request('https://bucketlist-application.herokuapp.com/api/v1/auth/login', {
               method: 'POST',
               headers: new Headers({
                   'Content-Type': 'application/json'
               }),
               body: JSON.stringify(credentials)
           });

           return fetch(request).then(response => {
                if (!response.ok) {
                   reject('user not found');
                }
                resolve(response.json());
           }).catch(error => {
               return error;
           });
       });
            
  }

  static register(credentials) {
      return new Promise((resolve, reject) => {
           const request = new Request('https://bucketlist-application.herokuapp.com/api/v1/auth/register', {
               method: 'POST',
               headers: new Headers({
                   'Content-Type': 'application/json'
               }),
               body: JSON.stringify(credentials)
           });

           return fetch(request).then(response => {
                if (!response.ok) {
                   reject('please fill in the right details');
                }
                resolve(response.json());
           }).catch(error => {
               return error;
           });
       });
  }
}

export default authApi;
