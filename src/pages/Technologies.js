import Technology from "../components/Technology";
import rust from "../media/Rust.png";
import julia from "../media/Julia.png";
import csharp from "../media/C#.png";
import python from "../media/python.png";
import cpp from "../media/C++.png";
import html from "../media/htmlcssjs.png";

function Technologies() {
    return (
        <div id="technologies" className="main">
            <h1 className="display-2">Technologies</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Rust" imageTitle="Image Credit: Mozilla Foundation/Rust Foundation, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons" description="Learned Rust throughout the COVID-19 pandemic. Actively developing Helper CLI with Rust." imagelink={rust} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Julia" imageTitle="Image Credit: Wikipedia.org" description="Currently learning Julia to explore AI/ML." imagelink={julia} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="C++" imageTitle="Jeremy Kratz, Public domain, via Wikimedia Commons" description="Used for competitive programming in the CEMC Canadian Computing Contest." imagelink={cpp} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="C#" imageTitle="Image Credit: Andres15alvarez, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" description="Learned throughout the ICS3U and ICS4U courses. Also used to develop vision therapy software for the Oakville Centre for Vision." imagelink={csharp} />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Python" imageTitle="™/®Python Software Foundation, GPL <http://www.gnu.org/licenses/gpl.html>, via Wikimedia Commons" description="Recently used to develop PROtectABot for Hack Against Hate. Worked with Tensorflow, Discord.py, GPIO." imagelink={python} />                        
                    </div>
                    <div className="col-sm">
                        <Technology protitle="HTML/CSS/JS" imageTitle="Image Credit: daPhyre, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons" description="Used throughout various hackathon projects, including Songbird, Consensus, and Potluck. Used Bootstrap and Tailwind frameworks for CSS." imagelink={html} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;