function GameState() {
  const gameStatus = document.querySelector('#game-status');
  /* let botThinking = true; */

  let thinking = false;
  const isThinking = () => thinking;
  return {
    thinking: async (ms) => {
      gameStatus.innerHTML = 'bot turns';
      await new Promise((resolve) => {
        setTimeout(() => {
          gameStatus.innerHTML = 'player 1 turns';
          thinking = false;
          resolve();
        }, ms);
      });
    },
    isThinking,
  };
}

module.exports = GameState;
