import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./blog.css";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main className="blog-surface">{children}</main><Footer /></>;
}
