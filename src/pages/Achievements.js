import Technology from "../components/Technology";

function Achievements() {
    return (
        <div id="achievements" className="main">
            <h1 className="display-2">Achievements/Certifications</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Centre for Education in Mathematics and Computing" description="School champion for Fryer, Hypatia Contest. Received certificates of distinction for 2021 CCC Junior, Fryer, Pascal, and Cayley Contests." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="AP College Board" description="Received AP Scholar Award. Received 5 in AP Calculus BC Exam. Received 4 in AP Chemistry and AP Physics 1 Exams." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Kaggle" description="Completed courses on Machine Learning, Deep Learning, and Neural Networks. Worked with Tensorflow and scikit-learn." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="picoCTF" description="Achieved 3rd nationally and 8th internationally in CanHack Cybersecurity Challenge." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Hack Against Hate" description="WINNER at Hack Against Hate with PROtectABot." />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Introduction to Mathematical Thinking" description="Completed MOOC course on Coursera." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;