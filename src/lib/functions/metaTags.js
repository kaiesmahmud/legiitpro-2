export function generateMetaTags({ title, description, url, image }) {
    const titleTag = `<title>${title}</title>`;
    const descriptionTag = `<meta name="description" content="${description}">`;
    const openGraphTags = `
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:url" content="${url}">
        <meta property="og:image" content="${image}">
    `;
    const twitterCardTags = `
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="${image}">
    `;
    const canonicalTag = `<link rel="canonical" href="${url}">`;

    return `${titleTag}${descriptionTag}${openGraphTags}${twitterCardTags}${canonicalTag}`;
}
