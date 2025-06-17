import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    image: '/images/blog/dummy1.png',
    category: 'AI & Machine Learning',
    title: 'Mengenal Konsep Dasar Machine Learning',
    description: 'Pelajari bagaimana machine learning bekerja dan mengapa ia menjadi bagian penting dalam perkembangan teknologi modern.',
    link: '/blog/mengenal-konsep-dasar-machine-learning',
  },
  {
    image: '/images/blog/dummy2.png',
    category: 'Web Development',
    title: 'Tren Terbaru dalam Pengembangan Web 2025',
    description: 'Sebuah tinjauan tentang teknologi dan pendekatan terkini dalam pengembangan aplikasi web yang responsif dan dinamis.',
    link: '/blog/tren-terbaru-dalam-pengembangan-web-2025',
  },
  {
    image: '/images/blog/dummy3.png',
    category: 'Cloud Computing',
    title: 'Mengapa Cloud Masih Jadi Pilihan Utama?',
    description: 'Ulasan lengkap tentang keuntungan penggunaan cloud infrastructure dan layanan cloud dalam skala bisnis.',
    link: '/blog/mengapa-cloud-masih-jadi-pilihan-utama',
  },
];

const BlogIndex: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 scrollbar-none relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-[120%] h-[160%] flex items-center justify-center pointer-events-none select-none">
            <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-primary/20 to-secondary/30 blur-3xl rounded-3xl opacity-50"></div>
          </div>
          <div className="w-full bg-primary rounded-3xl px-6 py-12 shadow-lg relative z-10">
            <h2 className="text-5xl md:text-6xl font-semibold text-white text-center tracking-tight drop-shadow-lg relative">
              Artikel &amp; <span className="text-secondary">Insight</span>
              <span className="block mx-auto mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-secondary via-white to-secondary opacity-80 animate-pulse-slow"></span>
            </h2>
            <p className="text-white/90 mt-8 mb-0 text-lg md:text-xl text-center max-w-3xl mx-auto font-light">
              Jelajahi pemikiran, studi kasus, dan pembaruan dari tim <span className="text-secondary font-semibold">AITISERVE</span> seputar teknologi modern, AI, cloud, dan digital innovation.
            </p>
          </div>
        </div>

        {/* Blog List */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full md:w-64 h-30 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-secondary uppercase mb-2">{post.category}</span>
                  <h2 className="text-xl font-bold text-primary mb-2">{post.title}</h2>
                  <p className="text-neutral-700 mb-4 flex-1">{post.description}</p>
                  <Link to={post.link} className="inline-block bg-secondary text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-primary hover:text-secondary transition-all duration-300 w-fit">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex; 