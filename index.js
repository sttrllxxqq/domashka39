// 39
const emojis = {
    '😃': 0,
    '😊': 0,
    '🙂': 0,
    '😐': 0,
    '😕': 0
  };

  function updateResults() {
    const votingResultsDiv = document.getElementById('voting-results');
    votingResultsDiv.innerHTML = '';

    for (const emoji in emojis) {
      const count = emojis[emoji];
      const emojiDiv = document.createElement('div');
      emojiDiv.innerHTML = `<span class="emoji" onclick="vote('${emoji}')">${emoji}</span> ${count}`;
      votingResultsDiv.appendChild(emojiDiv);
    }
  }

  function vote(emoji) {
    emojis[emoji]++;
    updateResults();
  }

  updateResults();