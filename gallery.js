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

    // Scroll down arrow functionality
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    const videoGallery = document.getElementById('video-gallery');

    if (scrollDownBtn && videoGallery) {
        scrollDownBtn.addEventListener('click', () => {
            videoGallery.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 전시회 갤러리 이미지 클릭 시 확대 모달 기능
    const galleryImages = document.querySelectorAll('.exhibition-gallery-grid img');
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');
    const modalClose = document.querySelector('.img-modal-close');

    if (galleryImages.length > 0 && modal && modalImg && modalClose) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            });
        });

        modalClose.onclick = function() {
            modal.style.display = 'none';
            modalImg.src = '';
        };

        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                modalImg.src = '';
            }
        };
    }
}); 