
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Imagenes</title>

    <link rel="stylesheet" href="./assets/css/style.css">

</head>

<body>

 

    <div class="galeria">

        <img src="./assets/img/imagen1.jpg" alt="">

        <img src="./assets/img/imagen2.jpg" alt="">

        <img src="./assets/img/imagen3.jpg" alt="">

        <img src="./assets/img/imagen4.jpg" alt="">

        <img src="./assets/img/imagen1.jpg" alt="">

        <img src="./assets/img/imagen2.jpg" alt="">

    </div>

    

</body>

</html>

.galeria {

    position: absolute;

    align-content: center;

    padding: 50px;

    width: 60vw;

    height: 60vmin;

    display: flex;

    gap: 10px;

}

 

.galeria img {

    height: 100%;

    flex: 1;

    object-fit: cover;

    cursor: pointer;

    overflow: hidden;

    border-radius: 10px;

    transition: all 0.5s;

}

 

.galeria img:hover {

    flex: 5;

}