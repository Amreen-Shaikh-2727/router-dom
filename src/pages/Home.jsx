
import BlogSidebar from '../components/BlogSidebar'

function Home() {
  return (
    <main className="blog-layout">
      <section className="main-posts">
        <article className="post-card">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85"
            alt="Fallen tree branches in a forest"
            className="post-image"
          />

          <div className="post-content">
            <h2>TITLE HEADING</h2>
            <p className="post-meta">Title description, April 7, 2014</p>
            <p className="post-description">
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
              porttitor magna enim, ac accumsan tortor cursus at. Phasellus
              sed ultricies mi non congue ullam corper.
            </p>

            <div className="post-actions">
              <button>READ MORE »</button>
              <span>Comments <b>0</b></span>
            </div>
          </div>
        </article>
      </section>

      <BlogSidebar />
    </main>
  )
}

export default Home
