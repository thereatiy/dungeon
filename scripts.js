// Массив с частями истории
const storyParts = [
    "Вы входите в темное и зловещее подземелье. В воздухе стоит запах сырости и плесени.",
    "На первом повороте вы встречаете старого мага, который предлагает вам свои услуги.",
    "Продолжая путь, вы находите дверь, покрытую странными рунами. Вам нужно решить головоломку, чтобы открыть её.",
    "Внутри комнаты вы находите сундук с золотом, но внезапно появляется дракон!",
    "После ожесточённой битвы с драконом вы находите выход из подземелья и возвращаетесь домой с богатством."
];

// Массив ролей с характеристиками и пассивными способностями
const roles = [
    {
        name: 'Воин',
        strength: 5,
        dexterity: 2,
        constitution: 4,
        wisdom: -1,
        intelligence: -2,
        charisma: 0,
        passiveAbility: {
            description: 'Стойкость: Уменьшает получаемый урон на 1 пункт.',
            effect: 'reducePhysicalDamage'
        }
    },
    {
        name: 'Маг',
        strength: -2,
        dexterity: -1,
        constitution: 1,
        wisdom: 1,
        intelligence: 5,
        charisma: 0,
        passiveAbility: {
            description: 'Магический щит: Увеличивает магическую защиту на 2 пункта.',
            effect: 'increaseMagicDefense'
        }
    },
    {
        name: 'Разбойник',
        strength: 2,
        dexterity: 5,
        constitution: 1,
        wisdom: -1,
        intelligence: 1,
        charisma: 3,
        passiveAbility: {
            description: 'Скрытность: Увеличивает шанс на скрытность.',
            effect: 'stealthChance'
        }
    },
    {
        name: 'Рыцарь',
        strength: 4,
        dexterity: 1,
        constitution: 5,
        wisdom: -2,
        intelligence: -1,
        charisma: 2,
        passiveAbility: {
            description: 'Благородная душа: Увеличивает харизму на 1 пункт.',
            effect: 'charismaBonus'
        }
    },
    {
        name: 'Бард',
        strength: 1,
        dexterity: 3,
        constitution: 2,
        wisdom: 2,
        intelligence: 2,
        charisma: 4,
        passiveAbility: {
            description: 'Вдохновение: Увеличивает урон от атак на 1 пункт.',
            effect: 'attackDamageBonus'
        }
    },
    {
        name: 'Следопыт',
        strength: 2,
        dexterity: 4,
        constitution: 2,
        wisdom: 3,
        intelligence: 1,
        charisma: 0,
        passiveAbility: {
            description: 'Проницательность: Увеличивает шансы на успех при исследовании и поисках.',
            effect: 'explorationSuccessChance'
        }
    },
    {
        name: 'Колдун',
        strength: -1,
        dexterity: 0,
        constitution: 2,
        wisdom: 3,
        intelligence: 4,
        charisma: 1,
        passiveAbility: {
            description: 'Тёмная магия: Увеличивает урон от темной магии на 1 пункт.',
            effect: 'darkMagicDamageBonus'
        }
    },
    {
        name: 'Охотник',
        strength: 3,
        dexterity: 4,
        constitution: 3,
        wisdom: 2,
        intelligence: 0,
        charisma: 1,
        passiveAbility: {
            description: 'Точность: Увеличивает точность стрельбы.',
            effect: 'rangedAccuracyBonus'
        }
    },
    {
        name: 'Жрец',
        strength: 1,
        dexterity: -1,
        constitution: 2,
        wisdom: 5,
        intelligence: 1,
        charisma: 3,
        passiveAbility: {
            description: 'Священное исцеление: Увеличивает эффективность лечения.',
            effect: 'healingBonus'
        }
    },
    {
        name: 'Друид',
        strength: 2,
        dexterity: 1,
        constitution: 3,
        wisdom: 4,
        intelligence: 2,
        charisma: 1,
        passiveAbility: {
            description: 'Единство с природой: Увеличивает шанс на успех при взаимодействии с природой.',
            effect: 'natureInteractionBonus'
        }
    },
    {
        name: 'Шаман',
        strength: 0,
        dexterity: 1,
        constitution: 2,
        wisdom: 4,
        intelligence: 2,
        charisma: 1,
        passiveAbility: {
            description: 'Тотемные силы: Увеличивает шанс на успех при использовании тотемов.',
            effect: 'totemBonus'
        }
    },
    {
        name: 'Варвар',
        strength: 5,
        dexterity: 0,
        constitution: 5,
        wisdom: -2,
        intelligence: -1,
        charisma: -1,
        passiveAbility: {
            description: 'Ярость: Временное увеличение атаки и защиты.',
            effect: 'rage'
        }
    },
    {
        name: 'Паладин',
        strength: 4,
        dexterity: 2,
        constitution: 4,
        wisdom: 3,
        intelligence: 0,
        charisma: 3,
        passiveAbility: {
            description: 'Святой щит: Увеличивает защиту от темных заклинаний.',
            effect: 'darkMagicDefenseBonus'
        }
    },
    {
        name: 'Алхимик',
        strength: 1,
        dexterity: -1,
        constitution: 2,
        wisdom: 2,
        intelligence: 4,
        charisma: 1,
        passiveAbility: {
            description: 'Яды и зелья: Увеличивает эффективность отравляющих и лечебных зелий.',
            effect: 'potionEffectivenessBonus'
        }
    },
    {
        name: 'Некромант',
        strength: -1,
        dexterity: -1,
        constitution: 1,
        wisdom: 2,
        intelligence: 5,
        charisma: -2,
        passiveAbility: {
            description: 'Сила смерти: Увеличивает урон от заклинаний некромантии.',
            effect: 'necromancyDamageBonus'
        }
    },
    {
        name: 'Инквизитор',
        strength: 2,
        dexterity: 1,
        constitution: 3,
        wisdom: 4,
        intelligence: 2,
        charisma: 2,
        passiveAbility: {
            description: 'Священная ярость: Увеличивает шанс на успех при очищении от нечисти.',
            effect: 'holyPurgeBonus'
        }
    },
    {
        name: 'Ассасин',
        strength: 1,
        dexterity: 5,
        constitution: 2,
        wisdom: -1,
        intelligence: 1,
        charisma: 2,
        passiveAbility: {
            description: 'Убийственное касание: Увеличивает урон от убийственных ударов.',
            effect: 'criticalStrikeBonus'
        }
    },
    {
        name: 'Страж',
        strength: 4,
        dexterity: 0,
        constitution: 5,
        wisdom: 2,
        intelligence: -1,
        charisma: 1,
        passiveAbility: {
            description: 'Несокрушимый: Увеличивает броню на 2 пункта.',
            effect: 'armorBonus'
        }
    },
    {
        name: 'Плут',
        strength: 1,
        dexterity: 4,
        constitution: 1,
        wisdom: 1,
        intelligence: 2,
        charisma: 3,
        passiveAbility: {
            description: 'Мастер обмана: Увеличивает шанс на успех при обмане и краже.',
            effect: 'deceitBonus'
        }
    },
    {
        name: 'Чародей',
        strength: -1,
        dexterity: 1,
        constitution: 2,
        wisdom: 1,
        intelligence: 4,
        charisma: 3,
        passiveAbility: {
            description: 'Сила волшебства: Увеличивает шанс на успех при заклинаниях.',
            effect: 'spellcastingBonus'
        }
    },
    {
        name: 'Жонглер',
        strength: 1,
        dexterity: 4,
        constitution: 1,
        wisdom: 1,
        intelligence: 2,
        charisma: 4,
        passiveAbility: {
            description: 'Искусство отвлечения: Увеличивает шанс на успех при отвлечении противников.',
            effect: 'distractionBonus'
        }
    },
    {
        name: 'Прорицатель',
        strength: -1,
        dexterity: -1,
        constitution: 1,
        wisdom: 5,
        intelligence: 3,
        charisma: 2,
        passiveAbility: {
            description: 'Видение будущего: Увеличивает шанс на успех при предсказании и определении событий.',
            effect: 'foresightBonus'
        }
    },
    {
        name: 'Архимаг',
        strength: -3,
        dexterity: -1,
        constitution: 1,
        wisdom: 2,
        intelligence: 6,
        charisma: -1,
        passiveAbility: {
            description: 'Магическое превосходство: Увеличивает урон от заклинаний на 2 пункта.',
            effect: 'spellcastingDamageBonus'
        }
    },
    {
        name: 'Гладиатор',
        strength: 5,
        dexterity: 3,
        constitution: 4,
        wisdom: -1,
        intelligence: -2,
        charisma: 1,
        passiveAbility: {
            description: 'Слава арены: Увеличивает шанс на успех при бою с несколькими противниками.',
            effect: 'multiTargetCombatBonus'
        }
    },
    {
        name: 'Оракул',
        strength: -1,
        dexterity: -1,
        constitution: 1,
        wisdom: 6,
        intelligence: 3,
        charisma: 3,
        passiveAbility: {
            description: 'Пророчество: Увеличивает шанс на успех при исцелении и защите от темных сил.',
            effect: 'healingAndProtectionBonus'
        }
    },
    {
        name: 'Демонолог',
        strength: -2,
        dexterity: 0,
        constitution: 2,
        wisdom: 2,
        intelligence: 5,
        charisma: -3,
        passiveAbility: {
            description: 'Темная сила: Увеличивает урон от темной магии на 2 пункта.',
            effect: 'darkMagicDamageBonus2'
        }
    },
    {
        name: 'Авантюрист',
        strength: 2,
        dexterity: 3,
        constitution: 2,
        wisdom: 2,
        intelligence: 2,
        charisma: 3,
        passiveAbility: {
            description: 'Удачливость: Увеличивает шанс на успех при использовании способностей.',
            effect: 'luckBonus'
        }
    },
    {
        name: 'Охотник за сокровищами',
        strength: 2,
        dexterity: 4,
        constitution: 2,
        wisdom: 1,
        intelligence: 2,
        charisma: 2,
        passiveAbility: {
            description: 'Чутье на богатство: Увеличивает шанс на успех при поиске сокровищ.',
            effect: 'treasureHuntBonus'
        }
    },
    {
        name: 'Исследователь',
        strength: 1,
        dexterity: 2,
        constitution: 2,
        wisdom: 3,
        intelligence: 3,
        charisma: 1,
        passiveAbility: {
            description: 'Любопытство: Увеличивает шанс на успех при изучении новых мест.',
            effect: 'explorationBonus'
        }
    },
    {
        name: 'Страж леса',
        strength: 3,
        dexterity: 3,
        constitution: 3,
        wisdom: 4,
        intelligence: 1,
        charisma: 0,
        passiveAbility: {
            description: 'Единство с природой: Увеличивает шанс на успех при взаимодействии с природой.',
            effect: 'natureInteractionBonus'
        }
    },
    {
        name: 'Нежить',
        strength: 3,
        dexterity: -1,
        constitution: 4,
        wisdom: -1,
        intelligence: -2,
        charisma: -3,
        passiveAbility: {
            description: 'Неуязвимость к боли: Уменьшает получаемый урон от физических атак на 1 пункт.',
            effect: 'reducePhysicalDamage'
        }
    },
    {
        name: 'Зверь',
        strength: 5,
        dexterity: 4,
        constitution: 5,
        wisdom: -1,
        intelligence: -2,
        charisma: -2,
        passiveAbility: {
            description: 'Дикая сила: Увеличивает урон от физических атак на 1 пункт.',
            effect: 'attackDamageBonus'
        }
    },
    {
        name: 'Дракон',
        strength: 6,
        dexterity: 2,
        constitution: 6,
        wisdom: 3,
        intelligence: 2,
        charisma: 1,
        passiveAbility: {
            description: 'Огненное дыхание: Увеличивает урон от огненных заклинаний на 2 пункта.',
            effect: 'fireDamageBonus'
        }
    }
];

