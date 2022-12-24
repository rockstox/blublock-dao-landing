import React from "react";
import { faq } from "../constants";

export default function Faq() {
    return (
        <div id="faq" className="flex w-full py-10">
            <div className="container flex flex-col justify-center max-w-[1280px] py-8 mx-auto md:p-8 text-left">
                <div className="flex flex-col md:flex-row items-start justify-start mb-8">
                    <div className="mb-8 md:basis-1/5 px-4">
                        <h6 className="text-3xl text-center md:text-left font-black leading-normal">Frequently Asked Questions</h6>
                    </div>
                    <div className="md:basis-4/5">
                        <div className="w-full mx-auto space-y-4 bg-white p-8 rounded">
                            {faq.map((block) => (
                                <details key={block.id} className="w-full py-4 text-stone-800 border-b hover:cursor-pointer group last:border-b-0 border-stone-400">
                                    <summary className="px-4 py-4 text-lg text-stone-800 group-hover:underline">
                                        {block.q}
                                    </summary>
                                    <p className="px-6 py-4 text-lg font-lato text-stone-800">
                                        {block.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                        <div className="p-6">
                            <a href="https://blublock.notion.site/BluBlock-FAQ-76301091c4984f2cb72b79b7c4a946c8" target="_blank" className="text-4xl font-semibold underline">
                                See All FAQs →
                            </a>
                            <p className="mt-4 mb-8 text-stone-600">
                                Contact us directly gm@blublock.xyz for anything more specific
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}