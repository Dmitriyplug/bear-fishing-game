export function spawnFish(count) {
  const fishPromises = [];
  
  for (let i = 0; i < count; i++) {
    const fishPromise = new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      
      setTimeout(() => {
        if (Math.random() < 0.7) {
          const FISH_TYPES = ['карп', 'щука', 'окунь', 'лещ', 'сом', 'форель'];
          const fishType = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
          resolve(`Поймал ${fishType}!`);
        } else {
          const FISH_TYPES = ['карп', 'щука', 'окунь', 'лещ', 'сом', 'форель'];
          const fishType = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
          reject(`Упс, ${fishType} уплыла...`);
        }
      }, delay);
    });
    
    fishPromises.push(fishPromise);
  }
  
  return fishPromises;
}

export default spawnFish;
