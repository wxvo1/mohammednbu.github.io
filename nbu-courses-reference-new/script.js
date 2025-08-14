// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// تهيئة التطبيق
function initializeApp() {
    loadColleges();
    setupNavigation();
    setupSearch();
    populateFilters();
    setupScrollEffects();
}

// تحميل الكليات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadColleges();
});

// تحميل الكليات
function loadColleges() {
    const collegesGrid = document.getElementById('collegesGrid');
    if (!collegesGrid) return;
    
    collegesGrid.innerHTML = '';
    
    universitData.colleges.forEach(college => {
        const collegeCard = createCollegeCard(college);
        collegesGrid.appendChild(collegeCard);
    });
}

// إنشاء بطاقة كلية
function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    // إذا كان هناك رابط جوجل درايف، اربط البطاقة به مباشرة
    if (college.driveLink) {
        card.onclick = () => window.open(college.driveLink, '_blank');
        card.style.cursor = 'pointer';
    } else {
        card.onclick = () => showCollegeDetails(college);
    }
    
    card.innerHTML = `
        <div class="college-header">
            <div class="college-icon">
                <i class="${college.icon}"></i>
            </div>
            <h3 class="college-title">${college.name}</h3>
        </div>
    `;
    
    return card;
}

// الحصول على عدد الطلاب التقديري للكلية
function getCollegeStudentCount(collegeId) {
    const counts = {
        'sciences': '850',
        'pharmacy': '420',
        'nursing': '380',
        'design_arts': '290',
        'engineering': '950',
        'medicine': '680',
        'applied': '720',
        'computing': '1200',
        'humanities': '1400',
        'business': '1800'
    };
    return counts[collegeId] || '500';
}

// عرض تفاصيل الكلية (مبسطة بدون أقسام ومقررات)
function showCollegeDetails(college) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = college.name;
    
    const driveSection = `
        <div class="drive-section">
            <h4><i class="fas fa-cloud"></i> رابط جوجل درايف</h4>
            <a href="#" class="drive-link" onclick="alert('انقر هنا')">انقر هنا</a>
        </div>`;
    
    modalBody.innerHTML = `
        <div class="college-overview">
            <p class="college-description">${college.description}</p>
            ${driveSection}
        </div>
    `;
    
    modal.style.display = 'block';
}

// عرض تفاصيل المقرر
function showCourseDetails(courseCode) {
    const course = getCourseByCode(courseCode);
    if (!course) return;
    
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = `تفاصيل المقرر: ${course.name}`;
    
    const prerequisites = course.prerequisites.length > 0 
        ? course.prerequisites.map(pre => `<span class="prerequisite-tag">${pre}</span>`).join('')
        : '<span class="no-prerequisites">لا توجد متطلبات سابقة</span>';
    
    modalBody.innerHTML = `
        <div class="course-modal-content">
            <div class="course-basic-info">
                <div class="course-info-grid">
                    <div class="course-info-item">
                        <i class="fas fa-code"></i>
                        <span class="info-label">رمز المقرر:</span>
                        <span class="info-value">${course.code}</span>
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-university"></i>
                        <span class="info-label">الكلية:</span>
                        <span class="info-value">${course.college}</span>
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-building"></i>
                        <span class="info-label">القسم:</span>
                        <span class="info-value">${course.department}</span>
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-layer-group"></i>
                        <span class="info-label">المستوى:</span>
                        <span class="info-value">المستوى ${course.level}</span>
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-clock"></i>
                        <span class="info-label">الساعات المعتمدة:</span>
                        <span class="info-value">${course.credits} ساعات</span>
                    </div>
                </div>
            </div>
            
            <div class="course-description">
                <h4><i class="fas fa-align-left"></i> وصف المقرر</h4>
                <p>${course.description}</p>
            </div>
            
            <div class="course-prerequisites">
                <h4><i class="fas fa-list-check"></i> المتطلبات السابقة</h4>
                <div class="prerequisites-list">
                    ${prerequisites}
                </div>
            </div>
        </div>
    `;
}

// إعداد التنقل
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة الفئة النشطة من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة الفئة النشطة للرابط المحدد
            this.classList.add('active');
            
            // التمرير إلى القسم المحدد
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// التمرير إلى قسم معين
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// إعداد البحث
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const collegeFilter = document.getElementById('collegeFilter');
    const levelFilter = document.getElementById('levelFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
    
    if (collegeFilter) {
        collegeFilter.addEventListener('change', performSearch);
    }
    
    if (levelFilter) {
        levelFilter.addEventListener('change', performSearch);
    }
}

