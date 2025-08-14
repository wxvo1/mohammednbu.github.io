// بيانات الكليات والأقسام والمقررات
const universitData = {
    colleges: [
        {
            id: 'english_books',
            name: 'كتب اللغة الإنجليزية',
            icon: 'fas fa-book',
            description: 'مجموعة شاملة من كتب اللغة الإنجليزية الموحدة لجميع التخصصات',
            departments: [
                'كتب اللغة الإنجليزية العامة',
                'كتب اللغة الإنجليزية للأغراض الأكاديمية',
                'كتب اللغة الإنجليزية للأغراض المهنية'
            ],
            driveLink: 'https://drive.google.com/drive/folders/1cMZTP_Sog7Mll3xUNsXuoIxamqjJw5aS?usp=drive_link',
            courses: [
                {
                    code: 'ENG101',
                    name: 'اللغة الإنجليزية العامة 1',
                    department: 'كتب اللغة الإنجليزية العامة',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'مقرر أساسي في اللغة الإنجليزية لجميع التخصصات'
                },
                {
                    code: 'ENG102',
                    name: 'اللغة الإنجليزية العامة 2',
                    department: 'كتب اللغة الإنجليزية العامة',
                    level: 2,
                    credits: 3,
                    prerequisites: ['ENG101'],
                    description: 'مقرر متقدم في اللغة الإنجليزية لجميع التخصصات'
                }
            ]
        },
        {
            id: 'sciences',
            name: 'كلية العلوم',
            icon: 'fas fa-flask',
            description: 'تقدم الكلية برامج أكاديمية متميزة في مختلف التخصصات العلمية',
            departments: [
                'قسم الرياضيات',
                'قسم الفيزياء',
                'قسم علوم الحاسبات',
                'قسم الكيمياء',
                'قسم علوم الأحياء'
            ],
            driveLink: "https://drive.google.com/drive/folders/1TYVRX66moSzbNn8oAB7W9sZQc1No1Vmy?usp=sharing",
            driveLink: 'https://drive.google.com/drive/folders/1TYVRX66moSzbNn8oAB7W9sZQc1No1Vmy?usp=sharing',
            courses: [
                {
                    code: 'MATH101',
                    name: 'الرياضيات العامة',
                    department: 'قسم الرياضيات',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'مقدمة في الرياضيات العامة تشمل الجبر والهندسة التحليلية'
                },
                {
                    code: 'PHYS101',
                    name: 'الفيزياء العامة',
                    department: 'قسم الفيزياء',
                    level: 1,
                    credits: 3,
                    prerequisites: ['MATH101'],
                    description: 'أساسيات الفيزياء الكلاسيكية والحديثة'
                },
                {
                    code: 'CHEM101',
                    name: 'الكيمياء العامة',
                    department: 'قسم الكيمياء',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'مبادئ الكيمياء العامة والتفاعلات الكيميائية'
                },
                {
                    code: 'BIO101',
                    name: 'علم الأحياء العام',
                    department: 'قسم علوم الأحياء',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'مقدمة في علوم الحياة والخلية'
                },
                {
                    code: 'CS101',
                    name: 'مقدمة في علوم الحاسب',
                    department: 'قسم علوم الحاسبات',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'أساسيات البرمجة وعلوم الحاسب'
                },
                {
                    code: 'MATH201',
                    name: 'التفاضل والتكامل',
                    department: 'قسم الرياضيات',
                    level: 2,
                    credits: 4,
                    prerequisites: ['MATH101'],
                    description: 'دراسة التفاضل والتكامل وتطبيقاتهما'
                },
                {
                    code: 'PHYS201',
                    name: 'الفيزياء الحديثة',
                    department: 'قسم الفيزياء',
                    level: 2,
                    credits: 3,
                    prerequisites: ['PHYS101'],
                    description: 'مقدمة في الفيزياء الحديثة والكمية'
                },
                {
                    code: 'CHEM201',
                    name: 'الكيمياء العضوية',
                    department: 'قسم الكيمياء',
                    level: 2,
                    credits: 4,
                    prerequisites: ['CHEM101'],
                    description: 'دراسة المركبات العضوية وتفاعلاتها'
                }
            ]
        },
        {
            id: 'pharmacy',
            name: 'كلية الصيدلة',
            icon: 'fas fa-pills',
            description: 'تهدف إلى إعداد صيادلة مؤهلين لخدمة المجتمع',
            departments: [
                'قسم الصيدلانيات',
                'قسم العقاقير والطب البديل',
                'قسم الكيمياء الصيدلية',
                'قسم علم الأدوية والسموم',
                'قسم العلوم الصحية الأساسية',
                'قسم الممارسة السريرية'
            ],
            driveLink: "https://drive.google.com/drive/folders/1oRSEeQGHckuiHVc3b7nMqcoOaBNBsvGU?usp=sharing",
            courses: [
                {
                    code: 'PHAR101',
                    name: 'مقدمة في الصيدلة',
                    department: 'قسم الصيدلانيات',
                    level: 1,
                    credits: 2,
                    prerequisites: [],
                    description: 'نظرة عامة على مهنة الصيدلة ودور الصيدلي'
                },
                {
                    code: 'PHAR201',
                    name: 'الكيمياء الصيدلية',
                    department: 'قسم الكيمياء الصيدلية',
                    level: 2,
                    credits: 3,
                    prerequisites: ['CHEM101'],
                    description: 'دراسة التركيب الكيميائي للأدوية'
                },
                {
                    code: 'PHAR301',
                    name: 'علم الأدوية',
                    department: 'قسم علم الأدوية والسموم',
                    level: 3,
                    credits: 4,
                    prerequisites: ['PHAR201'],
                    description: 'دراسة تأثير الأدوية على الجسم'
                },
                {
                    code: 'PHAR401',
                    name: 'الصيدلة السريرية',
                    department: 'قسم الممارسة السريرية',
                    level: 4,
                    credits: 3,
                    prerequisites: ['PHAR301'],
                    description: 'تطبيق المعرفة الصيدلانية في الممارسة السريرية'
                },
                {
                    code: 'PHAR202',
                    name: 'العقاقير والنباتات الطبية',
                    department: 'قسم العقاقير والطب البديل',
                    level: 2,
                    credits: 3,
                    prerequisites: ['PHAR101'],
                    description: 'دراسة النباتات الطبية والعقاقير الطبيعية'
                }
            ]
        },
        {
            id: 'nursing',
            name: 'كلية التمريض',
            icon: 'fas fa-user-nurse',
            description: 'تعد ممرضين مؤهلين لتقديم الرعاية الصحية',
            departments: [
                'قسم التمريض الجراحي الباطني',
                'قسم الطوارئ والعناية المركزة',
                'قسم تمريض صحة الأمومة والطفولة',
                'قسم تمريض صحة العامة'
            ],
            driveLink: "https://drive.google.com/drive/folders/10E_x7Odiut1ZkTXBi5C-bBcHr2DHkR8C?usp=sharing",
            courses: [
                {
                    code: 'NURS101',
                    name: 'أساسيات التمريض',
                    department: 'قسم التمريض الجراحي الباطني',
                    level: 1,
                    credits: 4,
                    prerequisites: [],
                    description: 'المبادئ الأساسية لمهنة التمريض'
                },
                {
                    code: 'NURS201',
                    name: 'تمريض الطوارئ',
                    department: 'قسم الطوارئ والعناية المركزة',
                    level: 2,
                    credits: 3,
                    prerequisites: ['NURS101'],
                    description: 'التعامل مع حالات الطوارئ الطبية'
                }
            ]
        },
        {
            id: 'applied_medical_sciences',
            name: 'كلية العلوم الطبية التطبيقية',
            icon: 'fas fa-medkit',
            description: 'تقدم برامج أكاديمية متميزة في مختلف التخصصات الطبية التطبيقية.',
            departments: [
                'العلاج الطبيعي',
                'تقنية المختبرات الطبية',
                'تقنية الأشعة التشخيصية',
                'التغذية السريرية'
            ],
            driveLink: "https://drive.google.com/drive/folders/1Ou6zMXYavyCU5fBCf3qQLBJHSRdmjwQw?usp=sharing",
            courses: [
                {
                    code: 'PT101',
                    name: 'مقدمة في العلاج الطبيعي',
                    department: 'العلاج الطبيعي',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'مبادئ وأساسيات العلاج الطبيعي'
                }
            ]
        },
        {
            id: 'design_arts',
            name: 'كلية التصاميم والفنون',
            icon: 'fas fa-palette',
            description: 'تنمي المواهب الإبداعية في مجال التصميم والفنون',
            departments: [
                'قسم التصاميم',
                'قسم الفنون'
            ],
            driveLink: "https://drive.google.com/drive/folders/1WLlwZzGYzYkhjUEOLf8V2DHWnTC2wstX?usp=sharing",
            courses: [
                {
                    code: 'ART101',
                    name: 'أساسيات التصميم',
                    department: 'قسم التصاميم',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'المبادئ الأساسية للتصميم والألوان'
                },
                {
                    code: 'ART201',
                    name: 'الرسم والتصوير',
                    department: 'قسم الفنون',
                    level: 2,
                    credits: 3,
                    prerequisites: ['ART101'],
                    description: 'تقنيات الرسم والتصوير الفني'
                }
            ]
        },
        {
            id: 'engineering',
            name: 'كلية الهندسة',
            icon: 'fas fa-cogs',
            description: 'تقدم برامج هندسية متطورة في مختلف التخصصات',
            departments: [
                'قسم الهندسة المدنية',
                'قسم الهندسة الكهربائية',
                'قسم الهندسة الميكانيكية',
                'قسم الهندسة الكيميائية وهندسة المواد',
                'قسم الهندسة الصناعية'
            ],
            driveLink: "https://drive.google.com/drive/folders/1n2X3D2fQqJrZgxQinIHwSxbAzEzIhlJr?usp=sharing",
            courses: [
                {
                    code: 'ENG101',
                    name: 'مقدمة في الهندسة',
                    department: 'عام',
                    level: 1,
                    credits: 2,
                    prerequisites: [],
                    description: 'نظرة عامة على التخصصات الهندسية'
                },
                {
                    code: 'CIVIL201',
                    name: 'الرسم الهندسي',
                    department: 'قسم الهندسة المدنية',
                    level: 2,
                    credits: 3,
                    prerequisites: ['ENG101'],
                    description: 'أساسيات الرسم الهندسي والتصميم'
                },
                {
                    code: 'ELEC201',
                    name: 'الدوائر الكهربائية',
                    department: 'قسم الهندسة الكهربائية',
                    level: 2,
                    credits: 4,
                    prerequisites: ['PHYS101', 'MATH101'],
                    description: 'تحليل الدوائر الكهربائية الأساسية'
                },
                {
                    code: 'MECH201',
                    name: 'الميكانيكا الهندسية',
                    department: 'قسم الهندسة الميكانيكية',
                    level: 2,
                    credits: 3,
                    prerequisites: ['PHYS101', 'MATH101'],
                    description: 'مبادئ الميكانيكا في التطبيقات الهندسية'
                },
                {
                    code: 'CHEM301',
                    name: 'الهندسة الكيميائية',
                    department: 'قسم الهندسة الكيميائية وهندسة المواد',
                    level: 3,
                    credits: 4,
                    prerequisites: ['CHEM101', 'MATH201'],
                    description: 'العمليات الكيميائية والهندسية'
                },
                {
                    code: 'IE201',
                    name: 'مقدمة في الهندسة الصناعية',
                    department: 'قسم الهندسة الصناعية',
                    level: 2,
                    credits: 3,
                    prerequisites: ['ENG101'],
                    description: 'أساسيات الهندسة الصناعية وإدارة العمليات'
                }
            ]
        },
        {
            id: 'medicine',
            name: 'كلية الطب',
            icon: 'fas fa-stethoscope',
            description: 'تعد أطباء مؤهلين لخدمة المجتمع',
            departments: [
                'قسم التشريح',
                'قسم وظائف الأعضاء',
                'قسم الكيمياء الحيوية السريرية',
                'قسم الكائنات الدقيقة',
                'قسم علم الأمراض',
                'قسم علم الأدوية',
                'قسم الجراحة',
                'قسم الأمراض الباطنة',
                'قسم أمراض النساء والولادة'
            ],
            driveLink: "https://drive.google.com/drive/folders/1PCsuWPSlJvbQbF_uPxyEAbtuAYvNfMKn?usp=drive_link",
            courses: [
                {
                    code: 'MED101',
                    name: 'التشريح العام',
                    department: 'قسم التشريح',
                    level: 1,
                    credits: 5,
                    prerequisites: [],
                    description: 'دراسة تشريح جسم الإنسان'
                },
                {
                    code: 'MED102',
                    name: 'وظائف الأعضاء',
                    department: 'قسم وظائف الأعضاء',
                    level: 1,
                    credits: 4,
                    prerequisites: [],
                    description: 'دراسة وظائف أعضاء الجسم'
                },
                {
                    code: 'MED201',
                    name: 'الكيمياء الحيوية',
                    department: 'قسم الكيمياء الحيوية السريرية',
                    level: 2,
                    credits: 3,
                    prerequisites: ['CHEM101'],
                    description: 'العمليات الكيميائية في الجسم'
                }
            ]
        },
        {
            id: 'applied',
            name: 'الكلية التطبيقية',
            icon: 'fas fa-tools',
            description: 'تقدم برامج تطبيقية تلبي احتياجات سوق العمل',
            departments: [
                'برنامج إدارة وتنظيم الفعاليات',
                'برنامج التجارة الإلكترونية',
                'برنامج إدارة المستودعات وسلاسل الإمداد',
                'برنامج المحاسبة والضرائب',
                'برنامج الأمن السيبراني',
                'برنامج تقنية المعلومات',
                'برنامج البرمجة وعلوم الحاسب'
            ],
            driveLink: "https://drive.google.com/drive/folders/1nCQC5TDkNSmUchV8DJaFFWQZvTBOZXCo?usp=drive_link",
            courses: [
                {
                    code: 'APP101',
                    name: 'مقدمة في إدارة الفعاليات',
                    department: 'برنامج إدارة وتنظيم الفعاليات',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'أساسيات تخطيط وتنظيم الفعاليات'
                },
                {
                    code: 'APP201',
                    name: 'التجارة الإلكترونية',
                    department: 'برنامج التجارة الإلكترونية',
                    level: 2,
                    credits: 3,
                    prerequisites: [],
                    description: 'مبادئ التجارة الإلكترونية والتسويق الرقمي'
                }
            ]
        },
        {
            id: 'computing',
            name: 'كلية الحاسبات وتقنية المعلومات',
            icon: 'fas fa-laptop-code',
            description: 'تقدم برامج متطورة في علوم الحاسب وتقنية المعلومات',
            departments: [
                'قسم علوم الحاسبات',
                'قسم تقنية المعلومات',
                'قسم نظم المعلومات'
            ],
            driveLink: "https://drive.google.com/drive/folders/171-OQie7LFN51MtYKGdZSoPYbGhdc7vh?usp=drive_link",
            courses: [
                {
                    code: 'CS201',
                    name: 'البرمجة المتقدمة',
                    department: 'قسم علوم الحاسبات',
                    level: 2,
                    credits: 4,
                    prerequisites: ['CS101'],
                    description: 'تطوير مهارات البرمجة المتقدمة'
                },
                {
                    code: 'IT201',
                    name: 'شبكات الحاسوب',
                    department: 'قسم تقنية المعلومات',
                    level: 2,
                    credits: 3,
                    prerequisites: ['CS101'],
                    description: 'أساسيات شبكات الحاسوب والاتصالات'
                },
                {
                    code: 'IS201',
                    name: 'نظم المعلومات الإدارية',
                    department: 'قسم نظم المعلومات',
                    level: 2,
                    credits: 3,
                    prerequisites: [],
                    description: 'تطبيق تقنية المعلومات في الإدارة'
                }
            ]
        },
        {
            id: 'humanities',
            name: 'كلية العلوم الإنسانية والاجتماعية',
            icon: 'fas fa-book-open',
            description: 'تقدم برامج في العلوم الإنسانية والاجتماعية',
            departments: [
                'قسم التربية الخاصة',
                'قسم الدراسات الإسلامية',
                'قسم اللغة العربية',
                'قسم اللغات والترجمة',
                'برنامج الشريعة',
                'برنامج تعليم اللغة العربية للناطقين بغيرها',
                'برنامج اللغويات التطبيقية',
                'برنامج علوم الرياضة والنشاط البدني'
            ],
            driveLink: "https://drive.google.com/drive/folders/1B4USBPZobdCz5jk488Yqpy8p4FypNVXI?usp=drive_link",
            courses: [
                {
                    code: 'ARAB101',
                    name: 'النحو والصرف',
                    department: 'قسم اللغة العربية',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'أساسيات النحو والصرف في اللغة العربية'
                },
                {
                    code: 'ISLA101',
                    name: 'العقيدة الإسلامية',
                    department: 'قسم الدراسات الإسلامية',
                    level: 1,
                    credits: 2,
                    prerequisites: [],
                    description: 'دراسة أصول العقيدة الإسلامية'
                },
                {
                    code: 'SPED101',
                    name: 'مقدمة في التربية الخاصة',
                    department: 'قسم التربية الخاصة',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'أساسيات التربية الخاصة وذوي الاحتياجات الخاصة'
                }
            ]
        },
        {
            id: 'business',
            name: 'كلية إدارة الأعمال',
            icon: 'fas fa-briefcase',
            description: 'تعد قادة الأعمال والمديرين المؤهلين',
            departments: [
                'قسم المحاسبة',
                'قسم الموارد البشرية',
                'قسم القانون',
                'قسم التمويل والتأمين',
                'قسم التسويق',
                'قسم نظم المعلومات الإدارية'
            ],
            driveLink: "https://drive.google.com/drive/folders/15WekU6N7Z0eewMEE_mcVG_z5e6AqD60L?usp=drive_link",
            courses: [
                {
                    code: 'BUS101',
                    name: 'مقدمة في إدارة الأعمال',
                    department: 'عام',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'المفاهيم الأساسية في إدارة الأعمال'
                },
                {
                    code: 'ACC101',
                    name: 'مبادئ المحاسبة',
                    department: 'قسم المحاسبة',
                    level: 1,
                    credits: 3,
                    prerequisites: [],
                    description: 'أساسيات المحاسبة المالية'
                },
                {
                    code: 'MKT201',
                    name: 'مبادئ التسويق',
                    department: 'قسم التسويق',
                    level: 2,
                    credits: 3,
                    prerequisites: ['BUS101'],
                    description: 'أساسيات التسويق واستراتيجياته'
                },
                {
                    code: 'FIN201',
                    name: 'الإدارة المالية',
                    department: 'قسم التمويل والتأمين',
                    level: 2,
                    credits: 3,
                    prerequisites: ['ACC101'],
                    description: 'مبادئ الإدارة المالية والاستثمار'
                }
            ]
        }
    ]
};

