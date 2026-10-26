import './App.css'

function App() {
  return (
    <div className="conteneur-application">
      <header className="en-tete-site">
        <strong className="logo">DevBlog</strong>
        <nav aria-label="Menu principal">
          <ul className="liste-navigation">
            <li><a href="/">Accueil</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="contenu-principal">
        <article className="article-blog">
          <header className="en-tete-article">
            <h1 className="titre-principal">Pourquoi apprendre TypeScript en 2026</h1>
            <p className="infos-publication">
              Publié le <time dateTime="2026-03-03">3 mars 2026</time>
            </p>
          </header>
          
          <div className="corps-article">
            <h2>Un typage qui rassure</h2>
            <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
            
            <h2>Un écosystème mature</h2>
            <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
          </div>

          <footer className="pied-article">
            <button type="button" className="bouton-jaime" onClick={() => alert("Merci pour le like !")}>
              <span aria-hidden="true">👍</span> J'aime cet article
            </button>
          </footer>
        </article>

        <aside className="section-infolettre">
          <h2>Reste informé</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Inscription envoyée'); }}>
            <label htmlFor="email-utilisateur">Ton adresse e-mail</label>
            <input id="email-utilisateur" type="email" placeholder="ton@email.fr" required />
            <button type="submit" className="bouton-inscription">
              S'inscrire
            </button>
          </form>
        </aside>
      </main>

      <footer className="pied-de-page-site">
        <p>© 2026 DevBlog</p>
      </footer>
    </div>
  )
}

export default App