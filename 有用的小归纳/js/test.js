
new Vue({
    el:'#box',
    data:{
        username:"dsf",
        age:"sdf",
        myData:[]


    },
    methods:{

        add:function(){
            console.log(666);
            this.myData.push({
                username:this.username,
                age:this.age

            })
        }

    }
});



