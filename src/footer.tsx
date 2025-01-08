import BootstrapImage from './assets/images/bootstrap.png'
import ReactImage from './assets/images/react.png'

export default function Footer() {

    return (
        <footer className="footer bg-1 text-light fs-6 center">
            <div>
                Website Created by: Khian Victory D. Calderon<br/>
                Contact Me: <a href="mailto:khianpublicmail@gmail.com">khianpublicmail@gmail.com</a> | <a href="https://x.com/KhianVictory">Twitter</a> | <a href="https://www.instagram.com/khiandelapena/">Instagram</a> | <a href="https://www.youtube.com/channel/UCC3cm-VxeUZWJ726fcHq2XA">YouTube</a>
                <br/>
                Lucena City, Quezon, Luzon, Philippines | ZIP Code: 4301
                <br/>
                <br/>
                Made in React
                <img alt="React Logo" className="small-image" src={ReactImage}/>
                + Bootstrap
                <img alt="Bootstrap Logo" className="small-image" src={BootstrapImage}/>
                <hr/>
                All rights reserved © 2024
            </div>
        </footer>
    )
}