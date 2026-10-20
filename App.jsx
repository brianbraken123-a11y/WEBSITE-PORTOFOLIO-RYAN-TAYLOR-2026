import ProductCard from './components/ProductCard.jsx'
import { activeProducts } from './data/products.js'

function Sparkle() {
  return <span className="sparkle" aria-hidden="true">✳</span>
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Ilustrasi koleksi pilihan Fira" role="img">
      <div className="art-orbit art-orbit-one" />
      <div className="art-orbit art-orbit-two" />
      <div className="art-sun" />
      <div className="art-petal petal-one" />
      <div className="art-petal petal-two" />
      <div className="art-petal petal-three" />
      <div className="art-center"><Sparkle /></div>
      <div className="art-note"><span>FIRA'S EDIT</span><strong>picked for you</strong></div>
      <span className="art-caption">A LITTLE JOY, EVERY DAY</span>
    </div>
  )
}

export default function App() {
  return (
    <main className="page-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Fira Collection, beranda">fira<span>.</span></a>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a href="#koleksi">Koleksi</a>
          <a href="#promo">Promo</a>
        </nav>
        <a className="header-cta" href="#koleksi">Jelajahi <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkle /> THE FIRA EDIT</p>
          <h1 id="page-title">Hal kecil,<br />rasa <span>istimewa.</span></h1>
          <p className="intro-copy">Temukan pilihan yang bikin hari terasa lebih menyenangkan. Dikurasi dengan sepenuh hati, khusus buat kamu.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#koleksi">Temukan favoritmu <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#promo">Lihat promo <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-footnote"><span className="tiny-heart">♥</span> Temukan sesuatu yang kamu suka hari ini</div>
        </div>
        <HeroArtwork />
      </section>

      <section className="promo-banner" id="promo" aria-labelledby="promo-title">
        <div className="promo-copy">
          <span className="promo-kicker">PROMO CONTOH · GANTI SEBELUM PUBLISH</span>
          <h2 id="promo-title">Sedikit kejutan<br className="promo-break" /> buat kamu.</h2>
          <p>Contoh penawaran: diskon 20% untuk pilihan favorit. Sesuaikan detail dan syarat promo dengan penawaran aslimu.</p>
        </div>
        <div className="promo-action">
          <div className="discount"><strong>20%</strong><span>OFF</span></div>
          <a className="button button-light" href="#koleksi">Lihat koleksi <span aria-hidden="true">↗</span></a>
        </div>
        <span className="promo-decoration" aria-hidden="true">✳</span>
      </section>

      <section className="catalog" id="koleksi" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PILIHAN FIRA</p>
            <h2 id="catalog-title">Koleksi pilihan</h2>
          </div>
          <span className="item-count">{String(activeProducts.length).padStart(2, '0')} ITEMS</span>
        </div>
        {activeProducts.length > 0 ? (
          <div className="product-grid">
            {activeProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon"><Sparkle /></div>
            <h3>Koleksi sedang disiapkan</h3>
            <p>Produk pilihan dan tautan affiliate asli akan ditambahkan di sini.</p>
          </div>
        )}
      </section>

      <footer className="site-footer">
        <a className="footer-mark" href="#top">fira<span>.</span></a>
        <span>Made with care <span className="heart">♥</span></span>
      </footer>
    </main>
  )
}
