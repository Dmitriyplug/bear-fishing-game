export function printResults({ caught, escaped }) {
  console.log(`\n��� Итого: поймано ${caught}, уплыло ${escaped}`);
  
  if (caught === 0) {
    console.log('��� Медведь остался голодным...');
  } else if (caught <= 2) {
    console.log('��� Медведь немного перекусил');
  } else if (caught <= 5) {
    console.log('��� Медведь хорошо поел!');
  } else {
    console.log('��� Медведь объелся! Отличная рыбалка!');
  }
}

export function printCatch(message) {
  console.log(`✅ ${message}`);
}

export function printEscape(message) {
  console.log(`❌ ${message}`);
}

export function printGameStart(difficulty, fishCount) {
  console.log(`\n��� Медведь начинает рыбалку на ${difficulty} уровне`);
  console.log(`��� Пытается поймать ${fishCount} рыб...\n`);
}

export function printRealTimeStart() {
  console.log('\n��� Начинаем следить за рыбалкой в реальном времени:\n');
}

export function printFishingTime(duration) {
  console.log(`⏱️ Рыбалка заняла ${duration} секунд`);
}
