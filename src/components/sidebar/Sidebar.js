import photo from './photo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faReact,
    faJava,
    faPython,
    faLinux,
    faMicrosoft,
    faAngular,
    faAudible
} from '@fortawesome/free-brands-svg-icons';
import {
    faPhone,
    faEnvelope,
    faDatabase,
    faCode,
    faBoxArchive,
    faTree,
    faDumbbell, faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb} from "@fortawesome/free-regular-svg-icons";

function element(icon, text) {
    return (
        <div>
            <FontAwesomeIcon icon={icon}/>
            <div>{text}</div>
        </div>
    )
}

function sidebarList(title, items) {
    const listItems = items.map((i) =>
        element(i.icon, i.text)
    );
    return (
        <div className="sidebar-list">
            <h3>{title}</h3>
            {listItems}
        </div>
    );
}

function Sidebar() {
    const contactInfo = [
        {icon: faEnvelope, text: "marco.steiner@windowslive.com"},
        {icon: faGithub, text: "marcosteiner"},
        {icon: faPhone, text: "+41 79 267 74 73"}
    ];

    const workedWith = [
        {icon: faReact, text: "React"},
        {icon: faJava, text: "Java"},
        {icon: faPython, text: "Python"},
        {icon: faDatabase, text: "SQL / PSQL"},
        {icon: faLinux, text: "Linux"},
    ];

    const basicKnowledge = [
        {icon: faCode, text: "C++"},
        {icon: faMicrosoft, text: "C#"},
        {icon: faAngular, text: "Angular"},
        {icon: faCode, text: "Haskell"},
        {icon: faBoxArchive, text: "Etc."}
    ]


    const interests = [
        {icon: faAudible, text: "Audiobooks"},
        {icon: faTree, text: "Sustainability"},
        {icon: faLightbulb, text: "Innovation"},
        {icon: faDumbbell, text: "Fitness"},
        {icon: faUserGroup, text: "Socializing"}
    ]

    return (
        <div className="sidebar">
            <img src={photo} alt={"Marco Steiner"}/>

            {sidebarList("Contact Info", contactInfo)}
            {sidebarList("Worked With", workedWith)}
            {sidebarList("Basic Knowledge", basicKnowledge)}
            {sidebarList("Other Interests", interests)}
        </div>
    );
}

export default Sidebar;