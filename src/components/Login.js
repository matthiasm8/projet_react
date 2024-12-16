const Login = ({ onLogin }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(username);
        } else {
            alert("Veuillez remplir tous les champs !");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
                    Connexion
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        Nom d'utilisateur :
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Entrez votre nom d'utilisateur"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Mot de passe :
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
};
