"use client";

import { useScroll, useTransform } from "framer-motion";

import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(" ");

export default function Introduction() {

    const scrollTarget = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });


    const [currentWord, setCurrentWord] = useState(0)

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })
    }, [wordIndex])

    return (
        <section className="py-28 lg:py-40">
            <div className="container">

                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>
                            Your creative process deserves better.
                        </span>{" "}
                        <span className="text-white/15">
                            {
                                words.map((word, index) => (
                                    <span key={index}
                                        className={twMerge("transition duration-500 text-white/50",
                                            index < currentWord && 'text-teal-400')
                                        }
                                    >
                                        {`${word} `}
                                    </span>
                                ))
                            }
                        </span>
                        <span className="text-lime-400 block">
                            That's why we built layers,
                        </span>
                    </div>
                </div>

                <div className="h-[150vh]"
                    ref={scrollTarget}
                ></div>

            </div>
        </section>
    )
}
