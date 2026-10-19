
function BlogSidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
          alt="Pencil and artwork"
          className="profile-image"
        />

        <div className="card-content">
          <h3>My Name</h3>
          <p>
            Just me, myself and I, exploring the universe of unknown.
            I have a heart of love and an interest in lorem ipsum and
            mauris neque quam blog. I want to share my world with you.
          </p>
        </div>
      </div>

      <div className="popular-card">
        <h3>Popular Posts</h3>

        <div className="popular-post">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=100&q=80" alt="Nature" />
          <div>
            <h4>Lorem</h4>
            <p>Sed mattis nunc</p>
          </div>
        </div>

        <div className="popular-post">
          <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=100&q=80" alt="Landscape" />
          <div>
            <h4>Ipsum</h4>
            <p>Praes tinci sed</p>
          </div>
        </div>

        <div className="popular-post">
          <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=100&q=80" alt="Mountains" />
          <div>
            <h4>Dorum</h4>
            <p>Ultricies congue</p>
          </div>
        </div>

        <div className="popular-post">
          <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=100&q=80" alt="Sunrise" />
          <div>
            <h4>Mingsum</h4>
            <p>Lorem ipsum dipsum</p>
          </div>
        </div>
      </div>

      <div className="tags-card">
        <h3>Tags</h3>
        <div className="tags">
          {['Travel', 'New York', 'London', 'IKEA', 'NORWAY', 'DIY', 'Ideas', 'Baby', 'Family', 'News', 'Clothing', 'Shopping', 'Sports', 'Games'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default BlogSidebar
