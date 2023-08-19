import Contact from "./contact";
import SocialMedia from "./socialmedia";

export default function Footer() {
    return (
        <footer className="bg-enchilada-600 p-4">
            <SocialMedia placement="footer" />
            <Contact />
        </footer>
    );
}
