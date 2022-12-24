const NewsletterNode = () => {
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
    return (
        <div id="custom-substack-embed"></div>
    )

}

export default NewsletterNode;