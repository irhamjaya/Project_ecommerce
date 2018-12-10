import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <body>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">FootBall</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FIFA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link Champion" href="#">Champion</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        World Cup
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">La_liga</a>
                        <a class="dropdown-item" href="#">English_Premier</a>
                        <a class="dropdown-item" href="#">Seri A></a>
                        <div class="dropdown-divider"></div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">LOGIN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SIGN UP</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 cari">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        </div>
        
    </nav>
    
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="img/Er2407512-50049017-1600-900.jpg" size='10px' alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="img/logo_champion_league_noticia_normal.jpg" size='10px' alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="img/premier_league.jpg" size='10px' alt="Third slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="img/russia-2018-official-logo-1528701072.jpg" size='10px' alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <section class="grid3" id='grid3'>
        <div class="container-fluid gr3">
            <div class='row'>
                <div class='col-12 text-center'>
                    <h1>New Arrivals</h1>
                    <hr class="garis"/>
                </div>
            </div>
            <div class="row">
                <div class="col-4 p-0 text-center">
                    <a href="#">
                        <img src="img/2018-2019-uefa-champions-league-adidas-finale-18-official-match-ball-small.png"
                            alt='...'/>
                    </a>
                    <h3 class="mt-3">2018-2019-uefa-champions-league-adidas-finale-18-official-match</h3>
                    <p class="normal">diskon 20%</p>
                </div>
                <div class="col-4 p-0 text-center">
                    <a href="">
                        <img src="img/2018-world-cup-adidas-telstar-18-official-match-ball-small.png" alt=""/>
                    </a>
                    <h3 class="mt-3"> 2018 2018-world-cup-adidas-telstar-18-official-match</h3>
                    <p class="normal"> diskon 30%</p>
                </div>
                <div class="col-4 p-0 text-center">
                    <a href="">
                        <img src="img/2017-2018-serie-a-nike-ordem-5-official-match-ball-small.png" alt="..."/>
                    </a>
                    <h3 class="mt-3"> 2017-2018-serie-a-nike-ordem-5-official-match</h3>
                    <p class="normal">diskon 25%</p>
                </div>
            </div>
            </div>
            
    </section>
    </body>
    </div>
    );
  }
}

export default App;
