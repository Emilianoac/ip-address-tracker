module.exports = {
    //github-pages deploy 
    publicPath: '/ip-address-tracker',

    pwa: {
        name: 'IP Address Tracker',
        themeColor: '#5364c8',
        background_color: '#fff',
        msTileColor: '#fff',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
        }
    }
}