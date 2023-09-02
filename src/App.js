import './App.css';
import logo1 from './01.jpg'
import logo2 from './02.jpg'
import logo3 from './03.jpg'
import logo4 from './04.jpg'
import logo5 from './gl.svg'
import DiamondIcon from '@mui/icons-material/Diamond';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import SavingsIcon from '@mui/icons-material/Savings';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

// import AbcIcon from '@mui/icons-material/Abc';
// import SMButton from './components/SMButton';  // icon pics ki tarha nh hoty k name mein save ho ya component hotay hn jinhy hum {} mein nh balky </>is mein used krtey hn


function App() {
    // let test = () => {
    //     console.log("SUCCESSFULL")
    // }
   
  return (
    <>
    {/* <SMButton buttonClick={test} label="abqwc" id="btn1"/>
    <SMButton buttonClick="#" label="asdac"id="btn2"/>
    <SMButton buttonClick="#" label="aad"id="btn3"/>
    <SMButton buttonClick="#" label="bsa"id="btn4"/>
    <button><AbcIcon/></button> */}


    <body>
    <div class="navbar">
        <div class="logo" href="#">DORSIN</div>
        <div class="nav">
         <a href="#">Home</a>
         <a href="#">Services</a>
         <a href="#">Features</a>
         <a href="#">Pricing</a>
         <a href="#">Team</a>
         <a href="#">Blog</a>
         <a href="#">Contact</a>
        </div>
        <button class="btn">Try it Free</button>
    </div>
    <section>
        <div class="banner">
            <div class="layer"> <h1>We help startups launch their<br/> products</h1>
                <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
            </div>
        </div>
    </section>
    <section>
        <div class="card">
            <h1>OUR SERVICES<span id="line"></span></h1>
            <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that<br/> have meaning and add a value for our clients</p>
        </div>
        <br/>
        <div class="container1">
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><DiamondIcon/></a>
                <div id="chlid2">  
                    <h3>Digital Design</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>
                
            </div>
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><DvrRoundedIcon/></a>
                <div id="chlid2"></div>
                <h3>Unlimited Colors</h3>
                <p>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
            </div>
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><SavingsIcon/></a>
                <div id="chlid2"> <h3>Strategy Solutions</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia</p>
                </div>
            </div>
        </div>
        <div class="container2">
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><AcUnitIcon/></a>
                <div id="chlid2"> <h3>Awesome Support</h3>
                    <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
               </div>
            </div>
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><DocumentScannerIcon/></a>
                <div id="chlid2"><h3>Truly Multipurpose</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
               </div>
            </div>
            <div class="box">
                <br/>
                <a id="chlid1" href="#"><ConnectingAirportsIcon/></a>
                <div id="chlid2"><h3>Easy to customize</h3>
                    <p>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
               </div>
             </div>
        </div>
    </section>
    <div class="ourinfo">
        <div class="info">
            <h2>A digital web design studio creating modern & engaging online experiences</h2>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
           <br/>
           <ul>
            <li><span>We put a lot of effort in design.</span></li>
            <li><span>The most important ingredient of successful website.</span></li>
            <li><span>Sed ut perspiciatis unde omnis iste natus error sit.</span></li>
            <li><span>Submit Your Organization.</span></li>
           </ul>       
            <button id="btn" href="#" >Learn More</button>
        </div>
        <img src={logo5} alt="logo"/>
    </div>
    <section>
        <div class="banner2">
            <div class="layer2"><h2>Build your dream website today</h2>
                <p>But nothing the copy said could convince her and so it didn’t take long until a few<br/>insidious Copy Writers ambushed her..</p>
                <button>View Plan & Pricing</button>  
            </div>
        </div>
    </section>
    <section>
        <div class="card">
            <h1>OUR PRICING<span id="line"></span></h1>
            <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out<br/>with amazing options</p>
        </div>
        <br/>
        <div class="content1">
            <div class="box1">
                <br/>  
                <h3>ECONOMY</h3>
                <h1>$9.90</h1>
                <h4>BILLING PER MONTH<span id="line1"></span></h4>
                <p>Bandwidth: <span>1GB</span></p>
                <p>Onlinespace: <span>50MB</span></p>
                <p>Support: <span>NO</span></p>
                <p><span>1</span> Domain</p>
                <p><span>No</span> Hidden fees</p>
                <br/>
                <button id="bb">Join Now</button>
            </div>
            <div class="box1">
                <br/>
                <h3>DELURE</h3>
                <h1>$19.90</h1>
                <h4>BILLING PER MONTH<span id="line1"></span></h4>
                <p>Bandwidth: <span>10GB</span></p>
                <p>Onlinespace: <span>500MB</span></p>
                <p>Support: <span>YES</span></p>
                <p><span>10</span> Domain</p>
                <p><span>No</span> Hidden fees</p>
                <br/>
                <button id="bb">Join Now</button>
            </div>
            <div class="box1">
                 <br/>
                 <h3>ULTIMATE</h3>
                 <h1>$29.90</h1>
                 <h4>BILLING PER MONTH<span id="line1"></span></h4>
                 <p>Bandwidth: <span>100GB</span></p>
                 <p>Onlinespace: <span>2 GB</span></p>
                 <p>Support: <span>YES</span></p>
                 <p><span>Unlimited</span> Domain</p>
                 <p><span>No</span> Hidden fees</p>
                 <br/>
                 <button id="bb">Join Now</button>
            </div>
        </div>
    </section>
    <section>
        <div class="card">
            <h1>BEHIND THE PEOPLE<span id="line"></span></h1>
            <p>It is a long established fact that create category leading brand experiences a reader will be distracted by<br/> the readable content of a page when looking at its layout.</p>
        </div>
        <br/>
        <div class="container3">
            <div class="box3">
                <img src={logo1}/>
                <p>Frank Johnson</p>
                <h4>CEO<span id="line2"></span></h4>
            </div>
            <div class="box3">
                <img src={logo2}/>
                <p>Elaine Stclair</p>
                <h4>DESIGNER<span id="line2"></span></h4>
            </div>
            <div class="box3">
                <img src={logo3}/>
                <p>Wanda Arthur</p>
                <h4>DEVELOPER<span id="line2"></span></h4>
             </div>
            <div class="box3">
                <img src={logo4}/>
                <p>Joshua Stemple</p>
                <h4>MANAGER<span id="line2"></span></h4>
             </div>
        </div>
    </section>
    <div class="card">
        <h1>WORK PROCESS<span id="line"></span></h1>
        <p>It is a long established fact that create category leading brand experiences a reader will be distracted by<br/> the readable content of a page when looking at its layout.</p>
    </div>
  




    </body>
</>
  );
}

export default App;
