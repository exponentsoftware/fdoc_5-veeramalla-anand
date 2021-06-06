import axios from 'axios';

    axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            response.data.sort((a,b) => a.area - b.area).reverse().slice(0, 10).map(res =>
                    console.log("country : "+res.name+" area : "+res.area)
               )
        })
        .catch(error => {
    console.log(error)
        })