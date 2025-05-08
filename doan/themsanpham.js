document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
      // Sau này có thể tích hợp localStorage hoặc gửi lên server ở đây
    });
  });
