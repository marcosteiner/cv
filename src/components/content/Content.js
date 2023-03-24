import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

function Title() {
    return <div className="title">
        <h1>Marco Steiner</h1>
        <h4>Software Engineer</h4>
    </div>;
}

function Footer() {
    return (
        <div className="footer">
            <p>This resume was created with React. Check out the code at: </p>
            <a href="https://github.com/marcosteiner/cv">https://github.com/marcosteiner/cv</a>
        </div>
    )
}

function BulletPoints(items) {
    const listItems = items.map((i) =>
        <ul>
            <li>{i}</li>
        </ul>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}

function ContentList(title, items) {
    const listItems = items.map((i) =>
        <div>
            <div>{i.time}</div>
            <div className="timeLine">
                <div>{i.title}</div>
                <div>{i.description}</div>
                {i.bulletpoints && i.bulletpoints.length && BulletPoints(i.bulletpoints)}
            </div>
            <div>
                <FontAwesomeIcon icon={faLocationDot}/>
                {i.location}
            </div>
        </div>
    );
    return (
        <div className="content-list">
            <h3>{title}</h3>
            <div>{listItems}</div>
        </div>
    );
}

function Content() {
    const education = [
        {
            time: "Sep 18",
            title: "BSc in Computer Science",
            description: "HSR University of Applied Sciences Rapperswil",
            bulletpoints: ["Average: 4.8", "Thesis: 6.0"],
            location: "Rapperswil"
        },
        {
            time: "Aug 14",
            title: "Informatiker Systemtechnik EFZ",
            description: "Reichle & De Massari AG",
            bulletpoints: ["Average: 4.7"],
            location: "Wetzikon"
        },
    ];

    const timeline = [
        {
            time: "Now",
            title: "Working Student",
            description: "60% part-time software engineer at Healthinal GmbH and student at FHGR",
            location: "Chur"
        },
        {
            time: "May 22",
            title: "Student",
            description: "MSc BA New Business at FHGR University of Applied Sciences of the Grisons",
            location: "Chur"
        },
        {
            time: "Sep 21",
            title: "Student",
            description: "Preparation for admission examination to the Master of Busness Administration and military repetition course.",
            location: "Uznach"
        },
        {time: "Mar 21", title: "Software Engineer", description: "Hostpoint AG", location: "Rapperswil"},
        {
            time: "Jun 19",
            title: "Sabbatical",
            description: "Took a semester off to work on myself, read books, think and fix stuff (including military service). Then started applying for jobs.",
            location: "Uznach"
        },
        {
            time: "Sep 18",
            title: "Student",
            description: "HSR University of Applied Sciences Rapperswil",
            location: "Rapperswil"
        },
        {time: "Aug 15", title: "Military Service", description: "Swiss Armed Forces", location: "Lyss"},
        {time: "Feb 15", title: "ICT Technician", description: "Reichle & De Massari AG", location: "Wetzikon"},
        {time: "Aug 14", title: "Apprentice", description: "Reichle & De Massari AG", location: "Wetzikon"},
    ];

    const projects = [
        {
            time: "2020",
            title: "Sodiso",
            description: "Socially distant socialising",
            bulletpoints: ["Worked with friends on a small React app to connect people during the pandemic.", "Kind of like clubhouse before it became popular, just not as sophisticated.", "Url: app.sodiso.ch"],
            location: "Uznach"
        },
        {
            time: "2018",
            title: "Bachlor Thesis",
            description: "HSR University of Applied Sciences Rapperswil",
            bulletpoints: ["Wrote a VM to enable smart contract execution in the Bazoblockchain.", "Learned a lot about VMs, blockchains, golang and Ethereum."],
            location: "Rapperswil"
        },
        {
            time: "2017",
            title: "Study Project",
            description: "HSR University of Applied Sciences Rapperswil",
            bulletpoints: ["Worked on the front end of a customer service portal created with Angular."],
            location: "Rapperswil"
        }
    ];

    return (
        <div className="content">
            {Title()}
            {ContentList("Education", education)}
            {ContentList("Timeline", timeline)}
            {ContentList("Projects", projects)}
            {Footer()}
        </div>
    );
}

export default Content;