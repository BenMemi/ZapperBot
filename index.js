const axios = require('axios').default;



const getUserQuests = async (userId) => 
    (await axios.get(`https://zapper.fi/_next/data/${userId}/en/quests.json`)).data;

const getUserRewards = async (userId) =>
    (await axios.get(`https://zapper.fi/_next/data/${userId}/en/rewards.json`)).data;

const main = async () => {
    const userId = process.argv[2];
    const userQuests =  await getUserQuests(userId);
    const userRewards = await getUserRewards(userId);
    console.log(userQuests);
    console.log(userRewards);
    console.log("Blursed ZapperBot"); 
}

main();