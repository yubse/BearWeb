// 轮播Banner功能
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerPrev = document.querySelector('.banner-controls .prev');
const bannerNext = document.querySelector('.banner-controls .next');
let currentSlide = 0;
let isLooping = true;

function updateBannerSlide() {
    bannerSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

bannerPrev.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateBannerSlide();
    }
});

bannerNext.addEventListener('click', () => {
    if (currentSlide < bannerSlides.length - 1) {
        currentSlide++;
        updateBannerSlide();
    } else {
        // 当到达最后一张时，重新从第一张开始
        currentSlide = 0;
        updateBannerSlide();
    }
});

// 自动轮播
setInterval(() => {
    if (currentSlide < bannerSlides.length - 1) {
        currentSlide++;
    } else {
        // 当到达最后一张时，重新从第一张开始
        currentSlide = 0;
    }
    updateBannerSlide();
}, 5000);

// 角色轮播功能
const characterSlider = document.querySelector('.character-slider');
const characterPrev = document.querySelector('.characters .slider-controls .prev');
const characterNext = document.querySelector('.characters .slider-controls .next');
const progressBar = document.querySelector('.characters .progress-fill');
const slideWidth = 270; // 每个slide的宽度 + gap

// 移除transform样式，使用scroll方法
characterSlider.style.transform = '';
characterSlider.style.overflowX = 'auto';

// 监听滚动事件，更新进度条
characterSlider.addEventListener('scroll', () => {
    const scrollLeft = characterSlider.scrollLeft;
    const scrollWidth = characterSlider.scrollWidth;
    const clientWidth = characterSlider.clientWidth;
    
    // 更新进度条
    if (scrollWidth > clientWidth) {
        const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    } else {
        progressBar.style.width = '0%';
    }
});

// 左按钮点击事件
characterPrev.addEventListener('click', () => {
    characterSlider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});

// 右按钮点击事件
characterNext.addEventListener('click', () => {
    characterSlider.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

// 初始化进度条
setTimeout(() => {
    const scrollLeft = characterSlider.scrollLeft;
    const scrollWidth = characterSlider.scrollWidth;
    const clientWidth = characterSlider.clientWidth;
    
    if (scrollWidth > clientWidth) {
        // 设置初始进度条宽度为10%
        progressBar.style.width = '10%';
    } else {
        progressBar.style.width = '0%';
    }
}, 100);

// 最佳卖家轮播功能
const bestSellersSlider = document.querySelector('.best-sellers .product-grid');
const bestSellersPrev = document.querySelector('.best-sellers .slider-controls .prev');
const bestSellersNext = document.querySelector('.best-sellers .slider-controls .next');
let bestSellersPosition = 0;

bestSellersPrev.addEventListener('click', () => {
    bestSellersPosition = Math.min(bestSellersPosition + 330, 0);
    bestSellersSlider.style.transform = `translateX(${bestSellersPosition}px)`;
});

bestSellersNext.addEventListener('click', () => {
    const maxScroll = bestSellersSlider.scrollWidth - bestSellersSlider.clientWidth;
    bestSellersPosition = Math.max(bestSellersPosition - 330, -maxScroll);
    bestSellersSlider.style.transform = `translateX(${bestSellersPosition}px)`;
});

// 展会卡片悬停效果
const exhibitionCards = document.querySelectorAll('.exhibition-card');
exhibitionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.exhibition-overlay').style.transform = 'translateY(0)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.exhibition-overlay').style.transform = 'translateY(100%)';
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// About Us 滑块功能
const aboutSlider = document.querySelector('.about-slider');
const aboutProgressBar = document.querySelector('.about-slider-container .progress-fill');

// 监听滚动事件，更新进度条
if (aboutSlider) {
    aboutSlider.addEventListener('scroll', () => {
        const scrollLeft = aboutSlider.scrollLeft;
        const scrollWidth = aboutSlider.scrollWidth;
        const clientWidth = aboutSlider.clientWidth;
        
        // 更新进度条
        if (scrollWidth > clientWidth) {
            const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            aboutProgressBar.style.width = `${scrollPercentage}%`;
        } else {
            aboutProgressBar.style.width = '0%';
        }
    });
    
    // 初始化进度条
    setTimeout(() => {
        const scrollLeft = aboutSlider.scrollLeft;
        const scrollWidth = aboutSlider.scrollWidth;
        const clientWidth = aboutSlider.clientWidth;
        
        if (scrollWidth > clientWidth) {
            // 设置初始进度条宽度为10%
            aboutProgressBar.style.width = '10%';
        } else {
            aboutProgressBar.style.width = '0%';
        }
    }, 100);
}