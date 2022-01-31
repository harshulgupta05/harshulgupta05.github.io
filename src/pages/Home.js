//import react from "react";
import me from "../media/me.jpg"
// import Button from "../components/Button";
// import github from "../media/github.png";
// import '../styles/homepage.css';

function Home() {
    return (
        <div>
            <div className="container my-4 main" id="home">            
                <div className="row">
                    <div className="col-sm-4 my-4">
                        <img src={me} className="img-fluid" alt="Harshul"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <h1 className="display-1 my-2"><strong>Harshul Gupta</strong></h1>
                            <h4 className="lead my-4 mx-2"><strong>A high school student and <b>Schulich Leader Nominee</b> passionate about learning math and coding with achievements in picoCTF CanHack and Hack Against Hate.</strong></h4>
                            <p>Alongside school, I am actively working on many side projects with languages such as Rust, C++, Java, and more. I am always looking for hackathons or developer conferences to participate in, most recently with the picoMINI hackathon and Hack Against Hate, where I was featured in an <a href="https://www.itworldcanada.com/article/mississauga-teens-win-dmz-hack-against-hate-hackathon/467589">article</a> by ITWorld Canada and received a mention from the Mayor of Mississauga. I am also actively learning and developing my skills through self-learning with Coursera, edX, Kaggle, and my Raspberry Pi lab.</p>
                        </div>
                        <div className="row">
                            <h3>
                                <a href="https://github.com/harshulgupta05"><i className="fab fa-github fa-2x m-2"></i></a>
                                <a href="https://www.linkedin.com/in/harshulg05/"><i className="fab fa-linkedin fa-2x m-2"></i></a>
                                {/* <i class="fab fa-microsoft fa-2x m-2"></i> */}
                            </h3>
                        </div>
                        {/* <div className="row">
                            <div className="col-sm">
                                <Button buttonname="Projects" buttonlink="projects" />
                                <Button buttonname="Technologies" buttonlink="technologies" />
                                <Button buttonname="Achievements" buttonlink="achievements" />
                            </div>
                            <div className="col-sm">
                                <Button buttonname="Work &amp; Volunteering" buttonlink="work" />
                                <Button buttonname="Hobbies" buttonlink="hobbies" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;