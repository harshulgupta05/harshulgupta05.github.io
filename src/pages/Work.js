import Technology from "../components/Technology";
import goggles from "../media/goggles.png";
import ninjas from "../media/ninjas.png";

function Work() {
    return (
        <div id="work" className="main">
            <h1 className="display-2">Work &amp; Volunteering</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Software Developer @ Oakville Centre for Vision" description="Developing software for vision therapy with C#, Java, and Python." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Code Sensei @ Code Ninjas" description="Teaching coding to kids aged 5-12 through Game Development with Scratch and JavaScript." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Session Facilitator @ KPMG Kids Network" description="Planned and facilitated STEM sessions for kids ged 4-12 across Canada. Topics included science experiments, live coding sessions, and critical thinking workshops." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Junior Instructor @ City of Mississauga" description="Helped instructors with planning and running aquatics lessons." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;