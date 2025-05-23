"use client";

import { IntegrationType } from '@/sections/Integrations';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const IntegrationsColumn = (props: { integrations: IntegrationType; className?: string; reverse?: boolean }) => {
    const { integrations, className, reverse } = props;

    return (
        <motion.div
            className={twMerge("flex flex-col gap-4 pb-4", className)}
            initial={{
                y: reverse ? '-50%' : 0
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
            }}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={`${i}-${integration.name}`} // make keys unique
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={integration.icon}
                                    alt={`${integration.name} icon`}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                            <p className="text-center text-white/50 mt-2">{integration.description}</p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationsColumn;
