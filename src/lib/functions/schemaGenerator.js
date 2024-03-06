export function generateHomeSchema(orgName, orgUrl, orgLogo, orgPhone) {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": orgName,
        "url": orgUrl,
        "logo": orgLogo,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": orgPhone,
            "contactType": "customer service"
        }
        // Add more properties as needed
    };

    return `<script type="application/ld+json">${JSON.stringify(homeSchema)}</script>`;
}


export function generateFaqSchema(faqData) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        }))
    };

    return `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
}
