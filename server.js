//6342707997:AAFMMwIGpslceGPpknRdHwASY5xZAW4g168


require('./config/DbConnect')

const User = require("./model/User")

const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your own bot token obtained from BotFather
const token = '6342707997:AAFMMwIGpslceGPpknRdHwASY5xZAW4g168';

// Replace BASE_URL_HERE with the base URL you want to use
const baseUrl = 'https://api.telegram.org';

// Create a new bot instance with the custom base URL
const bot = new TelegramBot(token, { polling: true, baseUrl: baseUrl });

// Define your bot's commands
const commands = [
    { command: '/category', description: 'Create category' },
    { command: '/help', description: 'Get help' },
    { command: '/about', description: 'About the bot' },

];

// Set your bot's commands
bot.setMyCommands(commands);




bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const user = new User({chatId})
    user.save().then(() => {
        bot.sendMessage(chatId, 'Welcome to my bot!');
    }).catch(err => {
        bot.sendMessage(chatId, 'user already exists!');
    })
});




bot.onText(/\/category/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Select the category", {
        reply_markup: {
            keyboard: [['ساخته دسته بندی'], ['لیست تمام دسته بندی ها']],
            resize_keyboard: true,
        }
    });
});

bot.onText(/ساخته دسته بندی/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "نام دسته بندی مورد نظر خود را وارد کنید :");




});




// Listen for the /help command
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'How can I help you?' , {
        reply_markup : {
            remove_keyboard: true
        }
    });
});

// Listen for the /about command
bot.onText(/\/about/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'This bot was created by me!' , {
        reply_markup : {
            remove_keyboard: true
        }
    });
});




// Listen for the /restart command
