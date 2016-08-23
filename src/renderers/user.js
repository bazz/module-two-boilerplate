export function renderUsername(account) {
  return `
    <a href="#" class="search-results_item list-group-item" data-account-id="${account.account_id}">
      ${account.nickname}
    </a>
  `;
}

export function renderUserStat(info) {
  const { nickname } = info;
  const stats = info.statistics.all;
  const winRate = stats.battles ? (stats.wins / (stats.battles * 100)) : 0;

  return `
    <div class="well well-lg">
      <h3><span class="glyphicon glyphicon-user"></span> ${nickname}</h3>
      <div class="search-results_item">
        Количество боев: ${stats.battles}<br>
        Победы: ${stats.wins}<br>
        Процент побед: ${Math.floor(winRate)}%<br>
        Суммарный опыт: ${stats.xp}<br>
        Средний опыт за бой: ${stats.battle_avg_xp}<br>
        Нанесено повреждений: ${stats.damage_dealt}
      </div>
    </div>
  `;
}

export function renderUserInfo(node, statistics) {
  const element = node;
  const results = renderUserStat(statistics);
  element.innerHTML = results;
}