// تنفيذ البحث
function performSearch() {
    const query = document.getElementById('searchInput').value;
    const collegeFilter = document.getElementById('collegeFilter').value;
    const levelFilter = document.getElementById('levelFilter').value;
    
    const results = searchCourses(query, collegeFilter, levelFilter);
    displaySearchResults(results);
}

// عرض نتائج البحث
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب تغيير كلمات البحث أو الفلاتر</p>
            </div>
        `;
        return;
    }
    
    const resultsHTML = results.map(course => `
        <div class="course-item" onclick="showCourseDetails('${course.code}')">
            <div class="course-header">
                <div>
                    <h4 class="course-title">${course.name}</h4>
                    <div class="course-details">
                        <span class="course-detail">
                            <i class="fas fa-university"></i>
                            ${course.college}
                        </span>
                        <span class="course-detail">
                            <i class="fas fa-building"></i>
                            ${course.department}
                        </span>
                        <span class="course-detail">
                            <i class="fas fa-layer-group"></i>
                            المستوى ${course.level}
                        </span>
                        <span class="course-detail">
                            <i class="fas fa-clock"></i>
                            ${course.credits} ساعات
                        </span>
                    </div>
                </div>
                <span class="course-code">${course.code}</span>
            </div>
        </div>
    `).join('');
    
    searchResults.innerHTML = `
        <div class="search-results-header">
            <h4>نتائج البحث (${results.length} مقرر)</h4>
        </div>
        ${resultsHTML}
    `;
}

// ملء خيارات الفلاتر
function populateFilters() {
    const collegeFilter = document.getElementById('collegeFilter');
    if (collegeFilter) {
        universitData.colleges.forEach(college => {
            const option = document.createElement('option');
            option.value = college.id;
            option.textContent = college.name;
            collegeFilter.appendChild(option);
        });
    }
}

// إعداد تأثيرات التمرير
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(30, 60, 114, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            header.style.backdropFilter = 'none';
        }
        
        // تحديث الرابط النشط حسب الموضع
        updateActiveNavLink();
    });
}

// تحديث الرابط النشط في التنقل
function updateActiveNavLink() {
    const sections = ['home', 'search', 'colleges', 'about'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = 'home';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// فتح نافذة البحث المتقدم
function openSearchModal() {
    scrollToSection('search');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.focus();
    }
}

// إغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = 'none';
}

// إغلاق النافذة عند النقر خارجها
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// دالة التأخير للبحث
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// تحريك العناصر عند التمرير
function animateOnScroll() {
    const elements = document.querySelectorAll('.college-card, .course-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

// إضافة مستمع للتمرير للرسوم المتحركة
window.addEventListener('scroll', animateOnScroll);

// تشغيل الرسوم المتحركة عند التحميل
document.addEventListener('DOMContentLoaded', animateOnScroll);

// دالة البحث العامة
function searchCourses() {
    performSearch();
}

// إضافة CSS للرسوم المتحركة
const style = document.createElement('style');
style.textContent = `
    .college-card, .course-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .college-card.animate-in, .course-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ddd;
    }
    
    .search-results-header {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #667eea;
    }
    
    .search-results-header h4 {
        color: #667eea;
        font-size: 1.3rem;
    }
    
    .college-modal-content, .course-modal-content {
        max-height: 60vh;
        overflow-y: auto;
    }
    
    .college-description, .college-departments-modal, .college-courses-modal,
    .course-basic-info, .course-description, .course-prerequisites {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #eee;
    }
    
    .college-description h4, .college-departments-modal h4, .college-courses-modal h4,
    .course-description h4, .course-prerequisites h4 {
        color: #667eea;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .departments-modal-list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 0.5rem;
    }
    
    .departments-modal-list li {
        padding: 0.5rem;
        background: #f8f9fa;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .departments-modal-list li i {
        color: #667eea;
    }
    
    .courses-modal-list {
        max-height: 300px;
        overflow-y: auto;
    }
    
    .course-info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }
    
    .course-info-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem;
        background: #f8f9fa;
        border-radius: 10px;
    }
    
    .course-info-item i {
        color: #667eea;
        width: 20px;
    }
    
    .info-label {
        font-weight: 600;
        color: #333;
    }
    
    .info-value {
        color: #666;
        margin-right: auto;
    }
    
    .prerequisites-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .prerequisite-tag {
        background: #667eea;
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.9rem;
    }
    
    .no-prerequisites {
        color: #666;
        font-style: italic;
    }
