(function () {
  // ボタンと本体
  const openButton =
    document.querySelector<HTMLButtonElement>('.js-openDrawer');
  const drawer = document.querySelector<HTMLDivElement>('.js-drawer');
  const closeButton =
    drawer!.querySelector<HTMLButtonElement>('.js-closeDrawer');
  const backdrop = drawer!.querySelector<HTMLDivElement>('.js-backdrop');

  // 現在の状態（開いていたらtrue）
  let drawerOpen = false;

  // stateは真偽値
  function changeAriaExpanded(state: boolean) {
    const value = state ? 'true' : 'false';
    drawer!.setAttribute('aria-expanded', value);
    openButton!.setAttribute('aria-expanded', value);
    closeButton!.setAttribute('aria-expanded', value);
  }

  // stateは真偽値
  function changeState(state: boolean) {
    if (state === drawerOpen) {
      console.log('2回以上連続で同じ状態に変更しようとしました');
      return;
    }
    changeAriaExpanded(state);
    drawerOpen = state;
  }

  function openDrawer() {
    changeState(true);
  }

  function closeDrawer() {
    changeState(false);
  }

  function onClickOpenButton() {
    openDrawer();
  }

  function onClickCloseButton() {
    closeDrawer();
  }

  openButton!.addEventListener('click', onClickOpenButton, false);
  closeButton!.addEventListener('click', onClickCloseButton, false);
  backdrop!.addEventListener('click', onClickCloseButton, false);
})();
