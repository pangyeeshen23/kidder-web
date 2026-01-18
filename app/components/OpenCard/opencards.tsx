import { motion } from "framer-motion";
import React, { useState } from "react";

export default function OpenCards() {
    const [isOpen, setIsOpen] = useState<number | null>(null)

    const handleCardClick = (index: number) => {
        setIsOpen(index === isOpen ? -1 : index);
    }

    const cardVariants = {
        expanded : {
            width: "400px",
        },
        collapsed : {
            width: "200px",
        }
    }

    const experiences = 
    [
        { id: "exp1", label: "Bravonet Solutions Sdn Bhd", start:"Oct 2019", end:"May 2021", title: "Backend Developer", desc:"" },
        { id: "exp2", label: "Codon Genomics Sdn Bhd", start:"Jun 2021", end:"Jan 2023", title: "Software Engineer", desc:"" },
        { id: "exp3", label: "Visual Solutions (M) Sdn Bhd", start:"Jan 2023", end:"Oct 2023", title: "Software Developer", desc:"" },
        { id: "exp4", label: "SimpleTruss", start:"Dec 2023", end:"Aug 2024", title: "Back End Developer", desc:"" },
        { id: "exp5", label: "VCI Global Limited (VCIG)", start:"Oct 2024", end:"Present", title: "Software Developer", desc:"" }
    ]

    return (
        <section className="py-8 bg-gradient-to-r">
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
                {[...experiences].map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === isOpen ? 'expanded' : 'collapsed' }`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={index === isOpen ? "expanded" : "collapsed"}
                        onClick={() => handleCardClick(index)}
                    >
                    <div className='card-content h-full flex flex-col justify-end'>
                        <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                            <h2 className="text-xl font-semibold text-white text-center">{exp.label}</h2>
                            {index === isOpen && (
                                <p className="mt-2 text-gray-300 text-center">
                                    {exp.label}
                                </p>
                            )}
                        </div>
                    </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
} 