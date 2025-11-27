import { startFishing, watchFishing, DIFFICULTY } from './src/game.js';

async function main() {
  console.log('��� Добро пожаловать в игру "Медвежий улов"!');
  console.log('==========================================');
  
  console.log('\n--- Стандартная рыбалка (легкий уровень) ---');
  await startFishing(DIFFICULTY.EASY.fish);
  
  console.log('\n--- Рыбалка в реальном времени (2 рыбы) ---');
  await watchFishing(2);
  
  console.log('\n--- Тест среднего уровня ---');
  await startFishing(DIFFICULTY.MEDIUM.fish);
  
  console.log('\n��� Спасибо за игру! Медведь доволен!');
}

main().catch((error) => {
  console.error('Произошла ошибка:', error);
  process.exit(1);
});
