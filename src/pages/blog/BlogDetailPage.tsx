import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../BlogPage';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <button onClick={() => navigate(-1)} className="text-[#08C2C1] underline">Back</button>
      </div>
    );
  }

  const renderContent = (content: Array<{ type: string; text?: string; level?: number; code?: string; language?: string }>) =>
    content.map((item, idx) => {
      if (item.type === 'heading') {
        if (item.level === 2) {
          return <h2 key={idx} className="text-[24px] font-bold text-[#08C2C1] mt-10 mb-4">{item.text}</h2>;
        }
        // Tambah level lain jika perlu
      }
      if (item.type === 'paragraph') {
        return <p key={idx} className="text-[#0E1423] text-base leading-7 mb-4">{item.text}</p>;
      }
      if (item.type === 'code') {
        return (
          <pre key={idx} className="bg-[#F4F4F4] rounded-lg p-4 mb-4 overflow-x-auto text-sm">
            <code>{item.code}</code>
          </pre>
        );
      }
      return null;
    });

  return (
    <div className="bg-white min-h-screen w-full pt-[100px] pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <img src={post.image} alt={post.title} className="w-full h-[360px] object-cover rounded-2xl mb-8" />
        <div className="mb-4 flex gap-2">
          {post.categories.map((cat) => (
            <span key={cat} className="bg-[#08C2C1] text-white px-3 py-1 rounded-xl text-sm font-medium">{cat}</span>
          ))}
        </div>
        <h1 className="text-[40px] font-bold text-[#08C2C1] mb-2 leading-tight">{post.title}</h1>
        <div className="text-[#7E7E7E] text-lg mb-6">{post.date}</div>
        <p className="text-[#0E1423] text-lg leading-8 font-medium mb-8">{post.description}</p>
        <div className="prose max-w-none">
          {post.content && renderContent(post.content)}
        </div>
        <button onClick={() => navigate(-1)} className="text-[#08C2C1] underline mt-8">Back to Blog</button>
      </div>
    </div>
  );
};

export default BlogDetailPage; 