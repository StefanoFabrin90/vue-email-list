// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el: '#app',
    data: {
        EmailRandom:[],
        apiEmailURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },

    created() {
        this.generateEmail();
    },

    methods: {
        generateEmail() {


            axios.get(this.apiEmailURL)

            .then(response => {
                // handle success
                const email= '';
                for(let i = 0; i < 10 ; i++) {
                    
                    const email = response.data.response
                    console.log(email);
                    
                    this.EmailRandom.push(email)
                }
                // this.EmailRandom = response.data.response
                // console.log(response.data.response)
            })

            .catch(error => {
            // handle error
            console.log(error);
            });
        },
    },
});