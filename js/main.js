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

            for(let i = 0; i < 10 ; i++) {

                axios.get(this.apiEmailURL)

                .then(response => {
                    // handle success
                    this.EmailRandom.push(response.data.response)
                    console.log(response.data.response)
                })
    
                .catch(error => {
                // handle error
                console.log(error);
                });
            }
            
        },
    },
});