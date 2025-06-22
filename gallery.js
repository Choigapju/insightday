document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.gallery-item-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!wrapper || !prevBtn || !nextBtn) {
        return;
    }

    const itemWidth = () => {
        // 첫 번째 비디오 아이템의 너비를 기준으로 계산
        const firstItem = wrapper.querySelector('.gallery-item');
        return firstItem ? firstItem.clientWidth : 0;
    };

    nextBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: itemWidth(),
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: -itemWidth(),
            behavior: 'smooth'
        });
    });
}); 