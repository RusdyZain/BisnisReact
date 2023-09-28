import BlogCard from "@/components/CardPorto";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const blogData = [
  {
    id: 1,
    title: "Defining Your Brand Identity",
    desc: "Before diving into the technical aspects, it's crucial to define your brand identity. What message do you want to convey to your audience, and what values does your business stand for? Your website should reflect this identity consistently through its design, content, and messaging.",
    imgUrl:
      "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/project/1",
  },
  {
    id: 2,  
    title: "User-Friendly Navigation",
    desc: 'Visitors should be able to navigate your website effortlessly. Ensure that your menu is intuitive, and important pages like "Home," "About Us," "Products/Services," and "Contact" are easily accessible. A clear and concise menu structure enhances the user experience.',
    imgUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/project/2",
  },
  {
    id: 3,
    title: "Compelling Content",
    desc: "High-quality, relevant content is the backbone of any successful website. Create engaging copy that addresses your audience's pain points and offers solutions. Regularly update your blog with informative articles related to your industry.",
    imgUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/project/3",
  },
];

export default function Main() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Building Your Online Presence: A Business Website That Works
          </h2>
          <p className="mt-1 text-gray-600 ">
          In today&apos;s digital age, having a strong online presence is vital for businesses of all sizes. A well-designed business website serves as a powerful tool to attract potential customers, showcase your products or services, and establish credibility in your industry. In this blog, we'll explore the key elements of creating a successful business website that effectively represents your brand and helps you achieve your goals
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((value) => (
            <BlogCard
              title={value.title}
              desc={value.desc}
              imgUrl={value.imgUrl}
              key={value.id}
              link={value.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
