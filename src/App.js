import headerImg from './images/illustration-hero.svg';
import icon from './images/icon-music.svg'
import './App.css';

function App() {
  return (
    <div className="container card">
      <img src={headerImg} alt="" className="" />
      
      <div class="card-content">
        <h2 className="heading">Order Summary</h2>
        <p class="desc">You can now listen to millions of songs, audio books, and podcasts on any device anywhere you like!</p>

        <div className="pricing">
          <img src={icon} className="music-icon" alt='img'/>
          <div class="plan-details">
            <h4 className="plan-title">Annual Plan</h4>
            <h4 className="price">$59.99/year</h4>
          </div>
          <a href='google.com' className="change"> Change</a>
        </div>

        <button type="submit">Proceed to Payment</button>

        <h4 className="cancel">Cancel Order</h4>    
      </div>
  </div> // End card container
  );
}

export default App;
