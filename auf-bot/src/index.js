process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const texts = {
    en: {
        start: "AUF, bro! You can choose the language in which I will talk to you or just click on the menu and start!:",
        menu: "AUF, wolf! Remember, otherwise you will forget! You will write AUF quotes and decide whether AUF quotes from other wolves are enough. For voting you will receive AUF coins, and the best quotes of the week will receive much more. Don't forget to subscribe to our channel. Auf☝☝☝",
        joinCommunity: "Join Community",
        launchApp: "Launch App",
        chooseLanguage: "Choose your language:",
        languageSet: "Language set to English",
        balance: "Please send your TON address.",
        back: "Back",
        language: "Language",
        menuButton: "Menu"
    },
    ru: {
        start: "АУФ, братан! Можешь выбрать язык на котором я стобой буду базарить или сразу тыкнуть на меню и начать!",
        menu: "АУФ, волк! Запомни, а то забудешь! Ты будешь писать АУФ цитаты и решать достаточно ли АУФ цитаты других волков. За голосование ты будешь получать AUF coins, а лучшие цитаты недели будут получать куда больше. Не забудь подписаться на наш канал. Ауф☝☝☝",
        joinCommunity: "Присоединиться к сообществу",
        launchApp: "Запустить приложение",
        chooseLanguage: "Выберите ваш язык:",
        languageSet: "Язык установлен на Русский",
        balance: "Пожалуйста, отправьте ваш адрес TON.",
        back: "Назад",
        language: "Язык",
        menuButton: "Меню"
    }
};

let userLanguage = {};

bot.onText(/\/start/, (msg) => {
    sendStart(msg.chat.id);
});

bot.onText(/\/menu/, (msg) => {
    sendMenu(msg.chat.id);
});

bot.onText(/\/language/, (msg) => {
    sendLanguageSelection(msg.chat.id);
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message.chat.id;
    const data = callbackQuery.data;

    bot.deleteMessage(chatId, message.message_id);

    if (data.startsWith('lang_')) {
        const langCode = data.split('_')[1];
        userLanguage[chatId] = langCode;
        bot.sendMessage(chatId, texts[langCode].languageSet).then(() => {
            sendMenu(chatId);
        });
    } else if (data === 'show_language') {
        sendLanguageSelection(chatId);
    } else if (data === 'show_menu') {
        sendMenu(chatId);
    } else if (data === 'show_start') {
        sendStart(chatId);
    }
});

function sendStart(chatId) {
    const lang = userLanguage[chatId] || 'en';
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: texts[lang].language, callback_data: 'show_language' }],
                [{ text: texts[lang].menuButton, callback_data: 'show_menu' }]
            ]
        }
    };
    bot.sendMessage(chatId, texts[lang].start, opts);
}

function sendMenu(chatId) {
    const lang = userLanguage[chatId] || 'en';
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: texts[lang].joinCommunity, url: 'https://t.me/aufcoincommunity' }],
                [{ text: texts[lang].launchApp, web_app: { url: 'auf-web-app.vercel.app' } }],
                [{ text: texts[lang].back, callback_data: 'show_start' }]
            ]
        }
    };
    bot.sendMessage(chatId, texts[lang].menu, opts);
}

function sendLanguageSelection(chatId) {
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'English', callback_data: 'lang_en' }],
                [{ text: 'Русский', callback_data: 'lang_ru' }]
            ]
        }
    };
    bot.sendMessage(chatId, texts[userLanguage[chatId] || 'en'].chooseLanguage, opts);
}

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text !== '/start' && text !== '/menu' && text !== '/language') {
        const response = await getBalance(text);
        bot.sendMessage(chatId, response);
    }
});

async function getBalance(address) {
    // Implement your getBalance function here
    return `Mock balance for ${address}`;
}

bot.on('polling_error', (error) => {
    console.log(error);
});

 