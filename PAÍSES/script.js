document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`

    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data[0])
            console.log(data[0].capital)
            console.log(data[0].continents[0])
            console.log(data[0].population)

            let flag = document.getElementById('flag')
            let nome = document.getElementById('nome')
            let cap = document.getElementById('cap')
            let con = document.getElementById('con')
            let pop = document.getElementById('pop')

            nome.innerHTML = pais
            cap.innerHTML = data[0].capital[0]
            con.innerHTML = data[0].continents[0]
            pop.innerHTML = data[0].population
            flag.src = data[0].flags.svg
        })
        
}