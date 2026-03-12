export const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", value: 87 },
      { name: "Python", value: 80 },
      { name: "C++", value: 76 },
      { name: "SQL", value: 90 }
    ]
  },
  {
    title: "Data Engineering Stack",
    skills: [
      { name: "ETL Pipelines", value: 89 },
      { name: "Data Modeling", value: 83 },
      { name: "Batch Processing", value: 85 },
      { name: "PySpark", value: 82 },
      { name: "Airflow", value: 78 },
      { name: "dbt", value: 75 },
      { name: "Kafka", value: 72 },
      { name: "Hadoop", value: 70 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", value: 88 },
      { name: "PostgreSQL", value: 80 },
      { name: "MongoDB", value: 72 }
    ]
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: [
      { name: "AWS", value: 74 },
      { name: "Docker", value: 76 },
      { name: "Git", value: 86 }
    ]
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", value: 70 },
      { name: "Canva", value: 77 },
      { name: "Adobe Illustrator", value: 83 }
    ]
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "Leadership", value: 89 },
      { name: "Adaptability", value: 84 },
      { name: "Problem Solving", value: 91 }
    ]
  }
];

export const projects = [
  {
    name: "Enterprise Data Pipeline (SCD Type 2)",
    role: "Data Engineer",
    timeline: "2025",
    achievements: [
      "Designed history-preserving dimension logic with SCD Type 2 records.",
      "Reduced reconciliation time by introducing deterministic surrogate key flow.",
      "Implemented quality checks for duplicate change events."
    ],
    stack: ["Apache Spark", "Python", "SQL", "PostgreSQL"],
    impact: "Delivered one production-grade pipeline for auditable historical data.",
    github: "https://github.com/krishnad03/Intermediate-Assessment"
  },
  {
    name: "Advance Sales Analysis",
    role: "Data Analyst / Data Engineer",
    timeline: "2026",
    achievements: [
      "Built a Python + SQL analytics workflow for transactional sales datasets.",
      "Used CTEs and window functions for growth trend and top-customer analysis.",
      "Structured modular query logic to keep reporting reusable and scalable."
    ],
    stack: ["Python", "SQL", "Pandas", "Jupyter Notebook"],
    impact: "Improved decision visibility through focused trend and behavior reports.",
    github: "https://github.com/krishnad03/Advance_Sales_Analysis"
  },
  {
    name: "Weather Data Scraper",
    role: "Python Developer",
    timeline: "2026",
    achievements: [
      "Created a Python web scraper using BeautifulSoup to fetch city weather data.",
      "Stored parsed output for later reuse in local files.",
      "Designed lightweight scraping logic with a clear input-output flow."
    ],
    stack: ["Python", "BeautifulSoup", "HTML"],
    impact: "Automated weather data retrieval for quick repeatable access.",
    github: "https://github.com/krishnad03/Weather-scraper"
  },
  {
    name: "SQL + Python Challenge Repository",
    role: "Problem Solver",
    timeline: "2026",
    achievements: [
      "Solved 5 SQL scenario problems and 1 Python challenge on data operations.",
      "Covered forward-fill logic, trend analysis, pivoted reporting and join-heavy workflows.",
      "Documented approach in structured challenge folders."
    ],
    stack: ["SQL", "Python", "Jupyter Notebook"],
    impact: "Strengthened production-style query design and data-cleaning patterns.",
    github: "https://github.com/krishnad03/assessment-30jan"
  }
];

export const certifications = [
  {
    title: "NPTEL C++",
    detail: "Completed core C++ programming coursework with strong OOP and problem-solving fundamentals."
  },
  {
    title: "NPTEL Java",
    detail: "Built a strong Java foundation in object-oriented design, collections, and application logic."
  },
  {
    title: "NPTEL Data Analytics",
    detail: "Applied Python analytics using NumPy and Pandas for data exploration and transformation."
  },
  {
    title: "Deloitte Australia Data Analytics (2025)",
    detail: "Industry-focused analytics certification covering business reporting and insight generation."
  },
  {
    title: "Infosys Springboard",
    detail: "Structured self-paced upskilling track in programming and software engineering basics."
  },
  {
    title: "Wipro Talent Next",
    detail: "Java training pathway focused on backend coding practice and enterprise readiness."
  }
];

export const leadership = [
  {
    title: "E-Summit Core Member",
    detail: "Led and coordinated a 70+ member organizing team for flagship entrepreneurship events."
  },
  {
    title: "Institution Innovation Council Core Member",
    detail: "Supported innovation initiatives, planning cycles, and execution for institute programs."
  },
  {
    title: "Community Leader - EDC",
    detail: "Drove engagement and activities under the Entrepreneurship Development Cell."
  },
  {
    title: "Hackathon Organizer",
    detail: "Managed logistics and participant support for Kriyeta national-level hackathons."
  },
  {
    title: "Innovation Conference",
    detail: "Coordinated sessions for innovation, incubation, and IPR-focused conference tracks."
  },
  {
    title: "ACROSET",
    detail: "Handled backend operations and event workflow for ACROSET programs."
  },
  {
    title: "Campus Placement Drive Coordinator",
    detail: "Facilitated process coordination with 20+ companies for campus placement drives."
  },
  {
    title: "Graffiti Winner",
    detail: "Won 1st place at Ardor Utkrisht 2024 for creative visual design and execution."
  }
];

export const metrics = [
  { label: "Production Data Pipeline", value: 1, suffix: "" },
  { label: "Certifications", value: 6, suffix: "+" },
  { label: "Team Leadership", value: 70, suffix: "+" },
  { label: "CGPA", value: 7.8, suffix: "" },
  { label: "Years Coding", value: 3, suffix: "+" }
];
