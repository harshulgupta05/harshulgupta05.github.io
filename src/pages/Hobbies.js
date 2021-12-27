import Technology from "../components/Technology";
import onion from "../media/onion.jpg";
import sleep from "../media/sleep.jpg";
import pi from "../media/pi.jpg";
import cookies from "../media/cookies.jpg";

function Hobbies() {
    return (
        <div id="hobbies" className="main">
            <h1 className="display-2">Hobbies</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Technology protitle="Circuitry with Raspberry Pi" description="I actively work with circuitry with my Raspberry Pi." imagelink={pi} imageTitle="Miiicihiaieil  Hieinizilieir / Wikimedia Commons" />
                    </div>
                    <div className="col-sm">
                        <Technology protitle="Cooking" description="I enjoy cooking and developing new recipes, some of which have been published in Modern Mississauga." imagelink={cookies} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;