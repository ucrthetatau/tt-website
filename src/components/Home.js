// import Navbar from './Navbar'
// import Slider from "react-slick"
import { Chart } from "react-google-charts"
import '../styles/home.css'
import brotherhood from '../static/brotherhood.png'
import professionalism from '../static/professionalism.png'
import service from '../static/service.png'

export const yearData = [
    ['Year', 'Number of People'],
    ['1st', 2],
    ['2nd', 3],
    ['3rd', 9],
    ['4th', 12],
    ['5th', 3],
];

export const yearColors = {
    colors: ['#cd5c5c', '#7c0a02', '#a52a2a', '#f3b49f', '#cc3333'],
    backgroundColor: "transparent",
    legend: {
        // position: 'bottom', 
    }
};

export const majorData = [
    ['Major', 'Number of People'],
    ['CS', 4],
    ['ME', 9],
    ['CSBA', 4],
    ['BIEN', 5],
    ['MSE', 1],
    ['CHEME', 3],
    ['ENVE', 1]
];

export const majorColors = {
    colors: ['#ffcc33', '#e5b73b', '#da9100', '#996515', '#faf0be', '#f3e5ab', '#f8de7e'],
    backgroundColor: "transparent",
    position: "static"
};

// export const genderData = [
//     ['Gender', 'Number of People'],
//     ['Female', 11],
//     ['Male', 16],
// ];

// export const genderColors = {
//     colors: ['#989898', '#dcdcdc'],
//     backgroundColor: "transparent"
// };


const Home = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    return (
        <>
            <div class ="page-container">
                <div class ="title-container"> 
                    <div class="left-line"></div>
                        <div class="title">Chapter Breakdown</div> 
                    <div class="right-line"></div>
                </div>
                <div class="home">
                    <div class="container">
                        <div class="card">
                            <div>Year</div>
                            <div>
                                <Chart
                                    chartType="PieChart"
                                    data={yearData}
                                    options={yearColors}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                        <div class="card">
                            <div>Major</div>
                            <div>
                                <Chart
                                    chartType="PieChart"
                                    data={majorData}
                                    options={majorColors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class ="title-container"> 
                    <div class="left-line"></div>
                        <div class="title">Our Pillars</div> 
                    <div class="right-line"></div>
                </div>
                <div class="home">
                    <div class="container">
                        <div class="pillar">
                            <div class="pic">
                                <img src={brotherhood} alt="BrotherhoodIcon" class="pic"></img>
                            </div>
                            <div class="subtitle">Brotherhood</div>
                            <div class="border-with-diamonds"></div>
                            <div class="caption">
                                We develop lifelong bonds of fraternal fellowship between our members through unique and memorable experiences. We stay supportive and honest with each other to promote a brotherhood that goes beyond school and work.
                            </div>
                            <div class="border-with-diamonds"></div>
                        </div>
                        <div class="pillar">
                            <div class="pic">
                                <img src={professionalism} alt="ProfessionalismIcon=" class="pic"></img>
                            </div>
                            <div class="subtitle">Professionalism</div>
                            <div class="border-with-diamonds"></div>
                            <div class="caption">
                                We aim to build  and refine the professional abilities of our members so that they succeed in their careers and endeavors. We emphasize professional characteristics such as communication, presentation, and innovation.
                            </div>
                            <div class="border-with-diamonds"></div>
                        </div>
                        <div class="pillar">
                            <div class="pic">
                                <img src={service} alt="ServiceIcon" class="pic"></img>
                            </div>
                            <div class="subtitle">Service</div>
                            <div class="border-with-diamonds"></div>
                            <div class="caption">
                                We believe that it is important to excel in our respective fields as well as give back to the community. Our members strive to lead by example and stay true through volunteering, work, and contribution to the school and community.
                            </div>
                            <div class="border-with-diamonds"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;