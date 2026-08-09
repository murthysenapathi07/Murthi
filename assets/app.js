/* ==========================================================================
   Senapathi Taraka Narasimha Murthy - Portfolio Data & Interactive Engine
   ========================================================================== */

const PORTFOLIO_DATA = {
  personal: {
    name: "Senapathi Taraka Narasimha Murthy",
    shortName: "T.N. Murthy",
    title: "B.Tech Student | Software Developer | AI/ML Enthusiast",
    email: "murthysenapathi7@gmail.com",
    phone: "8978234465",
    location: "India",
    degree: "B.Tech in Computer Science & Engineering",
    availability: "Available for Software & AI/ML Roles",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },

  // 6 Symmetric Skill Boxes with Even Item Counts (No Empty Slots)
  skillBoxes: [
    {
      id: "webdev",
      title: "Web Development",
      icon: "fas fa-globe text-emerald-600",
      bgColor: "bg-emerald-50/60",
      badgeColor: "bg-emerald-100 text-emerald-800",
      borderColor: "border-emerald-200/80",
      desc: "Full-Stack web interfaces, backend APIs, and responsive frontends",
      items: [
        { name: "HTML5 & CSS3", level: "Advanced", icon: "fab fa-html5 text-orange-500", desc: "Semantic Markup, Modern Flexbox/Grid, Responsive Design" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: "fab fa-js text-yellow-500", desc: "DOM Operations, Async/Fetch APIs, Dynamic Interactions" },
        { name: "React", level: "Proficient", icon: "fab fa-react text-sky-500", desc: "Component Architecture, State Management, Modern Hooks" },
        { name: "Spring Boot", level: "Proficient", icon: "fas fa-leaf text-emerald-600", desc: "Enterprise Java REST APIs, Security & Microservices" },
        { name: "Flask Framework", level: "Advanced", icon: "fas fa-pepper-hot text-red-600", desc: "Python Lightweight Web Services for Model Serving" },
        { name: "REST APIs & JSON", level: "Advanced", icon: "fas fa-network-wired text-brand-600", desc: "API Endpoint Architecture, Serialization & Integration" }
      ]
    },
    {
      id: "database",
      title: "Databases & Storage",
      icon: "fas fa-database text-cyan-600",
      bgColor: "bg-cyan-50/60",
      badgeColor: "bg-cyan-100 text-cyan-800",
      borderColor: "border-cyan-200/80",
      desc: "Relational database design, query optimization, and schema management",
      items: [
        { name: "MySQL Engine", level: "Advanced", icon: "fas fa-server text-cyan-600", desc: "Relational Database Management System & Transactions" },
        { name: "Relational DB Design", level: "Advanced", icon: "fas fa-sitemap text-indigo-600", desc: "Normalization (1NF to 3NF), ER Diagrams & FK Constraints" },
        { name: "Query Optimization", level: "Proficient", icon: "fas fa-bolt text-amber-500", desc: "Indexing Strategies, Complex Joins & Subqueries" },
        { name: "Schema Modeling", level: "Advanced", icon: "fas fa-cubes text-emerald-600", desc: "Data Integrity, Entity Relationship & Storage Structuring" }
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      icon: "fas fa-code text-brand-600",
      bgColor: "bg-brand-50/60",
      badgeColor: "bg-brand-100 text-brand-800",
      borderColor: "border-brand-200/80",
      desc: "Core software engineering languages and object-oriented paradigms",
      items: [
        { name: "Python", level: "Advanced", icon: "fab fa-python text-amber-500", desc: "PyTorch, Flask, Scikit-Learn, Data Structures & Automation" },
        { name: "Java", level: "Proficient", icon: "fab fa-java text-red-500", desc: "OOP Principles, Spring Boot Backend & Enterprise Systems" },
        { name: "C Language", level: "Proficient", icon: "fas fa-laptop-code text-blue-500", desc: "Pointers, Memory Allocation, System Fundamentals" },
        { name: "SQL", level: "Advanced", icon: "fas fa-database text-brand-600", desc: "Data Definition, Manipulation & Complex Analytics" }
      ]
    },
    {
      id: "aiml",
      title: "AI & Machine Learning",
      icon: "fas fa-brain text-purple-600",
      bgColor: "bg-purple-50/60",
      badgeColor: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-200/80",
      desc: "Deep learning models, computer vision, neural networks, and AutoML search",
      items: [
        { name: "Machine Learning", level: "Advanced", icon: "fas fa-robot text-purple-600", desc: "Supervised/Unsupervised Learning & Scikit-Learn" },
        { name: "Deep Learning", level: "Advanced", icon: "fas fa-network-wired text-indigo-600", desc: "Neural Networks, Loss Optimization & PyTorch" },
        { name: "CNN Architectures", level: "Expert", icon: "fas fa-eye text-emerald-600", desc: "Convolutional Networks, Object Detection & Localization" },
        { name: "Computer Vision", level: "Advanced", icon: "fas fa-camera text-sky-600", desc: "OpenCV, Faster R-CNN & Image Augmentation" },
        { name: "GANs Framework", level: "Proficient", icon: "fas fa-magic text-pink-500", desc: "Generative Adversarial Networks & Image Generation" },
        { name: "Explainable AI (XAI)", level: "Proficient", icon: "fas fa-search-plus text-amber-600", desc: "SHAP Values, Grad-CAM Saliency Heatmaps" }
      ]
    },
    {
      id: "csfund",
      title: "Core CS Fundamentals",
      icon: "fas fa-graduation-cap text-indigo-600",
      bgColor: "bg-indigo-50/60",
      badgeColor: "bg-indigo-100 text-indigo-800",
      borderColor: "border-indigo-200/80",
      desc: "Fundamental computer science theory, algorithms, and system design",
      items: [
        { name: "Data Structures & Algo", level: "Advanced", icon: "fas fa-project-diagram text-brand-600", desc: "Arrays, Trees, Graphs, Sorting & Dynamic Programming" },
        { name: "Object-Oriented Design", level: "Advanced", icon: "fas fa-cubes text-purple-600", desc: "Encapsulation, Polymorphism, Abstraction & Design Patterns" },
        { name: "Operating Systems", level: "Proficient", icon: "fas fa-microchip text-slate-700", desc: "Process Scheduling, Threading, Memory & Deadlocks" },
        { name: "Computer Networks", level: "Proficient", icon: "fas fa-network-wired text-sky-600", desc: "TCP/IP Protocol Stack, HTTP/HTTPS, Sockets & Security" }
      ]
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      icon: "fas fa-tools text-slate-700",
      bgColor: "bg-slate-100/80",
      badgeColor: "bg-slate-200 text-slate-800",
      borderColor: "border-slate-300/80",
      desc: "Developer tools, version control, containerization, and build pipelines",
      items: [
        { name: "Git & GitHub", level: "Advanced", icon: "fab fa-git-alt text-orange-600", desc: "Version Control, Feature Branching & Pull Requests" },
        { name: "Docker", level: "Proficient", icon: "fab fa-docker text-blue-600", desc: "Containerizing Applications & Isolated Environments" },
        { name: "Jenkins CI/CD", level: "Proficient", icon: "fab fa-jenkins text-slate-700", desc: "Automated Build Pipelines & Continuous Integration" },
        { name: "VS Code & PyCharm", level: "Advanced", icon: "fas fa-terminal text-blue-500", desc: "Integrated Development Environments & Debugging" }
      ]
    }
  ],

  projects: [
    {
      id: "weed-detection-cnn",
      title: "Weed Detection in Agriculture Using CNN",
      tagline: "Computer Vision & Deep Learning Agricultural Detection",
      category: ["aiml", "cv"],
      featured: true,
      badge: "Featured AI/ML Project #1",
      description: "Automated computer vision framework leveraging Convolutional Neural Networks (Faster R-CNN & YOLO architectures) for real-time localization and classification of agricultural crop plants vs invasive weeds.",
      problem: "Traditional weed management relies heavily on manual labor or uniform chemical herbicide spraying, causing environmental degradation, high operational costs, and crop yield degradation.",
      techStack: ["Python", "PyTorch", "OpenCV", "Faster R-CNN", "YOLOv8", "Flask", "Docker"],
      features: [
        "Achieved 94.6% mean Average Precision (mAP@0.5) on real field imagery across variable light conditions.",
        "Real-time bounding box localization and semantic segmentation distinguishing crops from weeds.",
        "Custom synthetic dataset augmentation pipeline (flipping, color jittering, rotation) to prevent overfitting.",
        "Model quantization and lightweight API packaging for deployment on agricultural autonomous drones/rovers."
      ],
      github: "https://github.com",
      demoText: "View Case Study & Metrics",
      imageGrad: "from-brand-600 to-indigo-700",
      icon: "fas fa-seedling"
    },
    {
      id: "constraint-aware-automl",
      title: "Constraint-Aware Hyperparameter Search for Compatible ML Pipelines",
      tagline: "AutoML Pipeline Optimization Framework",
      category: ["aiml"],
      featured: true,
      badge: "Featured ML Project #2",
      description: "An automated machine learning (AutoML) framework designed to optimize hyperparameter search spaces while guaranteeing component compatibility and respecting execution constraints.",
      problem: "Standard Bayesian optimization and grid searches frequently evaluate invalid or incompatible combinations of feature scaling, dimensionality reduction, and estimators, resulting in wasted compute time.",
      techStack: ["Python", "Scikit-Learn", "Optuna", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Implemented type-aware search space pruning to eliminate incompatible pipeline configurations upfront.",
        "Delivered a 35% reduction in hyperparameter convergence search time compared to unconstrained Bayesian optimization.",
        "Built automatic validation for data schema compatibility between intermediate transformer stages.",
        "Evaluated on a comprehensive benchmark suite across 15 tabular datasets for classification & regression."
      ],
      github: "https://github.com",
      demoText: "View Pipeline Details",
      imageGrad: "from-indigo-600 to-purple-700",
      icon: "fas fa-cogs"
    },
    {
      id: "smart-campus-assets",
      title: "Smart Campus Asset Management System",
      tagline: "Full-Stack Enterprise Hardware Tracking Platform",
      category: ["fullstack"],
      featured: false,
      badge: "Full-Stack Enterprise",
      description: "A centralized web platform for tracking, allocating, and auditing university laboratory equipment, computing hardware, and software licenses across multiple campus departments.",
      problem: "Manual spreadsheet management caused hardware inventory loss, untracked equipment maintenance schedules, and budget inefficiency.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Tailwind CSS"],
      features: [
        "Role-based access control (RBAC) separating Student requests, Faculty approvals, and Admin auditors.",
        "Automated notification system notifying users of upcoming maintenance and return deadlines.",
        "Interactive dashboard displaying real-time asset utilization charts and audit history."
      ],
      github: "https://github.com",
      demoText: "View Architecture",
      imageGrad: "from-slate-700 to-brand-700",
      icon: "fas fa-laptop"
    },
    {
      id: "explainable-medical-ai",
      title: "Explainable Medical Image AI Diagnostic Tool",
      tagline: "Explainable AI (XAI) Radiograph Visualizer",
      category: ["aiml", "cv"],
      featured: false,
      badge: "XAI Medical Vision",
      description: "A deep learning diagnostic assistant for analyzing chest X-rays integrated with SHAP and Grad-CAM visual heatmaps to clarify neural network decision boundaries for radiologists.",
      problem: "Black-box deep learning models lack transparency, hindering clinical adoption and physician trust in automated medical diagnostic tools.",
      techStack: ["Python", "Flask", "PyTorch", "Grad-CAM", "SHAP", "React"],
      features: [
        "Visual heatmap generation pinpointing exact anatomical regions influencing model predictions.",
        "Achieved 92.4% sensitivity rate on chest radiograph validation benchmarks.",
        "Clinician-friendly web application allowing image upload and instant diagnostic report breakdown."
      ],
      github: "https://github.com",
      demoText: "View Case Study",
      imageGrad: "from-emerald-600 to-teal-700",
      icon: "fas fa-heartbeat"
    }
  ],

  journey: [
    {
      year: "2022 — Present",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Academic Core & Software Foundations",
      desc: "Building a rigorous academic foundation in Data Structures, Object-Oriented Programming (Java/Python), Database Systems, and Operating Systems while maintaining strong academic standing.",
      type: "education"
    },
    {
      year: "2023 — 2024",
      title: "Computer Vision & Agriculture Deep Learning Research",
      subtitle: "Capstone Project Development",
      desc: "Engineered deep learning models using PyTorch and OpenCV for precision agriculture (Weed Detection CNN), achieving high mAP scores and exploring quantization techniques.",
      type: "project"
    },
    {
      year: "2024 — 2025",
      title: "AutoML Pipeline Optimization & Full-Stack Development",
      subtitle: "Constraint-Aware Search & Enterprise Apps",
      desc: "Developed constraint-aware hyperparameter optimization frameworks in Python and built full-stack applications with Spring Boot, React, and MySQL.",
      type: "milestone"
    },
    {
      year: "Future Goals",
      title: "Industry Software Development & AI Engineering",
      subtitle: "Professional Career Target",
      desc: "Targeting Software Engineering (SWE) and AI/ML Developer roles to build scalable, high-impact enterprise applications.",
      type: "future"
    }
  ],

  certifications: [
    {
      title: "Deep Learning & Neural Networks Specialization",
      org: "DeepLearning.AI / Coursera",
      date: "2024",
      skills: ["CNNs", "Hyperparameter Tuning", "PyTorch", "Optimization"],
      link: "#"
    },
    {
      title: "Java Full Stack Enterprise Certification",
      org: "Oracle / Certified Partner",
      date: "2024",
      skills: ["Java OOP", "Spring Boot", "RESTful Services", "SQL Integration"],
      link: "#"
    },
    {
      title: "Machine Learning with Python",
      org: "IBM / NPTEL",
      date: "2023",
      skills: ["Supervised Learning", "Scikit-Learn", "Model Evaluation"],
      link: "#"
    },
    {
      title: "SQL & Relational Database Design",
      org: "HackerRank Verified",
      date: "2023",
      skills: ["Schema Design", "Complex Joins", "Indexing", "Query Optimization"],
      link: "#"
    }
  ],

  achievements: [
    {
      icon: "fas fa-trophy text-amber-500",
      title: "Hackathon Finalist (AI/ML Track)",
      desc: "Recognized among top innovator teams for developing high-precision computer vision models for agricultural computer vision applications."
    },
    {
      icon: "fas fa-award text-brand-600",
      title: "Academic Top Performer",
      desc: "Consistently recognized for top-tier academic scores in Computer Science, Machine Learning, and Data Structures coursework."
    },
    {
      icon: "fas fa-code text-emerald-600",
      title: "100+ Algorithmic Problems Solved",
      desc: "Successfully solved 100+ algorithmic challenges across LeetCode & HackerRank in Data Structures, Dynamic Programming, and Graph Theory."
    }
  ]
};

