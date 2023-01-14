export default function NavbarUser() {
    return (
        <section className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <a href="/"><h1 className="logo">CINEMAGIC</h1></a>
                </div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list-item"><a href="/">Página Inicial</a></li>
                        <li className="menu-list-item"><a href="/movies/userView">Filmes</a></li>
                        <li className="menu-list-item"><a href="/products">Produtos</a></li>
                        <li className="menu-list-item"><a href="movies">Sessões</a></li>
                        <li className="menu-list-item"><a href="movies">Membro</a></li>
                        <li className="profile-container"><a href="login"><div className="profile-picture"></div>Login</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}