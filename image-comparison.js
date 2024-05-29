document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.getElementById('sliderWrapper');
  const sliderImageWrapper = document.getElementById('sliderImageWrapper');
  const sliderHandle = document.getElementById('sliderHandle');

  let isDragging = false;

  const startDragging = () => {
    isDragging = true;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  const onMouseMove = (event) => {
    if (!isDragging) return;

    const rect = sliderWrapper.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    sliderImageWrapper.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    sliderHandle.style.left = `calc(${percent}% - 1px)`;
  };

  const onTouchMove = (event) => {
    if (!isDragging) return;

    const rect = sliderWrapper.getBoundingClientRect();
    const touch = event.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    sliderImageWrapper.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    sliderHandle.style.left = `calc(${percent}% - 1px)`;
  };

  sliderHandle.addEventListener('mousedown', startDragging);
  sliderHandle.addEventListener('touchstart', startDragging);

  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchend', stopDragging);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onTouchMove);
});
