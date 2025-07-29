import { writeFileSync } from 'fs';

import { RssFeedGenerator } from '@/build-script/rss/RssFeedGenerator';

async function execute() {
    const rssFeedXml = await RssFeedGenerator.generateFeedXml();

    // Write RSS XML to disk
    try {
        writeFileSync("./out/feeds/blog.xml", rssFeedXml);
        console.log("RSS feed XML file for blog posts written to disk successfully!");
    } catch (error) {
        console.error("Error writing RSS feed XML file for blog posts:", error);
    }
}

execute();