import { Chat } from 'twitch-js';
async function run() {
  const chat = new Chat({});
  await chat.connect();
  await chat.join('mhartington');

  chat.on('*', () => {
    console.log('new event');
  });
}
run();
