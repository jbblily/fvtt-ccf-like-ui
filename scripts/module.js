// Foundry VTT의 renderChatMessage hook을 사용한 예시

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

// FVTT의 sidebar 배경색을 CSS 변수로 할당

Hooks.once("ready", () => {
  // FVTT에서 sidebar 배경색 가져오기 (예시: core 테마 설정)
  // 실제 값은 테마에 따라 다를 수 있으니, 필요시 콘솔에서 확인
  const sidebarBg = getComputedStyle(document.querySelector("#sidebar")).backgroundColor || "#2c2c2cde";
  document.body.style.setProperty('--sidebar-background', sidebarBg);
});