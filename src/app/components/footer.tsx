import Contact from "./contact";
import Copyright from "./copyright";
import SocialMedia from "./socialmedia";

export default function Footer() {
  return (
    <footer className="bg-enchilada-600 p-4">
      <Contact />
      <SocialMedia placement="footer" />
      <Copyright />
    </footer>
  );
}
