const axios = require('axios');

const getUserQuests = (userId) => 
    axios.get(`https://zapper.fi/_next/data/${userId}/en/quests.json`);

const getUserRewards = (userId) =>
    axios.get(`https://zapper.fi/_next/data/${userId}/en/rewards.json`);

const main = () => {
    console.log("Blursed ZapperBot");
}

main();