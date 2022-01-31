import Technology from "../components/Technology";
import cemc from "../media/cemc.png";
import ap from "../media/ap.png";
import kaggle from "../media/kaggle.png";
import pico from "../media/pico.png";
import hah from "../media/hah.png";
import stan from "../media/stan.png";
import Project from "../components/Project";

function Achievements() {
    return (
        <div id="achievements" className="main">
            <h1 className="display-2">Achievements/Certifications</h1>
            <div className="container">
                <div className="row">
                    {/* <div className="col-sm">
                        <Technology protitle="Centre for Education in Mathematics and Computing" imageTitle="Credit: UWaterloo" imagelink={cemc} description="Received certificates of distinction for 2021 CCC Junior, Fryer, Pascal, and Cayley Contests. School champion for Fryer, Hypatia Contest." />
                    </div> */}
                    <div className="container card my-2">
                        <div className="row">
                            <div className="col">
                                <img style={{width: "18rem", height: "10rem"}} className="img-fluid m-2" alt="For project" src={cemc} title='Credit: UWaterloo' />
                                <h3 className="m-2">Centre for Education in Mathematics and Computing</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="lead" style={{color: "blue"}}>Received Certificates of Distinction in 2021 CCC Junior, Fryer, Pascal, and Cayley Contests.</p><p className="lead" style={{color: "black"}}> School champion for Fryer, Hypatia Contest.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Technology protitle="AP College Board" imageTitle="Credit: Original:College BoardVector: WClarke, Public domain, via Wikimedia Commons" imagelink={ap} description="Received AP Scholar Award. Received 5 in AP Calculus BC Exam. Received 4 in AP Chemistry and AP Physics 1 Exams." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Kaggle" imageTitle="Credit: Databuff, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" imagelink={kaggle} description="Completed courses on Machine Learning, Deep Learning, and Neural Networks. Worked with Tensorflow and scikit-learn." />
                    </div>
                {/* </div>
                <div className="row"> */}
                    <div className="col-sm">
                        <Technology protitle="picoCTF" imageTitle="Credit: picoCTF.org" imagelink={pico} description="Achieved 3rd nationally and 8th internationally in CanHack Cybersecurity Challenge." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Hack Against Hate" imageTitle="Credit: Ryerson DMZ" imagelink={hah} description="WINNER at Hack Against Hate with PROtectABot." />
                    </div>
                    <div className="col-sm">
                        <Project protitle="Introduction to Mathematical Thinking" imageTitle="Credit: Stanford University, Public domain, via Wikimedia Commons" link="https://coursera.org/share/8e53c709008960b800135fabea389e49" imagelink={stan} description="Completed MOOC course on Coursera." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;