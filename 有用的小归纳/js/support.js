$(document).ready(function(){
    $('.submit-link').on('click',function(){
        window.history.go(-1)
    });
    //注册手机号或者邮箱
    $('#username').blur(function(){
        var user = $('#username').val();

        if(user==''){
            $('.form-group').eq(0).append('<p>邮箱或用户名不能为空<span></span></p>');

            return false
        }

        else if(user.match(/@/)&&!user.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){

            $('.form-group').eq(0).append('<p>邮箱格式不正确<span></span></p>')
            return false
        }
        else if(!user.match(/@/)&&!user.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
            $('.form-group').eq(0).append('<p style="right:-30%">请输入正确的手机号或邮箱<span></span></p>')
            return false
        }
        return true

    });
    $('#username').focus(function(){
        $(this).siblings().remove();
    })
    //密码设置
    $('#password').blur(function(){
        var psd = $('#password').val();
// 	var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
//	 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if (false == enoughRegex.test(psd)) {
            $('.pasd').css({
                'display':'block',
            })
//		 }else if (strongRegex.test($(this).val())){
//		 $('.pasd').html('密码强度：高 ');
//		  $('.pasd').css({
//		 	'display':'block',
//		 })
//		 }else if(mediumRegex.test(psd)){
//
//		 $('.pasd').html('密码强度：中');
//		  $('.pasd').css({
//		 	'display':'block',
//		 })
//		 }else{
//
//		 $('.pasd').html('密码强度：危险!');
//		  $('.pasd').css({
//		 	'display':'block',
//		 })
            return false;
        }else{return true}

    });
    $('#password').focus(function(){
        $(this).siblings().css({'display':'none'})
    });
    //密码检验
    $('#checkPassword').blur(function(){
        var psd2 = $('#checkPassword').val();
        var psd = $('#password').val();
        if(psd2!=psd){
            $('.checkPasd').css({'display':'block'});
            return false
        }
        return true
    });
    $('#checkPassword').focus(function(){
        $(this).siblings().css({'display':'none'})
    });
    //获取验证码
    $('.getCode').click(function(){
        var user = $('#username');
        $.ajax({
            type:"get",
            url:"",
            async:true,
            success:function(data,stadus){
                if(data.errcode==0){
                    var count = 15;
                    var timer = setInterval(function(){
                        var $this = $('.getCode');
                        count --;
                        $this.css({'backgroundColor':'#eee','color':'#333'});
                        $this.html(count+'s后再次点击获取');

                        if(count==0){
                            clearInterval(timer);
                            $this.css({'backgroundColor':'dodgerblue','color':'white'});
                            $this.html('获取验证码')
                        }
                    },1000)
                }else{
                    $('.getCode').html('发送失败，再试一次')
                }
            },
            error:function(data,stadus){
                alert(stadus)
            }
        });
    });
    //验证发送的验证码是否和输入一致
    $('#submit-btn').click(function(){
        var userName = $('#username').val();
        var passWord = $('#password').val();
        $.ajax({
            type:"get",
            url:"",
            async:true,
            success:function(data,stadus){
                if(data.errcode==0){
                    $.ajax({
                        type:"post",
                        url:"",
                        async:true,
                        data:{
                            'userName':userName,
                            'passWord':passWord,
                            'time':15
                        },
                        success:function(data,stadus){
                            if(data.errcode==0){
                                window.open('wwww.badidu.com')
                            }else{
                                $('.checkCode').html('提交失败，再试一次')
                            }
                        },
                        error:function(data,stadus){
                            $('.checkCode').html(data.msg)
                        }
                    });

                }else{
                    $('.checkCode').css({'display':'block'})
                }
            },
            error:function(data,stadus){
                $('.checkCode').html(stadus)
            }
        });
    })


})


