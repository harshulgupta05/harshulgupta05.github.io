import Project from "../components/Project";
import avatar from "../media/avatar.jpg"
import hand from "../media/hand-help-other.jpg"
import songbird from "../media/songbird.jpg";
import potluck from "../media/potluck.jpg";
import consensus from "../media/consensus.jpg";
import snake from "../media/snake.png";

function Projects() {
    return (
        <div id="projects" className="main">
            <h1 className="display-2 mt-6 m-4">Projects</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Project protitle="PROtectABot" description="WINNER at Hack Against Hate 2021. A Discord bot created to actively combat hate in Discord servers." link="https://github.com/harshulgupta05/PROtectABot4000" imagelink={avatar} />
                    </div>
                    <div className="col-sm">
                        <Project protitle="HelperCLI" imagetitle="Image Credit: publicdomainpictures.net" description="A CLI built in Rust to help students keep track of assignments, tests, and other events throughout the school year." link="https://github.com/harshulgupta05/helper-cli" imagelink={hand} />
                    </div>
                    <div className="col-sm">
                        <Project protitle="Songbird" imagetitle="Image Credit: SabineDeviche, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" description="A web app created for Hack The North 2020++ that creates playlists based on the 'vibe' your Twitter feed gives off." link="https://songbirdweb.herokuapp.com/" imagelink={songbird} />
                    </div>
                    <div className="col-sm">
                        <Project protitle="Potluck" imagetitle="Image Credit: Crisco 1492, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons" description="A social media web app created in a team for XHacks 2021 designed for foodies and cooks to share recipes and food with the world." link="https://arnavgupta03.github.io/potluck/" imagelink={potluck} />
                    </div>
                    <div className="col-sm">
                        <Project protitle="Consensus" imagetitle="Image Credit: Alpha Stock Images - http://alphastockimages.com/ " description="A web app created for EngHack 2021 that helps groups of friends pick a movie to watch based on genre and popularity." link="https://consensus-web.herokuapp.com/" imagelink={consensus} />
                    </div>
                    <div className="col-sm">
                        <Project protitle="Pi Snake" imagetitle="Image Credit: Pixabay.com" description="A snake game built with Pygame controlled with GPIO input from a breadboard connected to a Raspberry Pi 4B. Game code from GeeksforGeeks." link="https://github.com/harshulgupta05/pi-snek" imagelink={snake} />
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Projects;