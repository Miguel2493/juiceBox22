const { client, getAllUsers } = require(`./index`);

async function testDB() {
    try {
        client.connect(); // connects client to the database
        const users = await getAllUsers();
        // queries are promises, so we can await them 
        console.log(users);
    } catch (error) {
        throw error
    } finally {
        client.end();
    }
}

testDB();