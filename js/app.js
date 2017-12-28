new Vue({
    el: '#vue-app',
    data: {
        message: 'Olá João, está é sua primeira app vueJs',
        job: 'Teste',
        site: 'https://www.google.com.br',
        testSite: '<a href="https://www.google.com.br">Teste Google</a>',
        age: 25
    },
    methods: {
        greet: function (job) {
            return  'Este é um ' + job
        },
        add: function (year) {
            this.age += year;
        },
        subtract: function(year) {
            this.age -= year;
        }
    }
});