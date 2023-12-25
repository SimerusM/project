import db, { genId } from '../../src/modules/db'

const run = async () => {
    await db.post.createMany({
        data: [
            {
                id: genId(),
                slug: 'test1 slug',
                title: 'test1 title',
                publishedAt: new Date()
            },
            {
                id: genId(),
                slug: 'test2 slug',
                title: 'test2 title'
            }
        ]
    });
};

// Auto run when dev.ts is called
if (require.main === module) {
    run().then(() => {
        console.log('Data seed complete');
        process.exit();
    });
}