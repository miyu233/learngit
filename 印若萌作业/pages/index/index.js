//index.js
Page({
  data: {
    // text:"这是一个页面"
    
    userName: '请输入姓名：',
    psw: '请输入手机号：'
  },
  formBindsubmit: function (e) {
    this.setData({
      tip: '输入成功'
    })
  }
})
Page({
  data:{
    videoSrc:'/pages/resource/video/'
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url:'../logs/logs'
    })
  },
  onLoad:function(){
  },
  goToTalkPage:function(param){
    var fb_id = 132
    wx.navigateTo({
      url: '/pages/index/talkPage?fb_id=${fb_id}',
    
    })
  }
})