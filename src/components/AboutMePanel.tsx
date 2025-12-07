import './CenteredPanel.css';

export function AboutMePanel() {
    return (
        <div className="centered-panel experience-panel">
            <div className="exp-card exp-card--header">
                <h2 className="exp-position">About me</h2>
                <p className="exp-company-dates">
                    Full Stack Developer · Problem-solver at heart
                </p>
                <p className="exp-company-dates">
                    <strong>Languages:</strong> Portuguese (Native), English (Professional)
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">Who am I?</h3>

                <p className="exp-text">
                    Hello everyone, my name is Mauro. I'm currently working as a Full Stack Developer,
                    which I enjoy a lot. Since I was young I've loved challenges, puzzles and
                    logic-solving problems, so it often feels like I'm working on a hobby for a living.
                </p>

                <p className="exp-text">
                    I'm very enthusiastic about everything I do, and I can't help but keep
                    improving myself over and over. This website, for example, exists because I wanted
                    to learn React — so, here we are.
                </p>

                <p className="exp-text">
                    I consider myself a nice person, funny, and a real friend to my friends. At the
                    workplace, I prefer to be part of a team with that same spirit — a group that moves
                    forward together, supports each other, and motivates everyone around to be the best
                    version of themselves.
                </p>
            </div>

            <div className="exp-card">
                <h3 className="exp-section-title">Hobbies</h3>

                <p className="exp-text">
                    When I'm not working, I'm usually learning something new, just like when
                    I decided I wanted to learn React. I also game a lot, love listening to music, and
                    enjoy watching series and movies with my wife.
                </p>

                <p className="exp-text">
                    If you'd like to know more, feel free to reach out by email or connect with me
                    on LinkedIn — I would be happy to talk.
                </p>
            </div>
        </div>
    );
}