`;
document.head.appendChild(style);



// وظائف ربط Google Drive
function linkToGoogleDrive(courseCode, courseName) {
    // إنشاء modal لربط Google Drive
    const driveModal = document.createElement('div');
    driveModal.className = 'modal drive-modal';
    driveModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>ربط المقرر مع Google Drive</h3>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="drive-link-form">
                    <h4>${courseName} (${courseCode})</h4>
                    <p>يمكنك ربط هذا المقرر مع ملفات Google Drive الخاصة بك</p>
                    
                    <div class="drive-options">
                        <div class="drive-option">
                            <h5><i class="fab fa-google-drive"></i> رابط مجلد Google Drive</h5>
                            <input type="url" id="drive-folder-link" placeholder="https://drive.google.com/drive/folders/..." class="drive-input">
                            <small>الصق رابط مجلد Google Drive الذي يحتوي على ملفات المقرر</small>
                        </div>
                        
                        <div class="drive-option">
                            <h5><i class="fas fa-file-alt"></i> رابط ملف محدد</h5>
                            <input type="url" id="drive-file-link" placeholder="https://docs.google.com/document/d/..." class="drive-input">
                            <small>الصق رابط ملف Google Docs أو Sheets أو أي ملف آخر</small>
                        </div>
                        
                        <div class="drive-option">
                            <h5><i class="fas fa-tag"></i> وصف الملف (اختياري)</h5>
                            <input type="text" id="drive-description" placeholder="مثال: ملاحظات المحاضرات، الواجبات، المشاريع..." class="drive-input">
                        </div>
                    </div>
                    
                    <div class="drive-actions">
                        <button class="btn-primary" onclick="saveDriveLink('${courseCode}', '${courseName}')">
                            <i class="fas fa-save"></i>
                            حفظ الرابط
                        </button>
                        <button class="btn-secondary" onclick="closeDriveModal()">
                            <i class="fas fa-times"></i>
                            إلغاء
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(driveModal);
    
    // إضافة event listeners
    const closeBtn = driveModal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeDriveModal);
    
    driveModal.addEventListener('click', (e) => {
        if (e.target === driveModal) {
            closeDriveModal();
        }
    });
}

function saveDriveLink(courseCode, courseName) {
    const folderLink = document.getElementById('drive-folder-link').value;
    const fileLink = document.getElementById('drive-file-link').value;
    const description = document.getElementById('drive-description').value;
    
    if (!folderLink && !fileLink) {
        alert('يرجى إدخال رابط واحد على الأقل');
        return;
    }
    
    // حفظ الرابط في localStorage
    const driveLinks = JSON.parse(localStorage.getItem('driveLinks') || '{}');
    driveLinks[courseCode] = {
        courseName: courseName,
        folderLink: folderLink,
        fileLink: fileLink,
        description: description,
        dateAdded: new Date().toISOString()
    };
    localStorage.setItem('driveLinks', JSON.stringify(driveLinks));
    
    // تحديث واجهة المستخدم
    updateDriveLinkDisplay(courseCode);
    
    // إغلاق المودال
    closeDriveModal();
    
    // عرض رسالة نجاح
    showSuccessMessage('تم حفظ الرابط بنجاح!');
}

function updateDriveLinkDisplay(courseCode) {
    const driveLinks = JSON.parse(localStorage.getItem('driveLinks') || '{}');
    const linkData = driveLinks[courseCode];
    
    if (!linkData) return;
    
    const container = document.getElementById(`drive-link-${courseCode}`);
    if (!container) return;
    
    container.style.display = 'block';
    container.innerHTML = `
        <div class="drive-link-item active">
            <div class="drive-link-header">
                <i class="fab fa-google-drive"></i>
                <span class="drive-link-title">مرتبط مع Google Drive</span>
                <button class="btn-remove-link" onclick="removeDriveLink('${courseCode}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="drive-link-content">
                ${linkData.folderLink ? `
                    <div class="drive-link-url">
                        <i class="fas fa-folder"></i>
                        <a href="${linkData.folderLink}" target="_blank">مجلد Google Drive</a>
                    </div>
                ` : ''}
                ${linkData.fileLink ? `
                    <div class="drive-link-url">
                        <i class="fas fa-file"></i>
                        <a href="${linkData.fileLink}" target="_blank">ملف Google Drive</a>
                    </div>
                ` : ''}
                ${linkData.description ? `
                    <div class="drive-link-description">
                        <i class="fas fa-info-circle"></i>
                        <span>${linkData.description}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function removeDriveLink(courseCode) {
    if (confirm('هل أنت متأكد من حذف هذا الرابط؟')) {
        const driveLinks = JSON.parse(localStorage.getItem('driveLinks') || '{}');
        delete driveLinks[courseCode];
        localStorage.setItem('driveLinks', JSON.stringify(driveLinks));
        
        const container = document.getElementById(`drive-link-${courseCode}`);
        if (container) {
            container.style.display = 'none';
        }
        
        showSuccessMessage('تم حذف الرابط بنجاح!');
    }
}

function closeDriveModal() {
    const modal = document.querySelector('.drive-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(successDiv)) {
                document.body.removeChild(successDiv);
            }
        }, 300);
    }, 3000);
}

// تحميل روابط Google Drive المحفوظة عند تحميل الصفحة
function loadSavedDriveLinks() {
    const driveLinks = JSON.parse(localStorage.getItem('driveLinks') || '{}');
    
    Object.keys(driveLinks).forEach(courseCode => {
        updateDriveLinkDisplay(courseCode);
    });
}

// تحديث وظيفة تهيئة التطبيق لتشمل تحميل روابط Drive
const originalInitializeApp = initializeApp;
initializeApp = function() {
    originalInitializeApp();
    loadSavedDriveLinks();
};



// فتح نافذة إضافة رابط جوجل درايف
function openDriveModal(collegeId) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = 'إضافة رابط جوجل درايف';
    
    modalBody.innerHTML = `
        <div class="drive-modal-content">
            <div class="drive-link-form">
                <h4><i class="fab fa-google-drive"></i> رابط جوجل درايف</h4>
                <p>أدخل رابط مجلد جوجل درايف الذي يحتوي على مقررات الكلية</p>
                
                <div class="drive-options">
                    <div class="drive-option">
                        <h5><i class="fas fa-link"></i> رابط المجلد</h5>
                        <input type="url" id="driveUrl" class="drive-input" placeholder="https://drive.google.com/drive/folders/...">
                        <small>الصق رابط مجلد جوجل درايف هنا</small>
                    </div>
                    
                    <div class="drive-option">
                        <h5><i class="fas fa-info-circle"></i> وصف الرابط (اختياري)</h5>
                        <input type="text" id="driveDescription" class="drive-input" placeholder="مقررات كلية...">
                        <small>وصف مختصر للمحتوى</small>
                    </div>
                </div>
                
                <div class="drive-actions">
                    <button class="btn btn-secondary" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                        إلغاء
                    </button>
                    <button class="btn btn-primary" onclick="saveDriveLink('${collegeId}')">
                        <i class="fas fa-save"></i>
                        حفظ الرابط
                    </button>
                </div>
            </div>
        </div>
    `;
}

// حفظ رابط جوجل درايف
function saveDriveLink(collegeId) {
    const driveUrl = document.getElementById('driveUrl').value;
    const driveDescription = document.getElementById('driveDescription').value;
    
    if (!driveUrl) {
        alert('يرجى إدخال رابط جوجل درايف');
        return;
    }
    
    // البحث عن الكلية وتحديث الرابط
    const college = universitData.colleges.find(c => c.id === collegeId);
    if (college) {
        college.driveLink = driveUrl;
        college.driveDescription = driveDescription;
        
        // إظهار رسالة نجاح
        showSuccessMessage('تم حفظ رابط جوجل درايف بنجاح!');
        
        // إغلاق النافذة وإعادة عرض تفاصيل الكلية
        setTimeout(() => {
            showCollegeDetails(college);
        }, 1000);
    }
}

// إظهار رسالة نجاح
function showSuccessMessage(message) {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="success-message">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>${message}</h3>
            <p>سيتم إعادة توجيهك إلى تفاصيل الكلية...</p>
        </div>
    `;
}

