<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API - STAR WARS</title>
</head>
<body>
    <script>
        fetch('https://swapi.dev/api/people/1/')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
    </script>
</body>
</html>