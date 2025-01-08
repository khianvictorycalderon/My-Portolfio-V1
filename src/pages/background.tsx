import CompletionCertificate from '../assets/images/Completion_Certification.jpg'
import DeanListCertificate from '../assets/images/Dean_List_Certificate.jpg'
import WithHonorCertificate from '../assets/images/With_Honor_Certificate.jpg'

export default function Background() {
    const currentDate = new Date();
    const targetDate = new Date('2024-08-05');
    const enrollmentCondition = currentDate.getTime() === targetDate.getTime()
    ? "Class is starting today August 5, 2024"
    : currentDate >= targetDate
    ? "Since August 5, 2024"
    : "Classes will start on August 5, 2024";
    return (
        <div className="personal-background p-4 text-light fs-4">
            <h1>My Background:</h1>
            <hr/>
            <h2>Personal Info:</h2>
            <ul>
                <li>Birth Date: September 29, 2004</li>
                <li>Based Location: Lucena City, Philippines</li>
            </ul>
            <hr/>
            <h2>My Educational Background:</h2>
            <ul>
                <br/>
                <li>
                    <a href="https://dll.edu.ph/about-page">Dalubhasaan ng Lungsod ng Lucena</a>
                    <ul>
                        <li>Bachelor of Science in Information Technology</li>
                        <li>City Hall Annex Compound, Isabang, Lucena Quezon Philippines</li>
                        <li>{enrollmentCondition}</li>
                    </ul>
                </li>
                <br/>
                <li>
                    <a href="https://www.slsu.edu.ph/slsu-lucena/">Southern Luzon State University Lucena</a>
                    <ul>
                        <li>Bachelor in Industrial Technology</li>
                        <li>Barangay Ibabang Dupay Lucena City 4301 Quezon Philippines</li>
                        <li>1st semester only, September 4, 2023 - January 19, 2024</li>
                    </ul>
                </li>
                <br/>
                <li>
                    <a href="https://www.facebook.com/ARKLucena">ARK Technological Institute Education System Incorporated</a>
                    <ul>
                        <li>Information Communication Technology</li>
                        <li>Magallanes Cor, Granja St, Lucena, 4301 Quezon Philippines</li>
                        <li>Senior High, Graduated at July 13, 2023</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h2>Academic Achievements:</h2>
            <div className="center">
                <img alt="Khian's Dean's List Certificate" src={DeanListCertificate} className="certificate-images"/>
                <img alt="Khian's With Honor Certificate of ARK" src={WithHonorCertificate} className="certificate-images"/>
                <img alt="Khian's Certificate of Work Immersion Completion" src={CompletionCertificate} className="certificate-images"/>
            </div>
        </div>
    )
}