export const projects = [
  {
    id: 'fitness',
    name: 'Aivo — Fitness Management',
    description:
      'A full-stack fitness tracking platform for logging workouts, monitoring progress, and managing training plans, with a REST API backing a responsive React dashboard.',
    stack: ['React', 'Flask', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/skmuntasir/aivo-fitness-tracker',
    live: 'https://aivo-ai-fitness-tracker.vercel.app',
    image: null,
  },
  {
    id: 'restaurant',
    name: 'Restaurant Management',
    description:
      'An end-to-end restaurant operations system covering menu management, orders, and table/reservation workflows through a clean, role-based interface.',
    stack: ['React', 'Flask', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/skmuntasir/restaurant-management',
    live: 'https://restro-sktasrian.vercel.app',
    image: null,
  },
  {
    id: 'tree',
    name: 'Tree Sterility Detection',
    description:
      'A machine learning pipeline benchmarking five classifiers — KNN, Decision Tree, Logistic Regression, Naive Bayes, and a Neural Network — to predict tree seedling sterility from ecological and biochemical data.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Jupyter'],
    github: 'https://github.com/skmuntasir/Tree-Sterility-Detection',
    live: null,
    image: null,
  },
  {
    id: 'shooter',
    name: 'OpenGL Space Shooter',
    description:
      'A top-down 3D arena shooter built with raw PyOpenGL/GLUT, featuring a custom humanoid model, dynamic enemy spawning, and first/third-person camera modes.',
    stack: ['Python', 'PyOpenGL', 'GLUT'],
    github: 'https://github.com/skmuntasir/OpenGL-Space-Shooter',
    live: null,
    image: null,
  },
  {
    id: 'survival',
    name: 'OpenGL Space Survival',
    description:
      'An on-rails 3D space combat game with procedural asteroid fields, boss encounters, and difficulty that scales with score — built entirely from scratch with PyOpenGL/GLUT.',
    stack: ['Python', 'PyOpenGL', 'GLUT'],
    github: 'https://github.com/skmuntasir/OpenGL-Space-Survival',
    live: null,
    image: null,
  },
  {
  id: 'lunar-descent',
  name: 'Lunar Descent',
  description: 'A team-collaborative lunar landing game built for a university project — contributed alongside two teammates.',
  stack: ['Python', 'OpenGL', 'GLUT', 'PyGame'],
  github: 'https://github.com/Jaky-Chow01/project-Lunar-Descent-',
  // no `live` field — it's a desktop app, not a web demo, so ProjectCard
  // will just skip rendering the "Live Demo" button automatically
},
];
