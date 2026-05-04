import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  MessageCircle,
  Bookmark,
  ChevronRight,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ArticleDetailPage = () => {
  const { slug } = useParams();

  // Mock data for detail view
  const article = {
    title: "What Recruiters Don't Tell You About Data Science Jobs",
    author: "John Benhar P S",
    date: "Mar 30, 2026",
    readTime: "5 Min Read",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?w=1200&q=80",
    content: `
      <p>Over the past few years, the data science landscape has changed significantly. While the demand for data scientists remains high, the expectations from recruiters have shifted from just knowing algorithms to practical business problem-solving.</p>
      
      <h3>1. Business Impact Over Technical Prowess</h3>
      <p>Most recruiters won't tell you that they value your ability to translate data into business decisions more than your ability to code a complex neural network from scratch.</p>
      
      <h3>2. The "Soft" Skills are Hard Requirements</h3>
      <p>Communication is the bridge between data and action. If you can't explain your model to a non-technical stakeholder, the model is essentially useless to the business.</p>
      
      <h3>3. Portfolio Projects Must Be Unique</h3>
      <p>Recruiters are tired of seeing the Titanic dataset or Iris flower classification. They look for unique, real-world problems that you've solved independently.</p>
    `,
    related: [
      { id: 2, title: "From Non-IT to Data Analyst", category: "Data Analytics", date: "Mar 31" },
      { id: 4, title: "DATA ANALYST ROADMAP 2026", category: "Data Analytics", date: "Mar 28" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans pb-24">
      {/* Article Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md sticky top-20 z-40 border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/blogs" className="flex items-center gap-2 text-[#14937a] hover:opacity-80 transition-all font-bold text-sm">
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-[#14937a] transition-colors">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-[#14937a] transition-colors">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#14937a]/10 text-[#14937a] text-[10px] font-black uppercase tracking-widest mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#05243b] leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#05243b] text-white flex items-center justify-center font-black">
                JB
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Author</p>
                <p className="text-[#05243b] font-black text-sm">{article.author}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-100 hidden sm:block" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                <Calendar size={16} className="text-[#14937a]" />
                {article.date}
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                <Clock size={16} className="text-[#14937a]" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-16 border border-slate-100">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full aspect-[2/1] object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-teal lg:prose-xl max-w-none prose-headings:text-[#05243b] prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Footer Interaction */}
        <div className="mt-20 pt-12 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#14937a]/5 text-[#14937a] rounded-xl font-bold text-sm hover:bg-[#14937a]/10 transition-all">
                <MessageCircle size={18} />
                Write a Comment
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 font-bold text-sm">Share this article:</span>
              <div className="flex gap-2">
                {['Twitter', 'LinkedIn', 'Facebook'].map(social => (
                  <button key={social} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#14937a] hover:border-[#14937a] transition-all">
                    {social[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-24">
          <h3 className="text-3xl font-black text-[#05243b] mb-12 flex items-center gap-3">
            <TrendingUp size={28} className="text-[#14937a]" />
            Continue Reading
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {article.related.map(rel => (
              <Link key={rel.id} to={`/blog/related`} className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#14937a]/10 text-[#14937a] text-[10px] font-black uppercase tracking-widest mb-4">
                  {rel.category}
                </div>
                <h4 className="text-xl font-black text-[#05243b] group-hover:text-[#14937a] transition-colors leading-tight mb-4">
                  {rel.title}
                </h4>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-slate-400 font-bold text-sm">{rel.date}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#14937a] group-hover:bg-[#14937a] group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
