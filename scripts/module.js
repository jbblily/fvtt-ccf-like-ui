// 발화자 색깔을 플레이어 색깔로 변경하는 스크립트

Hooks.on("renderChatMessage", (app, html, data) => {
  // 메시지의 userId 가져오기
  const userId = data.message.user?.id ?? data.message.user;
  if (!userId) return;

  // 해당 유저의 색상 가져오기 (없으면 기본값)
  const playerColor = game.users.get(userId)?.color ?? "#e7b1d1";

  // sender 관련 요소에 CSS 변수 할당
  html.find('.message-sender').each(function() {
    this.style.setProperty('--player-color', playerColor);
  });
});
