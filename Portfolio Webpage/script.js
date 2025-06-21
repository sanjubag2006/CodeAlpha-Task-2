// Global variables
let currentSection = 'home';
let isMenuOpen = false;
let currentRole = 0;
let typedText = '';

// Role definitions
const roles = ['Web Developer', 'Computer Science Student', 'Problem Solver', 'Tech Enthusiast'];

// Skills data
const skills = [
    { name: 'HTML & CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 80, icon: '⚡' },
    { name: 'C Programming', level: 90, icon: '💻' },
    { name: 'C++', level: 85, icon: '🔧' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'MySQL', level: 80, icon: '🗄️' },
    { name: 'Git & Version Control', level: 80, icon: '📚' },
    { name: 'Responsive Design', level: 85, icon: '📱' },
    { name: 'Problem Solving', level: 95, icon: '🧩' },
    { name: 'Data Structures', level: 70, icon: '🏗️' },
    { name: 'Algorithms', level: 75, icon: '⚙️' },
    { name: 'Web Design', level: 80, icon: '🎭' }
];

// Projects data
const minorProjects = [
    {
        title: 'Advanced Calculator',
        description: 'A basic web calculator built using HTML, CSS, and JavaScript. Supports all primary arithmetic operations with a clean and minimal UI.',
        image: '/Images/Calculator-image.png',
        tech: ['JavaScript', 'CSS3', 'HTML5'],
        github: '#',
        live: '#'
    },
    {
        title: 'Smart Task Tracker',
        description: 'A DOM-based mini project to track daily tasks in real-time. Users can add, delete, and mark tasks as complete with interactive UI.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        tech: ['JavaScript', 'CSS', 'HTML5'],
        github: '#',
        live: '#'
    },
    {
        title: 'Dynamic Color Changer',
        description: 'A fun and interactive web tool that changes the background color dynamically. Built using JavaScript event handling and DOM manipulation.',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
        tech: ['JavaScript', 'CSS', 'HTML5'],
        github: '#',
        live: '#'
    }
];

const majorProjects = [
    {
        title: 'Blinkit Clone',
        description: 'A responsive frontend replica of Blinkit built using HTML, CSS, and JavaScript. The UI mirrors the actual Blinkit site with categories, banners, and product cards.',
        image: '/Images/Blinkit-image.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
        features: ['Homepage layout with promotional banners','Category-wise product display','Responsive design using Flexbox and media queries'],
        github: '#',
        live: '#'
    },
    {
        title: 'Amazon Clone',
        description: 'A basic Amazon homepage clone focusing on layout and interactivity using pure frontend technologies. Implements the Amazon feel with a navigation bar, product grids, and hover effects.',
        image: '/Images/Amazon-image.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'PHP'],
        features: ['Navbar with logo, search bar, and cart','Grid-based product cards with ratings and pricing','Hover transitions and basic click effects'],
        github: '#',
        live: '#'
    }
];

// Achievements data
const achievements = [
    { title: 'Dean\'s List', description: 'Academic Excellence in Computer Science', icon: '🏆' },
    { title: 'Coding Contest', description: 'college Internal 24-hour Programming Competition', icon: '🥇' },
    { title: 'Open Source Contributor', description: 'Multiple GitHub contributions', icon: '🌟' }
];

// Timeline data
const timeline = [
    { year: '2024', title: 'Started Computer Science Journey', description: 'Enrolled in CS program, began web development' },
    { year: '2025', title: 'First Web Projects', description: 'Built calculator, task tracker, and color changer' },
    { year: '2025', title: 'Major Projects', description: 'Developed Blinkit and Amazon clones' }
];

// Contact data
const contactInfo = [
    { title: 'Email', value: 'bagsanju2006@gmail.com', icon: 'fas fa-envelope', color: 'cyan' },
    { title: 'Phone', value: '+91 90044-24571', icon: 'fas fa-phone', color: 'purple' },
    { title: 'Location', value: 'India', icon: 'fas fa-map-marker-alt', color: 'blue' },
    { title: 'Availability', value: 'Open to Work', icon: 'fas fa-clock', color: 'green' }
];

// DOM ready
document.addEventListener('DOMContentLoaded', function () {
    initializePortfolio();
});

// Initialize portfolio
function initializePortfolio() {
    setupNavigation();
    setupTypingAnimation();
    populateSkills();
    populateProjects();
    populateAchievements();
    populateTimeline();
    populateContact();
    setupScrollAnimation();
}

// Navigation setup
function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.getElementById('menuIcon');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('active', isMenuOpen);
        menuIcon.className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    // Navigation links
    const navLinks = document.querySelectorAll('[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (isMenuOpen && !mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            isMenuOpen = false;
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
        }
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        currentSection = sectionId;
        updateActiveNavLink();
    }

    // Close mobile menu
    if (isMenuOpen) {
        isMenuOpen = false;
        document.getElementById('mobileNav').classList.remove('active');
        document.getElementById('menuIcon').className = 'fas fa-bars';
    }
}

