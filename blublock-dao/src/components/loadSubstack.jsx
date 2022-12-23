const loadSubstack = (cb) => {
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.id = 'substackAPI';
    document.body.appendChild(script);
    script.onload = () => {
        window.CustomSubstackWidget = {
            substackUrl: "blublockxyz.substack.com",
            placeholder: "example@gmail.com",
            buttonText: "Subscribe",
            theme: "custom",
            colors: {
              primary: "#141414",
              input: "#FFFFFF",
              email: "#6E6E6E",
              text: "#FFFFFF",
            }
        };
        if (cb) cb();
    }
}

export default loadSubstack;