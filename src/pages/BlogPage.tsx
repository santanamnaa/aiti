import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts, blogPosts } from '../utils/blogData';

// Re-export blogPosts for backward compatibility (used in BlogDetailPage)
export { blogPosts };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {visiblePosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden w-full max-w-[448px] h-[497px] mx-auto cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-2 hover:border-[#08C2C1]"
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
