import electrician from './electrician.jpeg';
import smarthome from './smarthome.jpg';
import drywall from './drywall.jpg';
import painting from './painting_2.jpeg';
import tiles from './tiles.jpeg';
import plumbing from './plumbing.jpeg';


export default function Home(){
  
    return (
        <div>
            <div class="container">
                <div class="row">
            <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={smarthome} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Smarthome Services</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
        <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={drywall} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Drywall Services</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
        <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={electrician} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Electrical Services</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
        <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={painting} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Painting Services</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
        <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={plumbing} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Plumbing Services</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
       
        <div class="col-sm-4">
                            <div class="card box-shadow" >
                                <img class="card-img-top" src={tiles} alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">Tiles Installation</h4>
                                    <p class="card-text"></p>
                                    <a href="/login" class="btn btn-dark">View Services</a>
                                </div>
                            </div>
                  </div>
         </div>
         </div>
        </div>
    )
}