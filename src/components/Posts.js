const Posts = ({ onLogout }) => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => alert("Erreur lors du chargement des données."));
    }, []);

    return (
        <div className="bg-orange-50 min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Liste des Posts</h1>
                <button onClick={onLogout} className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700">
                    Déconnexion
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-600">Chargement des posts...</p>
            ) : (
                <ul className="grid grid-cols-1 gap-6">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="bg-white shadow-lg rounded-lg p-4"
                        >
                            <h3 className="text-lg font-semibold text-orange-600">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
