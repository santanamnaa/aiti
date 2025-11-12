import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Helper function to get blog posts with translations
const getBlogPosts = (t: (key: string) => string) => [
  {
    image: '/images/blog/blog1.png',
    categories: ['Latest', 'Website Development'],
    title: t('blogPage.posts.0.title'),
    slug: 'terke-corp',
    description: t('blogPage.posts.0.description'),
    date: t('blogPage.posts.0.date'),
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
    title: t('blogPage.posts.1.title'),
    slug: 'meetsup-app',
    description: t('blogPage.posts.1.description'),
    date: t('blogPage.posts.1.date'),
  },
  {
    image: '/images/blog/blog3.png',
    categories: ['Latest', 'Website Development', 'Database'],
    title: t('blogPage.posts.2.title'),
    slug: 'orka-startup',
    description: t('blogPage.posts.2.description'),
    date: t('blogPage.posts.2.date'),
  },
  {
    image: '/images/blog/blog4.png',
    categories: ['Latest', 'Database'],
    title: t('blogPage.posts.3.title'),
    slug: 'smartvision-ai',
    description: t('blogPage.posts.3.description'),
    date: t('blogPage.posts.3.date'),
  },
  {
    image: '/images/blog/blog5.png',
    categories: ['Latest', 'Database'],
    title: t('blogPage.posts.4.title'),
    slug: 'cloudops-platform',
    description: t('blogPage.posts.4.description'),
    date: t('blogPage.posts.4.date'),
  },
  {
    image: '/images/blog2.png',
    categories: ['Latest', 'UI/UX Design'],
    title: t('blogPage.posts.5.title'),
    slug: 'uiux-best-practice',
    description: t('blogPage.posts.5.description'),
    date: t('blogPage.posts.5.date'),
  },
  {
    image: '/images/blog3.png',
    categories: ['Latest', 'Website Development'],
    title: t('blogPage.posts.6.title'),
    slug: 'nextjs-for-enterprise',
    description: t('blogPage.posts.6.description'),
    date: t('blogPage.posts.6.date'),
  },
];

// Export original blogPosts for backward compatibility (used in BlogDetailPage)
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
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(t('blogPage.categories.latest'));
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const categories = [
    t('blogPage.categories.latest'),
    t('blogPage.categories.uiux'),
    t('blogPage.categories.webdev'),
    t('blogPage.categories.database'),
  ];

  const blogPostsWithTranslations = getBlogPosts(t);
  
  // Map category translations to original category names for filtering
  const categoryMap: { [key: string]: string } = {
    [t('blogPage.categories.latest')]: 'Latest',
    [t('blogPage.categories.uiux')]: 'UI/UX Design',
    [t('blogPage.categories.webdev')]: 'Website Development',
    [t('blogPage.categories.database')]: 'Database',
  };

  const filteredPosts =
    selectedCategory === t('blogPage.categories.latest')
      ? blogPostsWithTranslations
      : blogPostsWithTranslations.filter((post) => post.categories.includes(categoryMap[selectedCategory] || selectedCategory));

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <main className="bg-white min-h-screen w-full font-poppins">
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pt-60 pb-8">
        <h1 className="text-[64px] leading-[96px] font-medium uppercase text-[#7E7E7E] drop-shadow-sm mb-4">{t('blogPage.title')}</h1>
        <h2 className="text-[64px] leading-[96px] font-semibold uppercase text-[#08C2C1] drop-shadow-sm mb-8">{t('blogPage.titleHighlight')}</h2>
        <p className="text-lg font-medium text-[#0E1423] capitalize leading-8 max-w-[920px] mb-8">
          {t('blogPage.description')}
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
              {t('blogPage.showMore')}
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
