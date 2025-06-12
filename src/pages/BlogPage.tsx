import React from 'react';

const blogPosts = [
  {
    image: '/images/blog1.png',
    category: 'Full-Stack Web Development',
    title: 'Terke.corp',
    description: 'Membangun platform web modern untuk kolaborasi tim dan otomasi bisnis dengan stack JavaScript full-stack.',
    icons: ['/images/figma.png', '/images/github.png', '/images/javascript.png', '/images/nodejs.png', '/images/mongo.png'],
    link: '#',
  },
  {
    image: '/images/blog2.png',
    category: 'Flutter Development',
    title: 'MeetsUp App',
    description: 'Aplikasi mobile lintas platform untuk event dan komunitas, dibangun dengan Flutter dan Firebase.',
    icons: ['/images/figma.png', '/images/github.png', '/images/flutter.png', '/images/firebase.png'],
    link: '#',
  },
  {
    image: '/images/blog3.png',
    category: 'Full-Stack JavaScript Development',
    title: 'Orka StartUp',
    description: 'Solusi startup digital dengan integrasi Node.js, MongoDB, dan React untuk pertumbuhan bisnis.',
    icons: ['/images/figma.png', '/images/github.png', '/images/js.png', '/images/nodejs.png', '/images/mongo.png'],
    link: '#',
  },
  {
    image: '/images/blog4.png',
    category: 'AI & Machine Learning',
    title: 'SmartVision AI',
    description: 'Implementasi computer vision untuk analisis data visual di industri manufaktur.',
    icons: ['/images/python.png', '/images/github.png', '/images/tensorflow.png'],
    link: '#',
  },
  {
    image: '/images/blog5.png',
    category: 'Cloud Infrastructure',
    title: 'CloudOps Platform',
    description: 'Otomasi deployment dan monitoring cloud dengan DevOps tools modern.',
    icons: ['/images/aws.png', '/images/docker.png', '/images/github.png'],
    link: '#',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen w-full py-24 px-4">
      <div className="container mx-auto py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 py-24 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-2">{post.category}</p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{post.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.icons.map((icon, i) => (
                    <img key={i} src={icon} alt={`icon_${i}`} className="w-6 h-6 object-contain" />
                  ))}
                </div>
                <a href={post.link} className="text-secondary font-semibold hover:underline mt-auto">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 