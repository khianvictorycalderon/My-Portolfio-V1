import ProfilePic from '../assets/images/khian.jpg'

export default function Home() {
    const hasRating = false;
    const hasCommissions = false;
    const inquire = () => {
        let link = "https://docs.google.com/forms/d/e/1FAIpQLSeaauh5eZwcYJzZA3eqBTGE0GpoYpmKGge6nTeaQMdnfXrnUg/viewform";
        window.location.href = link;
    }
    return (
        <div className="home-page text-light">
            <div className="eiW box-2x">
                <div className="center">
                    <img alt="Khian's Formal Picture" src={ProfilePic} className="profilePic"></img>
                </div>
                <div className="center center-v freelancer-inquire">
                    <h1>Hi, I'm Khian Victory D. Calderon</h1>
                    <hr/>
                    <h3>I'm a Freelancer</h3>
                    <button className="btn btn-primary" onClick={inquire}>INQUIRE NOW!</button>
                </div>
            </div>
            <div className="m-4 p-4 bg-1 home-desc card">
                <span className="fs-4">I am a part-time freelancer studying softwares and interested in accepting web development and designing projects, specifically focused on either front-end or back-end website or both.</span>
            </div>
            <div className="my-skills p-4">
                <h2>My Skills & Expertise:</h2>
                <div className="box-2x fs-4">
                    <div className="center card">
                    <h4>Front-End Website Developer Designer:</h4>
                        <ul className="left">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery (JavaScript Library)</li>
                            <li>React (JavaScript Library) + Bootstrap (CSS Framework)</li>
                        </ul>
                    </div>
                    <div className="center card">
                    <h4>Back-End Website / Web System Developer:</h4>
                    <ul className="left">
                        <li>PHP (HyperText Preprocessor)</li>
                        <li>MySQL (Relational Database Management System)</li>
                    </ul>
                    </div>
                    <div className="center card">
                    <h4>Game Developer Publisher:</h4>
                        <ul className="left">
                            <li>Unity 2D</li>
                            <li>C# (C Sharp Unity)</li>
                        </ul>
                    </div>
                    <div className="center card">
                    <h4>Programmer:</h4>
                    <ul className="left">
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="my-projects-area p-4">
                <h2>My Front-End Demo Projects:</h2>
                <div className="box-2x fs-4">
                    <div className="card">
                        <b>KV Chat Bot</b>
                        <ul>
                            <li>Personal Website Project</li>
                            <li>A chatbot I developed for entertainment purposes. It was built with React and Bootstrap and generates responses without relying on external APIs. The chatbot primarily uses Tagalog.</li>
                            <li>Visit <a href="https://kvchatbot.github.io/">HERE</a>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Article Story</b>
                        <ul>
                            <li>Web Page Showcase</li>
                            <li>My first react project with different articles and stories.</li>
                            <li>Visit <a href="https://articlestory.netlify.app/">HERE</a>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Sample Portfolio</b>
                        <ul>
                            <li>Web Page Showcase</li>
                            <li>A preset different style designs of sample online portfolio.</li>
                            <li>Visit <a href="https://sampleportfoliostyles.netlify.app/">HERE</a>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Task Management System</b>
                        <ul>
                            <li>Utility Web Page Showcase</li>
                            <li>A system designed to handle completed and pending tasks.</li>
                            <li>Visit <a href="https://khianvictorycalderon.github.io/taskmanagementsystem/">HERE</a>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Base Conversion Calculator</b>
                        <ul>
                            <li>Utility Web Page Showcase</li>
                            <li>A calculator for converting decimal, binary, octal, and hexadecimal number system.</li>
                            <li>Visit <a href="https://khianvictorycalderon.github.io/baseconversion/">HERE</a>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Eleven Crush Tips</b>
                        <ul>
                            <li>Experimental Group Project Website</li>
                            <li>A group project in work immersion during my senior high. A sample experimental website article that talks about love.</li>
                            <li>Visit <a href="https://elevencrushtips.github.io/">HERE</a>.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-projects-area p-4">
                <h2>My Back-End Experimental Projects:</h2>
                <div className="box-2x fs-4">
                    <div className="card">
                        <b>Register & Login System</b>
                        <br/>
                        <video width="auto" controls className="project-video">
                            <source src="videos/register_login_system_php_mysql.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <br/>
                        <ul>
                            <li>System Experimental Project</li>
                            <li>A system i made to demonstrate the basic use of CRUD (Create, Read, Update, Delete). I used HTML, Bootstrap, PHP, and MySQL.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-projects-area p-4">
                <h2>My Personal Game Dev Projects:</h2>
                <div className="card center">
                    <h4>My game projects are listed <a href="https://play.google.com/store/apps/dev?id=8802883066766516601">HERE</a></h4>
                </div>
            </div>
            {hasCommissions && <PublicCommisionProjects/>}
            {hasRating && <RatingAndReviews/>}
        </div>
    )
}

function PublicCommisionProjects() {
    const publicprojects = [
        {
            name: "Project Name",
            by: "Who Commissioned This Project?",
            desc: "Types of Project",
            url: ""
        }
    ];
    return (
        <div className="my-work-projects-area p-4">
            <h2>Published Commission Projects:</h2>
            <div className="box-2x fs-4">
            {publicprojects.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <b>{item.name}</b>
                        <ul>
                            <li>Commissioned by: {item.by}</li>
                            <li>{item.desc}</li>
                            <li>Visit <a href={item.url}>HERE</a></li>
                        </ul>
                    </div>
                );
            })}
            </div>
        </div>
    );
}


function RatingAndReviews() {
    const ratingsreviews = [
        {
            name: "Name",
            rating: 1,
            socmed: "#",
            location: "Based Location",
            review: "Comment or Feedback. This is just a placeholder."
        }
    ];

    return (
        <div className="rating-and-reviews p-4">
            <h2>Ratings And Reviews:</h2>
            <div className="box-1x">
                {ratingsreviews.map((item, index) => {
                    let ratingStars;
                    switch (item.rating) {
                        case 1:
                            ratingStars = "⭐";
                            break;
                        case 2:
                            ratingStars = "⭐⭐";
                            break;
                        case 3:
                            ratingStars = "⭐⭐⭐";
                            break;
                        case 4:
                            ratingStars = "⭐⭐⭐⭐";
                            break;
                        case 5:
                            ratingStars = "⭐⭐⭐⭐⭐";
                            break;
                        default:
                            ratingStars = "No rating";
                    }

                    return (
                        <div className="card rating-and-review-card" key={index}>
                            <h4>
                                <a href={item.socmed}>{item.name}</a>: {ratingStars}
                            </h4>
                            <h6>{item.location}</h6>
                            <p>{item.review}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/*

Home:

- My Projects
- Testimonials / Reviews

*/