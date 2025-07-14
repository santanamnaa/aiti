import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  'Latest',
  'UI/UX Design',
  'Website Development',
  'Database',
];

export const blogPosts = [
  {
    image: '/images/blog/blog1.png',
    categories: ['Latest', 'Website Development'],
    title: 'Terke.corp',
    slug: 'terke-corp',
    description: 'Membangun platform web modern untuk kolaborasi tim dan otomasi bisnis dengan stack JavaScript full-stack.',
    date: 'June 24, 2025',
    content: [
      { type: 'paragraph', text: 'Concurrency is a cornerstone of modern software development, enabling applications to perform multiple tasks simultaneously and make efficient use of system resources. Java, as a versatile and powerful programming language, has evolved to include robust concurrency support, allowing developers to create high-performance, scalable applications. This article provides an in-depth look at advanced concurrency patterns and best practices in Java, equipping developers with the knowledge to tackle complex concurrency challenges and optimize their applications.' },
      { type: 'heading', level: 2, text: '1. Fundamentals of Java Concurrency' },
      { type: 'paragraph', text: 'Basic Concurrency Concepts' },
      { type: 'paragraph', text: 'Concurrency is a cornerstone of modern software development, enabling applications to perform multiple tasks simultaneously and make efficient use of system resources. Java, as a versatile and powerful programming language, has evolved to include robust concurrency support, allowing developers to create high-performance, scalable applications. This article provides an in-depth look at advanced concurrency patterns and best practices in Java, equipping developers with the knowledge to tackle complex concurrency challenges and optimize their applications.' },
      { type: 'code', language: 'java', code: 'public class BasicRunnable implements Runnable {\n    @Override\n    public void run() {\n        System.out.println("Hello from a thread!");\n    }\n    public static void main(String[] args) {\n        Thread thread = new Thread(new BasicRunnable());\n        thread.start();\n    }\n}' },
      { type: 'paragraph', text: 'In this example, a new thread is created and started, executing the run method of the BasicRunnable class.' }
    ]
  },
  {
    image: '/images/blog/blog2.png',
    categories: ['Latest', 'UI/UX Design'],
    title: 'MeetsUp App',
    slug: 'meetsup-app',
    description: 'Aplikasi mobile lintas platform untuk event dan komunitas, dibangun dengan Flutter dan Firebase.',
    date: 'June 23, 2025',
  },
  {
    image: '/images/blog/blog3.png',
    categories: ['Latest', 'Website Development', 'Database'],
    title: 'Orka StartUp',
    slug: 'orka-startup',
    description: 'Solusi startup digital dengan integrasi Node.js, MongoDB, dan React untuk pertumbuhan bisnis.',
    date: 'June 22, 2025',
  },
  {
    image: '/images/blog/blog4.png',
    categories: ['Latest', 'Database'],
    title: 'SmartVision AI',
    slug: 'smartvision-ai',
    description: 'Implementasi computer vision untuk analisis data visual di industri manufaktur.',
    date: 'June 21, 2025',
  },
  {
    image: '/images/blog/blog5.png',
    categories: ['Latest', 'Database'],
    title: 'CloudOps Platform',
    slug: 'cloudops-platform',
    description: 'Otomasi deployment dan monitoring cloud dengan DevOps tools modern.',
    date: 'June 20, 2025',
  },
  {
    image: '/images/blog2.png',
    categories: ['Latest', 'UI/UX Design'],
    title: 'UI/UX Best Practice',
    slug: 'uiux-best-practice',
    description: 'Tips dan trik desain UI/UX modern untuk aplikasi web dan mobile.',
    date: 'June 19, 2025',
  },
  {
    image: '/images/blog3.png',
    categories: ['Latest', 'Website Development'],
    title: 'NextJS for Enterprise',
    slug: 'nextjs-for-enterprise',
    description: 'Mengapa NextJS menjadi pilihan utama untuk aplikasi enterprise.',
    date: 'June 18, 2025',
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Latest');
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const filteredPosts =
    selectedCategory === 'Latest'
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(selectedCategory));

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <main className="bg-white min-h-screen w-full font-poppins">
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-32 pb-8">
        <h1 className="text-[64px] leading-[96px] font-medium uppercase text-[#7E7E7E] drop-shadow-sm mb-4">TECH INSIGHTS</h1>
        <h2 className="text-[64px] leading-[96px] font-semibold uppercase text-[#08C2C1] drop-shadow-sm mb-8">& INDUSTRY UPDATES</h2>
        <p className="text-lg font-medium text-[#0E1423] capitalize leading-8 max-w-[920px] mb-8">
          Explore Our Latest Thoughts, Trends, And Tips On Technology, Innovation, And Digital Transformation—Written By Our Experts.
        </p>
        {/* Filter Buttons */}
        <div className="flex gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`font-medium text-[18px] px-6 py-2 rounded-xl border capitalize transition-all duration-200
                ${selectedCategory === cat
                  ? 'bg-[#08C2C1] text-white border-[#08C2C1]'
                  : 'bg-white text-[#08C2C1] border-[#08C2C1]'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4">
          {visiblePosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden w-[448px] h-[497px] mx-auto cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <img src={post.image} alt={post.title} className="w-full h-[240px] object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[24px] font-bold uppercase text-[#08C2C1] mb-2 leading-[41px]">{post.title}</h3>
                <p className="text-[#0E1423] font-medium text-[16px] mb-2 capitalize leading-[29px]">{post.description}</p>
                <span className="text-[#7E7E7E] text-[16px] font-medium mt-auto capitalize leading-[32px]">{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="flex justify-center mt-12">
            <button
              className="bg-white border border-[#08C2C1] text-[#08C2C1] font-medium text-[18px] px-6 py-2 rounded-xl capitalize"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
