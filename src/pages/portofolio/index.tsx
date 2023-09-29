import Header from "@/components/Header";
import CardPorto from "@/components/CardPorto";
import Footer from "@/components/Footer";
export const portoData = [
  {
    projectId: 1,
    link: "/portofolio/1",
    projectName: "Company Website Redesign",
    description:
      "We revamped the client's outdated website, giving it a modern look and improving user experience. The project included responsive design, content migration, and SEO optimization.",
    client: "ABC Corporation",
    completed_date: "2023-02-15",
    services_provided: ["Web Design", "Web Development", "SEO Optimization"],
  },
  {
    projectId: 2,
    link: "/portofolio/2",
    projectName: "E-commerce Store Development",
    description:
      "We built a feature-rich online store from scratch, including product catalog setup, payment gateways, and inventory management. The client's online sales have since skyrocketed.",
    client: "XYZ Retailers",
    completed_date: "2023-04-30",
    services_provided: [
      "E-commerce Development",
      "Payment Integration",
      "Inventory Management",
    ],
  },
  {
    projectId: 3,
    link: "/portofolio/3",
    projectName: "Social Media Marketing Campaign",
    description:
      "We devised and executed a targeted social media marketing strategy, resulting in increased brand visibility and engagement. The campaign included content creation and PPC advertising.",
    client: "LMN Services",
    completed_date: "2023-06-20",
    services_provided: [
      "Social Media Marketing",
      "Content Creation",
      "PPC Advertising",
    ],
  },
];

export default function Portofolio() {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9 p-14 bg-[#252534]">
        {portoData.map((value) => (
          <CardPorto
            projectName={value.projectName}
            description={value.description}
            key={value.projectId}
            link={value.link}
            completed_date={value.completed_date}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