// Функция для генерации случайного числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации характеристик персонажа с учетом роли
function generatePlayerCharacteristics(roleName) {
    const role = roles.find(r => r.name === roleName);

    if (role) {
        const characteristics = {};

        for (const characteristic in role) {
            if (characteristic !== 'name' && characteristic !== 'passiveAbility') {
                const deviation = getRandomInt(-2, 2);
                characteristics[characteristic] = Math.min(5, Math.max(-5, role[characteristic] + deviation));
            }
        }

        return characteristics;
    } else {
        return {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            wisdom: 0,
            intelligence: 0,
            charisma: 0
        };
    }
}

// Функция для получения пассивной способности персонажа по роли
function generatePassiveAbility(roleName) {
    const role = roles.find(r => r.name === roleName);

    if (role && role.passiveAbility) {
        return role.passiveAbility;
    } else {
        return { description: 'Нет уникальной способности', effect: 'none' };
    }
}

let currentPart = 0;
let currentPlayer = 1;
const totalPlayers = 4;
const apiKey = 'AIzaSyAm_elTp1qDKPHTZf_KmTw9eucaDGgu_xw'; // Замените YOUR_API_KEY на ваш ключ API

// Функция для обновления текста истории и генерации изображения
async function updateStory() {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');

    if (currentPart < storyParts.length) {
        storyText.innerText = storyParts[currentPart];

        // Вызов API для генерации изображения
        const imageUrl = await generateImage(storyParts[currentPart]);
        if (imageUrl) {
            storyImage.src = imageUrl;
            storyImage.style.display = 'block';
        }

        currentPart++;
        document.getElementById('action-section').style.display = 'block';
        document.getElementById('player-prompt').innerText = `Игрок ${currentPlayer}, ваш ход. Опишите ваше действие:`;
    } else {
        storyText.innerText = "Конец истории. Спасибо за игру!";
        storyImage.style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
    }
}

