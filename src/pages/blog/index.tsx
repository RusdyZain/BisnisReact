import BlogCard from "@/components/CardBlog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Main() {
  return (
    <div className="bg-[#252534]">
      <Header />
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 flex flex-col items-center gap-2">
          <h2 className="text-white text-2xl font-bold md:text-4xl md:leading-tight ">
            Building Your Online Presence: A Business Website That Works
          </h2>
          <p className="mt-1 text-white">
            In today&apos;s digital age, having a strong online presence is
            vital for businesses of all sizes. A well-designed business website
            serves as a powerful tool to attract potential customers, showcase
            your products or services, and establish credibility in your
            industry. In this blog, we&apos;ll explore the key elements of creating a
            successful business website that effectively represents your brand
            and helps you achieve your goals
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <BlogCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
