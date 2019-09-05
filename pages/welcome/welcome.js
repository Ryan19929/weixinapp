Page({
  onTap: function (event) {
    wx.redirectTo({
      url: "../posts/post"
    });

  },
  onReachBottom: function (event) {
    console.log('asfasdfa')
  }
})