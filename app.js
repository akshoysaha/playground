const axios = require('axios');

const proxy_list = [
    {
        protocol: 'http',
        host: '149.129.239.170',
        port: 8080,
    },
    {
        protocol: 'http',
        host: '132.129.121.148',
        port: 8080,
    },
    //...
]
let random_index = Math.floor(Math.random() * proxy_list.length);
const randomProxy = {
    proxy: proxy_list[random_index]
}

/**refer: https://github.com/TooTallNate/node-https-proxy-agent */
// const HttpsProxyAgent = {
//     proxy: false,
//     httpsAgent: new HttpsProxyAgent.HttpsProxyAgent(`https://${process.env.luminatiUsername}:${process.env.luminatiPassword}@zproxy.lum-superproxy.io:22225`)
// }
const scrapingbeeProxy = {
    proxy: {
        protocol: 'http',
        host: 'proxy.scrapingbee.com',
        port: 8886,
        auth: {
            username: '<SCRAPINGBEE_API_KEY>',
            password: 'render_js=False&premium_proxy=True&country_code=us'
        }
    }
}

axios.get('https://httpbin.org/anything?json',
{
    headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    },
    // ...HttpsProxyAgent,
    ...scrapingbeeProxy
})
    .then(res => {
        console.log(res.data)
    }).catch(err => console.error(err))