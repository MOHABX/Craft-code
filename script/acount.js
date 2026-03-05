// العناصر
const btnLogin = document.getElementById('btn-login');
const btnDrSignup = document.getElementById('btn-dr-signup');
const btnStSignup = document.getElementById('btn-st-signup');
const backBtn = document.getElementById('back-to-login');
const goToSignupLink = document.getElementById('go-to-signup');

const logForm = document.getElementById('log');
const drForm = document.getElementById('sign_dr');
const stForm = document.getElementById('sign_st');

// دالة لتبديل حالة السايد بار (لوجين أو اشتراك)
function setMode(mode) {
    if (mode === 'signup') {
        // إخفاء زرار اللوجين وإظهار خيارات الاشتراك
        btnLogin.classList.add('hidden');
        btnDrSignup.classList.remove('hidden');
        btnStSignup.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        
        // إظهار فورم المدرب كخيار افتراضي
        switchForm(drForm, btnDrSignup);
    } else {
        // العودة لحالة اللوجين
        btnLogin.classList.remove('hidden');
        btnDrSignup.classList.add('hidden');
        btnStSignup.classList.add('hidden');
        backBtn.classList.add('hidden');
        
        switchForm(logForm, btnLogin);
    }
}

// دالة التبديل بين الفورمز
function switchForm(targetForm, targetBtn) {
    // إخفاء الكل
    [logForm, drForm, stForm].forEach(f => f.style.display = 'none');
    [btnLogin, btnDrSignup, btnStSignup].forEach(b => b.classList.remove('active'));
    
    // إظهار المختار
    targetForm.style.display = 'block';
    targetBtn.classList.add('active');
}

// الأحداث (Events)
goToSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    setMode('signup');
});

backBtn.addEventListener('click', () => {
    setMode('login');
});

btnDrSignup.addEventListener('click', () => switchForm(drForm, btnDrSignup));
btnStSignup.addEventListener('click', () => switchForm(stForm, btnStSignup));
btnLogin.addEventListener('click', () => switchForm(logForm, btnLogin));