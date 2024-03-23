import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-link">
                <div className="hero-body">
                    <p class="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div class="columns">
                        <div class="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things"
                            />
                        </div>
                        <div class="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div class="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri was made by Apple and is being phased out"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;