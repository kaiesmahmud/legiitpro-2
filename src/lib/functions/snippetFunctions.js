// structuredData.js

export function generateSnippetStructuredData({ title, description, url, image }) {
    const structuredData = {
        "@context": "http://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "headline": title,
        "description": description,
       
        "author": {
            "@type": "Organization",
            "name": "Legiitpro"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Legiitpro",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.legiitpro.com/logo.webp"
            }
        }
    };
    if(image){
        structuredData["image"]= [ image ]
    }

    return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
}
