const loadSubstack = (cb) => {
    const existingScript = document.getElementById('substackAPI');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://substackapi.com/widget.js';
        script.id = 'substackAPI';
        document.body.appendChild(script);

        script.onload = () => {
            if (cb) cb();
        }
    }
    if (existingScript && cb) {
        cb();
    };
}

export default loadSubstack;