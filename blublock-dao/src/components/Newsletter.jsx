import NewsletterNode from './NewsletterNode';
import loadSubstack from './loadSubstack';
import React, { useEffect, useState } from 'react';

const Newsletter = () => {
    const [loaded, setLoaded] = useState(false);
    loadSubstack(() => {
        
        setLoaded(true);
    })
    return (
        <div className="w-full bg-blue-900/90 py-10">
            <div className="container px-8 mx-auto max-w-[1280px] text-white">
                <h4 className="font-lato text-lg">Subscribe to the newsletter</h4>
                <h3 className="text-2xl my-6">Actionable Web3 media licensing insights every week</h3>
                {loaded ? <NewsletterNode /> : ''}
            </div>
        </div>
    );
}

export default Newsletter;
