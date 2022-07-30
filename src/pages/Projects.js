import navIcon1 from '../assets/Group 379.svg';

export default function Projects() {
    const Project = [
        {
            title: "Yelp Clone",
            tech: "POSTGRES EXPRESS REACT NODE.js",
            github: "https://github.com/fonuxxine/yelp-clone",
            website: "link",
            description: "A simplified Yelp web app that take in data on over 500,000 Yelp businesses, reviews, users and store them in a PSQL database."
        },
        {
            title: "WhatsApp Chat Analyzer",
            tech: "PYTHON REACT.js",
            github: "https://github.com/fonuxxine/chat-analyzer",
            website: "link",
            description: "A message analyzer that utilizes sentiment analysis and data visualization to present different patterns in how the user communicate with others through texting."
        },
        {
            title: "Metadata Scraper - Scholars Portal",
            tech: "PYTHON BEAUTIFULSOUP SQL",
            github: "link",
            website: "link",
            description: "A standard metadata scraper that analyze records data from any publishers' websites and keep track of records in a database."
        },
        {
            title: "ReCoV2-gether ",
            tech: "DART JAVASCRIPT HTML",
            github: "https://github.com/AnnaTLai/ReCoV-2gether",
            website: "link",
            description: "	An Android and iOS app that provides current COVID-19 status in the UofT neighbourhood, mental health support as well as articles, podcasts where students, teachers and staff members share their stories and regain a sense of belonging."
        },
        {
            title: "Sorting Visualizer",
            tech: "JAVASCRIPT REACT.js",
            github: "https://github.com/fonuxxine/sorting-visualizer",
            website: "link",
            description: "A React/ Redux visualizing application of different sorting algorithm, including Merge Sort, Quick Sort, etc. on customized sets of data."
        }
    ];
    return (<div className="uni-grid project">
            <h2 className='uni-size'>Projects</h2>
            {
                Project.map((proj, index) => {
                    return (
                        <ProjectCard key={index}{...proj}/>
                    )
                })
            }
        </div>)
}

const ProjectCard = ({ title, tech, github, website, description }) => {
    return (
        <div className="card">
            <div className="pos-title">
                <div className="pos-content">
                    <span className="material-symbols-outlined" id="play-arrow">
                        play_arrow
                    </span>
                    <div>
                        <div className='p-title'>
                            <h3>{title}</h3>
                            <a href={github} target="blank">
                                <i class='fa fa-github-alt'></i>
                            </a>
                            <a href={website}>
                                <i class='fa fa-link'></i>
                            </a>
                        </div>
                        <h4 className="line tech">{tech}</h4>
                    </div>
                </div>
                <span className="material-symbols-outlined" id="heart">
                    favorite
                </span>
            </div>
            <div className="pos-des">
                <p>{description}</p>
            </div>
        </div>
    )
}