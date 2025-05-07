"use client"

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-4 lg:py-6 fixed w-full top-0 z-50 ">
            <div className="container max-w-5xl rounded-[27px] md:rounded-full">
                <div className=" border border-white/15 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center bg-neutral-900/70 ">

                        <div>
                            <Image src={logoImage} alt="layersLogo" className="h-9 md:h-auto w-auto" />
                        </div>

                        <div className="lg:flex justify-center items-center hidden">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <a href={link.href} key={link.label}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="flex justify-end gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 text-white mr-2 md:hidden"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            </svg>

                            <Button className="hidden md:inline-flex items-center" variant="secondary"> Log In </Button>

                            <Button
                                className="hidden md:inline-flex items-center"
                                variant="primary"> Sign Up</Button>

                        </div>
                    </div>

                    <AnimatePresence>
                        {
                            isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}

                                    className="overflow-hidden">

                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {
                                            navLinks.map(link => (
                                                <a href={link.href} key={link.label}
                                                    className="py-2"
                                                >{link.label}</a>
                                            ))
                                        }
                                        <Button variant="secondary">Login</Button>
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
}
