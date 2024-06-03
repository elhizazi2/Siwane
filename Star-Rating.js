<script>
// إنشاء النجوم بواسطة elhizazi1
const starsDiv = document.querySelector('.stars');
for (let i = 1; i <= 5; i++) {
    const starSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    starSVG.setAttribute('class', `stars-svg star${i}`);
    starSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    starSVG.setAttribute('viewBox', '0 0 24 24');
    starSVG.innerHTML = `<g><path d='M179.91029,187.1513l-1.8587,1.01868a2.04864,2.04864,0,0,1-3.01773-2.10788l.42672-2.59362a4.04634,4.04634,0,0,0-1.11291-3.4963l-1.86665-1.89681a2.02973,2.02973,0,0,1,1.15871-3.4316l2.32027-.35147a4.1,4.1,0,0,0,3.095-2.29318l1.20167-2.53825a1.81714,1.81714,0,0,1,3.27783,0l1.20167,2.53825a4.1,4.1,0,0,0,3.095,2.29318l2.32027.35147a2.02973,2.02973,0,0,1,1.15871,3.4316l-1.86665,1.89681a4.04634,4.04634,0,0,0-1.11291,3.4963l.42672,2.59362a2.04864,2.04864,0,0,1-3.01773,2.10788l-1.8587-1.01868A4.13465,4.13465,0,0,0,179.91029,187.1513Z' transform='translate(-169.8956 -166.42856)'></path></g>`;
    starsDiv.appendChild(starSVG);
}

// تحديد العناصر
const stars = document.querySelectorAll('.stars-svg');
const resultRating = document.querySelector('.result-rating');
const alreadyRated = document.querySelector('.alreadyRt');
let ratingValue = 0;

// استعادة التقييم من مخزن المتصفح إذا كان متاحًا
document.addEventListener('DOMContentLoaded', () => {
    const storedRating = localStorage.getItem('userRating');
    if (storedRating) {
        ratingValue = parseInt(storedRating);
        updateStars();
    }
});

// تفاعل مع تقييم النجوم
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const starValue = index + 1;
        ratingValue = starValue;
        updateStars();
        localStorage.setItem('userRating', ratingValue);
    });
});

// تحديث النجوم والرسالة بناءً على التقييم المختار
function updateStars() {
    switch (ratingValue) {
        case 1:
            resultRating.textContent = `شكرا لقد أعطيت تقييما عدده ${ratingValue} نجمة`;
            break;
        case 2:
            resultRating.textContent = `شكرا لقد أعطيت تقييما عدده ${ratingValue} 🌟 نجمات`;
            break;
        case 3:
            resultRating.textContent = `🥳 رائع! لقد أعطيت تقييما عدده ${ratingValue} 🌟 نجمات`;
            break;
        case 4:
        case 5:
            resultRating.textContent = `🥳 رائع! لقد أعطيت تقييما عدده ${ratingValue} 🌟 نجمات`;
            break;
        case 4:
        case 5:
            resultRating.textContent = `🥳 🎉 رائع! لقد أعطيت تقييما عدده ${ratingValue} 🌟 نجمات`;
            break;
        default:
            resultRating.textContent = '';
    }
    
    alreadyRated.style.display = 'block';
    alreadyRated.setAttribute('aria-label', resultRating.textContent);
    
    // تحديث ألوان النجوم
    stars.forEach((s, i) => {
        if (i < ratingValue) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}
</script>
