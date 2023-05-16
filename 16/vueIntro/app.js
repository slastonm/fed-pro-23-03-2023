const app = Vue.createApp({
    data(){
        return{
            productName:'TV',
            price:100,
            curency: '$',
            showInfo:true,
            link:"https://prog.academy/",
            src:'123.webp',
            users:[
                {
                    name:'Bob',
                    age:30,
                    isAdmin:true
                },
                {
                    name:'Bob2',
                    age:45,
                    isAdmin:false
                },
                {
                    name:'Tom',
                    age:45,
                    isAdmin:true
                },
                {
                    name:'Eva2',
                    age:45,
                    isAdmin:false
                }
            ]
        }
        
    },
    methods: {
        changeCurency(){
            console.log('Test');
            this.curency = '$$';
        },
        changeProductName(name){
            this.productName = name;
        },
        toggleShowInfo(){
            this.showInfo = !this.showInfo;
        },
        adminMode(user){
            user.isAdmin = !user.isAdmin;
        }
    },
    computed:{
        justAdmin(){
            return this.users.filter((user)=>user.isAdmin);
        } 
    }
});

app.mount('#app');