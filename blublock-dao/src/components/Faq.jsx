import React from "react";
import {faq} from "../constants";

export default function Faq() {
    return (
        <div className="flex w-full items-center justify-center py-10">
            <div className="w-full">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 text-center">
                    <a href="https://blublock.notion.site/BluBlock-FAQ-76301091c4984f2cb72b79b7c4a946c8" target="_blank" className="text-4xl font-semibold underline">
                        Frequently Asked Questions →
                    </a>
                    <p className="mt-4 mb-8 text-stone-600">
                        Contact us directly gm@blublock.xyz for anything more specific 
                    </p>
                    <div className="space-y-4 max-w-[600px] w-full mx-auto">
                        {/* {faq.map((block) => (
                            <details key={block.id} className="w-full rounded-lg ring-1 text-white ring-stone-600">
                                <summary className="px-4 py-6 text-white">
                                    {block.q}
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-stone-300">
                                    {block.a}
                                </p>
                            </details>
                        ))} */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}