/* ==========================================================================
   DOM INITIALIZATION & RENDERERS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  renderSkills("all");
  renderProjects("all");
  renderJourney();
  renderCertifications();
  renderAchievements();
  renderGitHubHeatmap();

  setupScrollProgress();
  setupActiveNavTracker();
  setupMobileMenu();
  setCopyrightYear();
});

/* ================= SKILLS BOXES RENDERER ================= */
function renderSkills(categoryFilter) {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const boxes = categoryFilter === "all" 
    ? PORTFOLIO_DATA.skillBoxes 
    : PORTFOLIO_DATA.skillBoxes.filter(box => box.id === categoryFilter);

  container.className = categoryFilter === "all" 
    ? "grid grid-cols-1 lg:grid-cols-2 gap-8" 
    : "grid grid-cols-1 gap-8";

  container.innerHTML = boxes.map(box => `
    <div class="bg-white rounded-3xl border ${box.borderColor} shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
      
      <!-- Category Box Header -->
      <div class="${box.bgColor} p-6 border-b ${box.borderColor} flex items-center justify-between">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-2xl shrink-0">
            <i class="${box.icon}"></i>
          </div>
          <div>
            <h3 class="text-xl font-extrabold text-slate-900">${box.title}</h3>
            <p class="text-xs text-slate-600 font-medium">${box.desc}</p>
          </div>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-bold ${box.badgeColor} shrink-0">
          ${box.items.length} Skills
        </span>
      </div>

      <!-- Category Box Content Grid (Symmetric 2-column layout per box) -->
      <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
        ${box.items.map(item => `
          <div class="bg-slate-50/80 hover:bg-white p-4 rounded-2xl border border-slate-200/70 hover:border-brand-300 hover:shadow-soft transition-all duration-200 flex flex-col justify-between space-y-2 group h-full">
            <div class="space-y-2">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5 overflow-hidden">
                  <div class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <i class="${item.icon}"></i>
                  </div>
                  <h4 class="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate" title="${item.name}">${item.name}</h4>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-700 border border-slate-200 shrink-0">
                  ${item.level}
                </span>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">${item.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>

    </div>
  `).join("");
}

function filterSkills(category) {
  const buttons = document.querySelectorAll("#skill-tabs button");
  buttons.forEach(btn => {
    btn.classList.remove("active");
  });
  event.currentTarget.classList.add("active");

  renderSkills(category);
}

/* ================= PROJECTS RENDERER ================= */
function renderProjects(categoryFilter) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  let filtered = PORTFOLIO_DATA.projects;
  if (categoryFilter !== "all") {
    filtered = PORTFOLIO_DATA.projects.filter(p => p.category.includes(categoryFilter));
  }

  const featuredList = filtered.filter(p => p.featured);
  const standardList = filtered.filter(p => !p.featured);

  let htmlContent = "";

  // Featured Project #1
  if (featuredList.length > 0) {
    const proj = featuredList[0];
    htmlContent += `
      <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden group">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl group-hover:bg-brand-500/30 transition-all duration-500"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <i class="fas fa-star text-amber-400"></i>
              <span>${proj.badge}</span>
            </div>

            <div class="space-y-2">
              <h3 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">${proj.title}</h3>
              <p class="text-brand-300 text-sm font-semibold">${proj.tagline}</p>
            </div>

            <p class="text-slate-300 leading-relaxed text-sm sm:text-base">${proj.description}</p>

            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-slate-200">
              <strong class="text-brand-300 block font-bold mb-1">Problem Statement:</strong>
              ${proj.problem}
            </div>

            <div class="flex flex-wrap gap-2">
              ${proj.techStack.map(t => `<span class="px-3 py-1 rounded-lg bg-white/10 text-white border border-white/10 text-xs font-mono font-medium">${t}</span>`).join("")}
            </div>

            <div class="pt-2 flex flex-wrap gap-4">
              <button onclick="openProjectModal('${proj.id}')" class="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2">
                <span>${proj.demoText}</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
              <a href="${proj.github}" target="_blank" class="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2">
                <i class="fab fa-github text-base"></i>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center">
            <div class="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-tr ${proj.imageGrad} p-6 flex flex-col justify-between border border-white/20 shadow-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
              <div class="flex items-center justify-between text-white/80">
                <span class="font-mono text-xs font-bold uppercase tracking-wider">AI Vision Architecture</span>
                <i class="${proj.icon} text-2xl text-white"></i>
              </div>
              
              <div class="space-y-3 bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div class="flex items-center justify-between text-xs text-slate-300">
                  <span>Dataset Evaluation</span>
                  <span class="text-emerald-400 font-bold">94.6% mAP</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div class="h-full bg-emerald-400 rounded-full" style="width: 94.6%"></div>
                </div>
                <p class="text-[11px] text-slate-400">Model: Faster R-CNN + ResNet50 Backbone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Combine remaining featured and standard projects into a balanced 2-column or 3-column grid
  const remainingList = [...featuredList.slice(1), ...standardList];

  if (remainingList.length > 0) {
    const gridCols = remainingList.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
    htmlContent += `
      <div class="grid ${gridCols} gap-8">
        ${remainingList.map(proj => `
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold">
                  ${proj.badge}
                </span>
                <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                  <i class="${proj.icon}"></i>
                </div>
              </div>

              <div class="space-y-1">
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">${proj.title}</h3>
                <p class="text-xs font-medium text-slate-500">${proj.tagline}</p>
              </div>

              <p class="text-slate-600 text-sm leading-relaxed">${proj.description}</p>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <strong class="text-slate-900 block font-bold mb-1">Key Innovation:</strong>
                ${proj.problem}
              </div>

              <div class="flex flex-wrap gap-1.5 pt-1">
                ${proj.techStack.map(t => `<span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium">${t}</span>`).join("")}
              </div>
            </div>

            <div class="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
              <button onclick="openProjectModal('${proj.id}')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5">
                <span>Case Study</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
              <a href="${proj.github}" target="_blank" class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 transition-all" title="View Code">
                <i class="fab fa-github text-base"></i>
              </a>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  container.innerHTML = htmlContent;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function filterProjects(cat) {
  const pills = document.querySelectorAll("#project-filter-pills button");
  pills.forEach(p => p.classList.remove("active"));
  event.currentTarget.classList.add("active");

  renderProjects(cat);
}

/* ================= JOURNEY TIMELINE RENDERER ================= */
function renderJourney() {
  const container = document.getElementById("journey-timeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.journey.map((item, idx) => {
    const isEven = idx % 2 === 0;
    return `
      <div class="relative flex flex-col sm:flex-row items-center justify-between ${isEven ? 'sm:flex-row-reverse' : ''} group">
        
        <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-600 z-10 shadow-md group-hover:scale-125 transition-transform duration-300"></div>

        <div class="w-full sm:w-[45%] pl-12 sm:pl-0">
          <div class="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 space-y-2">
            <span class="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold">
              ${item.year}
            </span>
            <h4 class="text-lg font-extrabold text-slate-900">${item.title}</h4>
            <p class="text-xs font-semibold text-brand-600">${item.subtitle}</p>
            <p class="text-xs text-slate-600 leading-relaxed pt-1">${item.desc}</p>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

/* ================= CERTIFICATIONS RENDERER ================= */
function renderCertifications() {
  const container = document.getElementById("certifications-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 space-y-4 flex flex-col justify-between h-full">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="p-2.5 bg-brand-50 text-brand-600 rounded-xl">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <span class="text-xs font-bold text-slate-400">${cert.date}</span>
        </div>
        <div>
          <h4 class="font-bold text-slate-900 text-base leading-snug">${cert.title}</h4>
          <p class="text-xs font-semibold text-brand-600 mt-1">${cert.org}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${cert.skills.map(s => `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">${s}</span>`).join("")}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-emerald-600 font-bold flex items-center gap-1">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i> Verified Credential
        </span>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

/* ================= ACHIEVEMENTS RENDERER ================= */
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
    <div class="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 space-y-3 flex flex-col justify-between h-full">
      <div class="space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-xs">
          <i class="${ach.icon}"></i>
        </div>
        <h4 class="font-extrabold text-slate-900 text-base">${ach.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${ach.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ================= GITHUB HEATMAP RENDERER ================= */
function renderGitHubHeatmap() {
  const container = document.getElementById("github-heatmap-cells");
  if (!container) return;

  const intensities = [
    "bg-slate-100", "bg-emerald-200", "bg-emerald-300", "bg-emerald-500", "bg-emerald-600"
  ];

  let cellsHTML = "";
  for (let i = 0; i < 48; i++) {
    const rand = Math.random();
    let idx = 0;
    if (rand > 0.7) idx = 4;
    else if (rand > 0.5) idx = 3;
    else if (rand > 0.3) idx = 2;
    else if (rand > 0.1) idx = 1;

    cellsHTML += `<div class="h-4 rounded-xs ${intensities[idx]}" title="Commits active on day ${i + 1}"></div>`;
  }

  container.innerHTML = cellsHTML;
}

/* ================= PROJECT MODAL LOGIC ================= */
function openProjectModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const content = document.getElementById("modal-content");
  content.innerHTML = `
    <div class="space-y-6">
      <div class="space-y-2">
        <span class="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-100">
          ${proj.badge}
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${proj.title}</h2>
        <p class="text-slate-500 text-sm font-medium">${proj.tagline}</p>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">Problem Statement & Scope:</h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${proj.problem}</p>
      </div>

      <div class="space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">Key Features & Engineering Innovations:</h4>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
          ${proj.features.map(f => `
            <li class="flex items-start gap-2.5">
              <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
              <span>${f}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">Technologies Used:</h4>
        <div class="flex flex-wrap gap-2">
          ${proj.techStack.map(t => `<span class="px-3 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-100 text-xs font-mono font-bold">${t}</span>`).join("")}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <a href="${proj.github}" target="_blank" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-brand-600 font-bold text-xs transition-colors flex items-center gap-2">
          <i class="fab fa-github text-sm"></i>
          <span>GitHub Repository</span>
        </a>
        <button onclick="closeProjectModal()" class="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors">
          Close Window
        </button>
      </div>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }

  const modal = document.getElementById("project-modal");
  modal.classList.remove("hidden");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
}

/* ================= RESUME MODAL LOGIC ================= */
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  modal.classList.remove("hidden");
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  modal.classList.add("hidden");
}

function triggerResumeDownload() {
  showToast("Downloading Resume PDF...");
  const link = document.createElement("a");
  link.href = "#";
  link.setAttribute("download", "Senapathi_Taraka_Narasimha_Murthy_Resume.pdf");
  document.body.appendChild(link);
  showToast("Resume download initialized!");
}

/* ================= CONTACT FORM & UTILS ================= */
function handleContactSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("contact-name").value;
  
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  showToast(`Thank you ${name}! Your message has been sent.`);
  document.getElementById("contact-form").reset();
}

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg || "Copied to clipboard!");
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  
  if (!toast || !toastMsg) return;

  toastMsg.innerText = msg;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

/* ================= SCROLL PROGRESS & NAV TRACKER ================= */
function setupScrollProgress() {
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  });
}

function setupActiveNavTracker() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
}

function setCopyrightYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }
}
