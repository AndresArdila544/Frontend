

module.exports = {
  "configureWebpack": {
    "plugins": [
      
    ],
    "devServer": {
      "port": 4200
    },
  
  },
  "transpileDependencies": [
    "vuetify"
  ],
  
}
module.rules = [
  {
    test: /\.(css|scss|sass|sss)$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader'},
        { loader: 'sass-loader' }
    ]
},
]