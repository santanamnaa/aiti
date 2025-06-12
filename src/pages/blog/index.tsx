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
    <div className="bg-[#18202B] min-h-screen w-full py-16">
      <div className="h-20 lg:h-[92px] w-full" />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Blog AITISERVE</h1>
        <div className="grid gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <img src={post.image} alt={post.title} className="w-full md:w-64 h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-secondary uppercase mb-2">{post.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{post.description}</p>
                <Link to={post.link} className="inline-block bg-secondary text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-opacity-90 transition w-fit">Baca Selengkapnya</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex; 