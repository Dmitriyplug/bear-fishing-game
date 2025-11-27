import spawnFish from './fish.js';

export const DIFFICULTY = {
  EASY: { name: 'лёгкий', fish: 3 },
  MEDIUM: { name: 'средний', fish: 5 },
  HARD: { name: 'сложный', fish: 10 },
};

export async function catchFish(count) {
  const fishes = spawnFish(count);
  const results = await Promise.allSettled(fishes);
  
  let caught = 0;
  let escaped = 0;
  
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      caught += 1;
    } else {
      escaped += 1;
    }
  });
  
  return { caught, escaped };
}

export async function startFishing(count) {
  const result = await catchFish(count);
  return result;
}

export async function watchFishing(count) {
  const fishes = spawnFish(count);
  let caught = 0;
  let escaped = 0;
  
  for (const fishPromise of fishes) {
    try {
      await fishPromise;
      caught += 1;
    } catch {
      escaped += 1;
    }
  }
  
  return { caught, escaped };
}
