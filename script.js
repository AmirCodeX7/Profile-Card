// function followMe() {
//     const msg = document.getElementById('popupMessage');
//     msg.innerText = "Welcome to AmirCodeX follower's!";
//     msg.style.display = 'block'; // نمایش پیام

//     // بعد از 3.5 ثانیه پیام محو شود
//     setTimeout(() => {
//         msg.style.display = 'none';
//     }, 3500);
// }


// const followersElement = document.getElementById('followersValue');

// let currentFollowers = parseInt(followersElement.innerText);

// currentFollowers += 1;

// followersElement.innerText=currentFollowers.toString();

function followMe() {
    const followButton = document.querySelector('.follow');
    const msg = document.getElementById('popupMessage');
    const followersElement = document.getElementById('followersValue');
    
    // اگر دکمه در حال حاضر "follow" است، عملیات را انجام بده
    if (followButton.innerText.toLowerCase() === 'follow') {
        
        // 1. تغییر حالت دکمه به "Following"
        followButton.innerText = 'Following';
        followButton.style.backgroundColor = '#585858'; // تغییر رنگ دکمه
        followButton.style.boxShadow = 'inset 5px 5px 10px #0f1214, inset -5px -5px 10px #272c32'; // اعمال استایل in-set برای حالت فعال
        followButton.style.color = '#fff';
        
        // 2. افزایش تعداد Followers 
        let currentFollowers = parseInt(followersElement.innerText);
        currentFollowers += 1; 
        followersElement.innerText = currentFollowers.toString();
        
        // 3. نمایش پیام
        msg.innerText = "Welcome to AmirCodeX follower's!";
        msg.style.display = 'block';

        // 4. محو شدن پیام بعد از 3.5 ثانیه
        setTimeout(() => {
            msg.style.display = 'none';
        }, 3500);

    } else {
        // اگر دکمه قبلاً فشرده شده (حالت Following)
        msg.innerText = "You are already following!";
        msg.style.backgroundColor = '#A31D1D'; // رنگ متفاوت برای پیام خطا
        msg.style.display = 'block';
        
        setTimeout(() => {
            msg.style.display = 'none';
            msg.style.backgroundColor = '#008337'; // بازگشت به رنگ اصلی
        }, 3500);
    }
}