const loadSubstack = (cb) => {
    const existingScript = document.getElementById('substackAPI');
    window.CustomSubstackWidget = {
        substackUrl: "blublockxyz.substack.com",
        placeholder: "example@gmail.com",
        buttonText: "Subscribe",
        theme: "custom",
        colors: {
            primary: "#F4EFE5",
            input: "#FFFFFF",
            email: "#6E6E6E",
            text: "#0c4a6e",
        }
    }
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