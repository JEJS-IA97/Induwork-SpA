import { useEffect } from "react";

const Seo = ({
    title,
    description,
    canonical,
    ogImage = "https://www.induwork.cl/images/og-image.jpg",
}) => {
    useEffect(() => {
        document.title = title;

        const updateMeta = (attribute, value, content) => {
            let element = document.head.querySelector(
                `meta[${attribute}="${value}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", value);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        updateMeta("name", "description", description);
        updateMeta("property", "og:title", title);
        updateMeta("property", "og:description", description);
        updateMeta("property", "og:url", canonical);
        updateMeta("property", "og:image", ogImage);

        let canonicalElement = document.head.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonicalElement) {
            canonicalElement = document.createElement("link");
            canonicalElement.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalElement);
        }

        canonicalElement.setAttribute("href", canonical);
    }, [title, description, canonical, ogImage]);

    return null;
};

export default Seo;