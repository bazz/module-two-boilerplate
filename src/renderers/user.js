export function renderUsername(account) {
  return `
    <div class="search-results_item" data-account-id="${account.account_id}">
      ${account.nickname}
    </div>
  `;
}

export function renderUserStat(info) {
  const { nickname } = info;
  const stats = info.statistics.all;
  const winRate = stats.battles ? (stats.wins / (stats.battles * 100)) : 0;

  return `
    <h2>${nickname}</h2>
    <div class="search-results_item">
      Количество боев: ${stats.battles}<br>
      Победы: ${stats.wins}<br>
      Процент побед: ${Math.floor(winRate)}%<br>
      Суммарный опыт: ${stats.xp}<br>
      Средний опыт за бой: ${stats.battle_avg_xp}<br>
      Нанесено повреждений: ${stats.damage_dealt}
    </div>
  `;
}

export function renderUserInfo(node, statistics) {
  const element = node;
  const results = renderUserStat(statistics);
  element.innerHTML = results;
}