// Update active navigation link
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Typing animation
function setupTypingAnimation() {
    const typedElement = document.getElementById('typedText');

    function typeText() {
        const currentText = roles[currentRole];
        let i = 0;
        typedElement.textContent = '';

        const timer = setInterval(() => {
            if (i < currentText.length) {
                typedElement.textContent = currentText.slice(0, i + 1);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    currentRole = (currentRole + 1) % roles.length;
                    typeText();
                }, 2000);
            }
        }, 100);
    }

    typeText();
}

// Populate skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');

    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;

        skillCard.innerHTML = `
      <div class="skill-header">
        <div class="skill-info">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-percentage">${skill.level}%</span>
      </div>
      <div class="skill-progress">
        <div class="skill-progress-bar" style="width: 0%"></div>
      </div>
    `;

        skillsGrid.appendChild(skillCard);

        // Animate progress bar
        setTimeout(() => {
            const progressBar = skillCard.querySelector('.skill-progress-bar');
            progressBar.style.width = `${skill.level}%`;
        }, 500 + (index * 100));
    });
}

// Populate projects
function populateProjects() {
    const majorProjectsGrid = document.getElementById('majorProjectsGrid');
    const minorProjectsGrid = document.getElementById('minorProjectsGrid');

    // Major projects
    majorProjects.forEach(project => {
        const projectCard = createProjectCard(project, true);
        majorProjectsGrid.appendChild(projectCard);
    });

    // Minor projects
    minorProjects.forEach(project => {
        const projectCard = createProjectCard(project, false);
        minorProjectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project, isMajor) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const techBadges = project.tech.map(tech =>
        `<span class="tech-badge ${isMajor ? '' : 'purple'}">${tech}</span>`
    ).join('');

    const featuresSection = isMajor && project.features ? `
    <div class="project-features">
      <h4 class="features-title">Key Features:</h4>
      <div class="features-list">
        ${project.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
      </div>
    </div>
  ` : '';

    card.innerHTML = `
    <div class="project-image-container">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-links">
        <a href="${project.github}" class="project-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="${project.live}" class="project-link">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${techBadges}
      </div>
      ${featuresSection}
    </div>
  `;

    return card;
}

// Populate achievements
function populateAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');

    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <h3 class="achievement-title">${achievement.title}</h3>
      <p class="achievement-description">${achievement.description}</p>
    `;
        achievementsGrid.appendChild(achievementCard);
    });
}

// Populate timeline
function populateTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');

    timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
      <div class="timeline-icon">
        <i class="fas fa-calendar"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-year">${item.year}</span>
          <h3 class="timeline-title">${item.title}</h3>
        </div>
        <p class="timeline-description">${item.description}</p>
      </div>
    `;
        timelineContainer.appendChild(timelineItem);
    });
}

// Populate contact
function populateContact() {
    const contactGrid = document.getElementById('contactGrid');

    contactInfo.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
      <div class="contact-icon ${contact.color}">
        <i class="${contact.icon}"></i>
      </div>
      <h3 class="contact-card-title">${contact.title}</h3>
      <p class="contact-card-text">${contact.value}</p>
    `;
        contactGrid.appendChild(contactCard);
    });
}

// Scroll animation setup
function setupScrollAnimation() {
    // Update active section on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos <= bottom) {
                currentSection = section.id;
                updateActiveNavLink();
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .skill-card, .project-card, .achievement-card, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for anchor links
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

// Add scroll-to-top functionality
window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Console log for debugging
console.log('Portfolio loaded successfully!');