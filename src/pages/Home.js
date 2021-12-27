//import react from "react";
import me from "../media/me.jpg"
import Button from "../components/Button";
import '../styles/fullscreen.css';

function Home() {
    return (
        <div className="container my-4 main" id="home">
            <div className="row">
                <div className="col-sm-4 my-4">
                    <img src={me} className="img-fluid" alt="Harshul"></img>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                        <h1 className="display-1 my-2">Harshul Gupta</h1>
                        <p className="lead my-4">A high school student with interests in mathematics, science, computer science, game development, and cooking.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Button buttonname="Projects" buttonlink="projects" />
                            <Button buttonname="Technologies" buttonlink="technologies" />
                            <Button buttonname="Achievements" buttonlink="achievements" />
                        </div>
                        <div className="col-sm">
                            <Button buttonname="Work &amp; Volunteering" buttonlink="work" />
                            <Button buttonname="Hobbies" buttonlink="hobbies" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;