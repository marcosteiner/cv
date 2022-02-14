import logo from "../../logo.svg";

function Content() {
    return (
        <div className="content">
            <div className="title">
                <h1>Marco Steiner</h1>
                <h3>Software Engineer</h3>
            </div>

            <div className="about">
                <h3>About</h3>
                Just a very curios engineer interested in finding out how the world works and wanting to be useful.
            </div>

            <div className="education">
                <h3>Education</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Now</td>
                        <td>MSc BA New Business</td>
                        <td>Chur</td>
                    </tr>
                    <tr>
                        <td>Sep 18</td>
                        <td>BSc FHO in Compuer Science</td>
                        <td>Rapperswil</td>
                    </tr>
                    <tr>
                        <td>Aug 14</td>
                        <td>Informatiker Systemtechnik EFZ</td>
                        <td>Uster/Wetzikon</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="timeline">
                <h3>Timeline</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Now</td>
                        <td>MSc BA New Business</td>
                        <td>Chur</td>
                    </tr>
                    <tr>
                        <td>Sep 18</td>
                        <td>BSc FHO in Compuer Science</td>
                        <td>Rapperswil</td>
                    </tr>
                    <tr>
                        <td>Aug 14</td>
                        <td>Informatiker Systemtechnik EFZ</td>
                        <td>Uster/Wetzikon</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="projects">
                <h3>Projects</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Now</td>
                        <td>MSc BA New Business</td>
                        <td>Chur</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;