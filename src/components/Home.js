import Navbar from './Navbar'
import Slider from "react-slick"
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

export const genderData = [
    ['Gender', 'Number of People'],
    ['Female', 11],
    ['Male', 16],
];

export const genderColors = {
    colors: ['#989898', '#dcdcdc'],
    backgroundColor: "transparent"
};


const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            {/* <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div> */}
            <div class="title">
                Chapter Breakdown
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
                    <div class="card">
                        <div>Gender</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={genderData}
                                options={genderColors}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="title">
                Our Pillars
            </div>
            <div class="home">
                <div class="container">
                    <div class="pic">
                        Hello
                        <img src={brotherhood} class="pic"></img>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;