import Technology from "../components/Technology";
import cemc from "../media/cemc.png";
import ap from "../media/ap.png";
import kaggle from "../media/kaggle.png";
import pico from "../media/pico.png";
import hah from "../media/hah.png";
import stan from "../media/stan.png";

function Achievements() {
    return (
        <div id="achievements" className="main">
            <h1 className="display-2">Achievements/Certifications</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Centre for Education in Mathematics and Computing" imageTitle="Credit: UWaterloo" imagelink={cemc} description="School champion for Fryer, Hypatia Contest. Received certificates of distinction for 2021 CCC Junior, Fryer, Pascal, and Cayley Contests." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="AP College Board" imageTitle="Credit: Original:College BoardVector: WClarke, Public domain, via Wikimedia Commons" imagelink={ap} description="Received AP Scholar Award. Received 5 in AP Calculus BC Exam. Received 4 in AP Chemistry and AP Physics 1 Exams." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Kaggle" imageTitle="Credit: Databuff, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons" imagelink={kaggle} description="Completed courses on Machine Learning, Deep Learning, and Neural Networks. Worked with Tensorflow and scikit-learn." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="picoCTF" imageTitle="Credit: picoCTF.org" imagelink={pico} description="Achieved 3rd nationally and 8th internationally in CanHack Cybersecurity Challenge." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Hack Against Hate" imageTitle="Credit: Ryerson DMZ" imagelink={hah} description="WINNER at Hack Against Hate with PROtectABot." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Introduction to Mathematical Thinking" imageTitle="Credit: Stanford University, Public domain, via Wikimedia Commons" imagelink={stan} description="Completed MOOC course on Coursera." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;