interface MenuProps {
    style: {};
    onClick: () => void;
    setPage: (pageName: string) => void;
}

export default function Menu({ style, onClick, setPage }: MenuProps) {
    const MenuList = [
        { name: "Home", query: "home" },
        { name: "My Background", query: "background" },
        { name: "Development Tools", query: "devtools" },
        { name: "Goals and Vision", query: "goalsvision" },
        { name: "Privacy Policy", query: "privacypolicy" },
        { name: "Terms And Conditions", query: "termsandconditions" },
    ];

    function scrollUp() {
        window.scrollTo(0, 0);
    }

    function handleMenuClick(query: string) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', query);
        window.history.pushState({}, '', url.toString());
        setPage(query);  // Ensure the page state is updated
    }

    return (
        <div style={style} id="fixed-menu">
            <button onClick={onClick} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
            <hr />
            <ul className="list-group center">
                {MenuList.map(item => (
                    <li
                        key={item.query}
                        onClick={() => { handleMenuClick(item.query); onClick(); scrollUp(); }}
                        className="list-group-item remove-design no-bg text-light menu-light pointer"
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
