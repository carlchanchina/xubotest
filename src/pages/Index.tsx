import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Blog />
      <Cases />
      <Footer />
    </div>
  );
};

export default Index;
