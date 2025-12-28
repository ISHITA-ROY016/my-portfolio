import blogs from "../data/blogs.json";

const Blogs = () => {
    return (
        <div
            id="blogs"
            className="rounded-lg border border-[#bcbcbc] dark:border-none dark:animated-border
      w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7 relative z-10"
        >
            <div className="flex-grow rounded-lg bg-white/80 dark:bg-none dark:bg-darkSecondary bg-darkSecondary p-6 sm:p-8">

                {/* Title */}
                <div className="flex gap-3 items-center mb-10 justify-center w-full">
                    <img src="/assets/blog.svg" width={50} height={50} />
                    <span className="text-3xl md:text-4xl font-bold text-text dark:text-white">
                        Blogs
                    </span>
                </div>

                {/* Blog Cards */}
                <div className="flex flex-col gap-6">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-gray-400 dark:border-white/10
              bg-[#E2EEFB] dark:bg-[#0b253a] p-6"
                        >
                            {/* Meta */}
                            <div className="text-xs text-gray-700 dark:text-white/60 mb-2">
                                {blog.date} • {blog.readTime}
                            </div>

                            {/* Title (ONLY clickable) */}
                            <h3 className="text-xl sm:text-2xl font-bold text-darkHeading mb-3">
                                <a
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 relative after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                                >
                                    <span>{blog.title}</span>
                                    <span className="text-base opacity-80">↗</span>
                                </a>

                            </h3>

                            {/* Description */}
                            <p className="text-text dark:text-darkText mb-4 leading-relaxed">
                                {blog.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-semibold rounded-md
                    bg-darkHeading dark:bg-[#123b52]
                    text-text dark:text-darkHeading
                    border border-white/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blogs;
