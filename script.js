const open_wn_bt = document.getElementById('bt_burger');
const close_wn_bt = document.getElementById('close_wn_bt');
const popup_wn = document.getElementById('popup_window');

open_wn_bt.addEventListener('click', () => {
    popup_wn.classList.remove('hidden');
});

close_wn_bt.addEventListener('click', () => {
    popup_wn.classList.add('hidden');
});