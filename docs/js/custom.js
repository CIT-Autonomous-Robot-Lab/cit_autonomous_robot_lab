document.addEventListener('DOMContentLoaded', () => {
  const animBoxes = document.querySelectorAll('.anim-box');

  // マウス位置の追跡
  let mouseX = -1; // 初期値を無効な位置に設定
  let mouseY = -1; // 初期値を無効な位置に設定

  document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      handleMouseEffects();
  });

  // マウスがウィンドウ外に出たとき
  document.addEventListener('mouseout', (event) => {
      if (!event.relatedTarget && !event.toElement) {
          mouseX = -1;
          mouseY = -1;
          handleMouseEffects(); // マウスがウィンドウ外に出たことを検出
      }
  });

  // スクロール時に要素の位置を更新
  window.addEventListener('scroll', handleMouseEffects);

  function handleMouseEffects() {
    // すべてのanim-boxを初期化

    // 現在のマウス位置に基づいて状態を更新
    animBoxes.forEach(animBox => {
        const boxRect = animBox.getBoundingClientRect();
        if (mouseX >= boxRect.left && mouseX <= boxRect.right && mouseY >= boxRect.top && mouseY <= boxRect.bottom) {
            animBox.style.transform = 'scale(1.05)';
            animBox.classList.add('kiran-active');  // kiran効果をアクティブ化
        }
    });
}

// すべてのanim-boxを非アクティブ状態にリセットする関数
function resetAllAnimBoxes() {
    animBoxes.forEach(animBox => {
        animBox.style.transform = 'scale(1)';
        animBox.classList.remove('kiran-active');  // すべてのkiran効果を非アクティブ化
    });
}
});
