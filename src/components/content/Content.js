import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Title() {
    return <div className="title">
        <h1>Marco Steiner</h1>
        <h3>Software Engineer</h3>
    </div>;
}

function About() {
    return <div className="about">
        <h3>About</h3>
        Just a very curios engineer interested in finding out how the world works and wanting to be useful.
    </div>;
}

function ContentList(title , items) {
    const listItems = items.map((i) =>
        <div>
            <div>{i.time}</div>
            <div className="timeLine">
                <div>{i.title}</div>
                <div>{i.description}</div>
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
        {time:"Now", title:"MSc BA New Business", description:"Chur", location: "Chur"},
        {time:"Now", title:"MSc BA New Business", description:"Chur", location: "Chur"},
        {time:"Now", title:"MSc BA New Business", description:"Chur", location: "Chur"},
        {time:"Now", title:"MSc BA New Business", description:"Chur", location: "Chur"},
    ]

    return (
        <div className="content">
            {Title()}
            {About()}
            {ContentList("Education", education)}
            {ContentList("Timeline", education)}
            {ContentList("Projects", education)}
        </div>
    );
}

export default Content;