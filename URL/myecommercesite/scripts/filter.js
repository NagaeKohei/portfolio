$(document).ready(function() {
  // URLパラメータから地域を取得
  const urlParams = new URLSearchParams(window.location.search);
  const initialRegion = urlParams.get('region') || 'all';

  // フィルタリング関数
  function filterProducts(region) {
    if (region === 'all') {
      $('.products-list li').show().animate({ opacity: 1 }, 300);
    } else {
      $('.products-list li').each(function() {
        const $this = $(this);
        $this.animate({ opacity: 0 }, 300, function() {
          if ($this.hasClass(region)) {
            $this.show().animate({ opacity: 1 }, 300);
          } else {
            $this.hide();
          }
        });
      });
    }
  }

  // 初期フィルタリング
  filterProducts(initialRegion);

  // カテゴリフィルタの変更イベント
  $('#category-filter').change(function() {
    const selectedRegion = $(this).val();
    filterProducts(selectedRegion);
  });
});