// دالة للحصول على جميع المقررات
function getAllCourses() {
    let allCourses = [];
    universitData.colleges.forEach(college => {
        college.courses.forEach(course => {
            course.college = college.name;
            course.collegeId = college.id;
            allCourses.push(course);
        });
    });
    return allCourses;
}

// دالة للبحث في المقررات
function searchCourses(query, collegeFilter = '', levelFilter = '') {
    const allCourses = getAllCourses();
    
    return allCourses.filter(course => {
        const matchesQuery = !query || 
            course.name.toLowerCase().includes(query.toLowerCase()) ||
            course.code.toLowerCase().includes(query.toLowerCase()) ||
            course.department.toLowerCase().includes(query.toLowerCase()) ||
            course.description.toLowerCase().includes(query.toLowerCase());
            
        const matchesCollege = !collegeFilter || course.collegeId === collegeFilter;
        const matchesLevel = !levelFilter || course.level.toString() === levelFilter;
        
        return matchesQuery && matchesCollege && matchesLevel;
    });
}

// دالة للحصول على كلية بالمعرف
function getCollegeById(id) {
    return universitData.colleges.find(college => college.id === id);
}

// دالة للحصول على مقرر بالكود
function getCourseByCode(code) {
    const allCourses = getAllCourses();
    return allCourses.find(course => course.code === code);
}

