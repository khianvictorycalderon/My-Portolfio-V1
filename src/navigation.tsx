import KhianIcon from './assets/images/Khian_Icon_Logo.png'

interface NavProps {
    onClick:() => void;
}

export default function Navigation({onClick}:NavProps) {
    return (
        <nav className="navigation">
            <span onClick={onClick} className="pointer">☰</span>
            <img className="float-end navigation-logo" src={KhianIcon} />
        </nav>
    )
}