// Функция для вызова API генерации изображения
async function generateImage(prompt) {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: '1024x1024'
        })
    });

    const data = await response.json();
    if (data && data.data && data.data[0] && data.data[0].url) {
        return data.data[0].url;
    }

    return null;
}

// Функция для генерации сложности действия с помощью нейросети
async function getActionDifficulty(action) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Оцени сложность следующего действия по шкале от 1 до 20: ${action}`,
            max_tokens: 10,
            n: 1,
            stop: null,
            temperature: 0.5
        })
    });

    const data = await response.json();
    if (data && data.choices && data.choices[0] && data.choices[0].text) {
        return parseInt(data.choices[0].text.trim(), 10);
    }

    return null;
}

// Функция для броска 20-гранного кубика
function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}

// Функция для обработки действия игрока
async function handlePlayerAction() {
    const action = document.getElementById('player-action').value;
    const difficulty = await getActionDifficulty(action);
    const roll = rollDice();

    let resultText = `Игрок ${currentPlayer} пытается: "${action}".\nСложность: ${difficulty}.\nБросок кубика: ${roll}.`;

    if (roll >= difficulty) {
        resultText += '\nДействие успешно!';
    } else {
        resultText += '\nДействие не удалось.';
    }

    if (action.includes('атак')) {
        const attackRoll = rollDice();
        resultText += `\nБросок для атаки: ${attackRoll}.`;
        if (attackRoll >= difficulty) {
            const damageRoll = rollDice();
            resultText += `\nАтака успешна! Нанесено урона: ${damageRoll}.`;
        } else {
            resultText += '\nАтака не попала.';
        }
    }

    document.getElementById('action-result').innerText = resultText;

    // Переход к следующему игроку
    currentPlayer = (currentPlayer % totalPlayers) + 1;
    document.getElementById('player-prompt').innerText = `Игрок ${currentPlayer}, ваш ход. Опишите ваше действие:`;
}

// Функция для запуска игры
function startGame() {
  // Скрываем кнопку "Начать игру"
  document.getElementById('start-section').style.display = 'none';

  // Отображаем секцию игры
  document.getElementById('game-section').style.display = 'block';

  // Начинаем игру, отображая первую часть истории
  updateStory(); 
}

// Добавление обработчика событий для кнопки "Начать игру"
document.getElementById('start-game-button').addEventListener('click', startGame);

// Добавление обработчика событий для кнопки
document.getElementById('next-button').addEventListener('click', updateStory);
document.getElementById('action-button').addEventListener('click', handlePlayerAction);
