import Technology from "../components/Technology";
// import goggles from "../media/goggles.png";
import ninjas from "../media/ninjas.png";
import ocv from "../media/ocv.png";
// import softdev from "../media/softdev.png";
import kpm from "../media/kpm.png";
import miss from "../media/miss.png";

function Work() {
    return (
        <div id="work" className="main">
            <h1 className="display-2">Work &amp; Volunteering</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Software Developer @ Oakville Centre for Vision" imageTitle="Credit: OCV" description="Developing software for vision therapy with C#, Java, and Python." imagelink={ocv} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Code Sensei @ Code Ninjas" imageTitle="Credit: Pixabay" description="Teaching coding to kids aged 5-12 through Game Development with Scratch and JavaScript." imagelink={ninjas} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Session Facilitator @ KPMG Kids Network" imageTitle="Credit: Guilbs2015, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" description="Planned and facilitated STEM sessions for kids ged 4-12 across Canada. Topics included science experiments, live coding sessions, and critical thinking workshops." imagelink={kpm} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Junior Instructor @ City of Mississauga" imageTitle="Credit: Original work: City of Mississauga This version: EuroCarGT, Public domain, via Wikimedia Commons" description="Helped instructors with planning and running aquatics lessons." imagelink={miss} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;