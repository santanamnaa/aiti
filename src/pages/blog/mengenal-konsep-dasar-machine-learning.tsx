import React from 'react';

const MengenalKonsepDasarMachineLearning: React.FC = () => {
  return (
    <div className="bg-white min-h-screen w-full text-gray-900">
        <div className="h-20 lg:h-[92px] w-full" />
      <div className="bg-[#F3F4F6] max-w-3xl mx-auto px-4 py-12 rounded-lg shadow-lg mt-12 mb-20">
        <img src="/images/blog/dummy1.png" alt="Mengenal Konsep Dasar Machine Learning" className="w-full h-64 object-cover rounded-md mb-8" />
        <div className="mb-4">
          <span className="text-xs font-semibold text-secondary uppercase">AI & Machine Learning</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-xs text-gray-500">12 Juni 2024</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Mengenal Konsep Dasar Machine Learning</h1>
        <p className="text-lg text-gray-700 mb-8">Pelajari bagaimana machine learning bekerja dan mengapa ia menjadi bagian penting dalam perkembangan teknologi modern.</p>
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>Machine learning (ML) adalah cabang dari kecerdasan buatan (AI) yang memungkinkan sistem belajar secara otomatis dari data dan pengalaman tanpa diprogram secara eksplisit. Dalam era digital saat ini, ML menjadi fondasi utama di balik berbagai inovasi seperti rekomendasi produk, pengenalan wajah, hingga kendaraan otonom.</p>
          <p>Secara umum, proses machine learning melibatkan pengumpulan data, pelatihan model, evaluasi, dan penerapan model ke dunia nyata. Algoritma ML dapat dibagi menjadi tiga kategori utama: supervised learning, unsupervised learning, dan reinforcement learning.</p>
          <p>Dengan kemampuannya untuk menemukan pola tersembunyi dalam data, machine learning telah merevolusi banyak industri, mulai dari kesehatan, keuangan, hingga transportasi. Di masa depan, peran ML diprediksi akan semakin besar dalam membantu manusia mengambil keputusan yang lebih cerdas dan efisien.</p>
        </div>
      </div>
    </div>
  );
};

export default MengenalKonsepDasarMachineLearning; 