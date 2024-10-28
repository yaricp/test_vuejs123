const env = process.env.VUE_APP_ENV;
const this_host_api = process.env.VUE_APP_THIS_HOST_API;
console.log('this_host_api: ', this_host_api)

let envApiUrl = '';
console.log("API from uri: ", window.location.origin)
console.log('ENV: ', env);
console.log("Api address: ", envApiUrl);
if (env === 'production') {
  if (this_host_api === 'true') {
    envApiUrl = window.location.origin;
  } else {
    envApiUrl = `${process.env.VUE_APP_API_PROD}`;
  }
} else if (env === 'staging') {
  envApiUrl = `${process.env.VUE_APP_API_STAG}`;
} else {
  envApiUrl = `${process.env.VUE_APP_API_DEV}`;
}

export const apiUrl = envApiUrl;
console.log("Api address: ", envApiUrl);
