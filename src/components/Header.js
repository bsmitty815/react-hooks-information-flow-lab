

function Header({ onDarkModeClick }) {



    return (
        <div className={"App " + (onDarkModeClick ? "dark" : "light")}>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {onDarkModeClick ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header;