import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 text-center">
                    
                    {/* Logo */}
                    <div>
                        <Image src={logoImage} alt="Layers logo" />
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                </div>
            </div>
        </section>
    );
}
