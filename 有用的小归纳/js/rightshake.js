
document.writeln("<div class=\'cbf\'>");
document.writeln("		<a  href=\'http://www.sojump.com/jq/10478046.aspx\' target=\'_blank\'>");
document.writeln("			<i>");
document.writeln("				Ö¢×´<br>");
document.writeln("				×Ô²â");
document.writeln("			</i>");
document.writeln("		</a>");
document.writeln("<h6><img src=\'/images/xx.png\' alt=\'\'></h6>");
document.writeln("	</div>");
document.writeln("<style>");
document.writeln("		.cbf{position: fixed; right: 0.1rem; top: 40%; width: 4.75rem; height: 4.75rem; background: #f18200;");
document.writeln("			text-align: center; font-size: 1.7rem;  border-radius: 0.5rem;}");
document.writeln("		.cbf i{font-style:normal; color:#fff; line-height: 113%; display:block;}");
document.writeln("		.cbf a{position: absolute; width: 4.75rem; margin-top: 0.5rem; left: 0; color: #fff; text-decoration:none;}");
document.writeln("		.cbf h6{position: absolute; top:-0.5rem; right:-0.5rem; width:1.5rem;}");
document.writeln("		.cbf h6 img{display:block;}");
document.writeln("	</style>");

$(function(){
    function shake(){
        //window.console.log('shake')
        var a=['bottom','right'],b=0;
        var u=setInterval(function(){
            $('.cbf').css( a[b%2] , (b++)%4<2?0:4 );
            if(b>27){
                clearInterval(u);
                b=0;
            }
        },30)
    }
    setInterval(shake,5000)

    //close the rightshake
    function showgo(){
        $('.cbf h6').click(function(){
            $('.cbf').hide();
            setTimeout(function(){
                $('.cbf').show()
            },10000)
        })
    }
    showgo();

})
