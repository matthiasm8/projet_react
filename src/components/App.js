const App = () => {
    const [isLoggedIn, setisLoggedIn] = React.useState(false);

    const handleLogin = (username) => {
        localStorage.setItem("user", username);
        setisLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setisLoggedIn(false);
    };

    React.useEffect(() => {
        const userSession = localStorage.getItem("user");
        if (userSession) {
            setisLoggedIn(true);
        }
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <Posts onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};
