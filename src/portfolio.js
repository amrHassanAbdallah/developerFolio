/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Hero section

const greeting = {
  eyebrow: "Amr Hassan",
  headline: "Backend engineer building reliable distributed systems.",
  description:
    "I build backend services, integrate external platforms, and improve system performance and reliability. At inDrive, I owned the backend integration of WeRide’s autonomous fleet from API design through a field pilot in Saudi Arabia.",
  actions: [
    {text: "View experience", href: "/#/experience"},
    {text: "View résumé", href: "/#/resume"},
    {text: "Get in touch", href: "/#/contact"}
  ],
  featuredWork: {
    text: "Read the autonomous-fleet integration case study",
    to: "/experience?case=weride"
  },
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/amrHassanAbdallah",
  linkedin: "https://www.linkedin.com/in/amr-hassan-abdullah/",
  gmail: "amr.hassan.abdullah@gmail.com",
  display: true // Set true to display this section, defaults to false
};

const capabilities = {
  title: "Where I can help",
  items: [
    {
      title: "Integrate external platforms",
      description:
        "API contracts, vendor testing, and clear service boundaries for maintainable integrations.",
      evidence: "See the WeRide integration",
      to: "/experience?case=weride"
    },
    {
      title: "Improve backend performance",
      description:
        "Find bottlenecks in data services and ingestion pipelines. At Magalix, I reduced response time from 600 ms to 100 ms.",
      evidence: "See the Magalix results",
      to: "/experience?company=magalix"
    },
    {
      title: "Prepare services for production",
      description:
        "Reliability work, monitoring, alerting, and architecture reviews—from integration development through pilot support.",
      evidence: "See production readiness at inDrive",
      to: "/experience?company=indrive"
    }
  ]
};

// Technical expertise section

const technicalExpertise = {
  title: "Technical expertise",
  description:
    "My work spans API and vendor integrations, data-intensive services, and production operations—from defining contracts and architecture to monitoring, deployment, and migrations.",
  groups: [
    {
      heading: "Languages and runtimes",
      items: ["Go", "Node.js", "PHP", "TypeScript"]
    },
    {
      heading: "APIs and messaging",
      items: ["gRPC", "REST", "Kafka"]
    },
    {
      heading: "Data",
      items: ["PostgreSQL", "MongoDB", "Redis", "BigQuery"]
    },
    {
      heading: "Infrastructure and reliability",
      items: [
        "Kubernetes",
        "Docker",
        "AWS",
        "GCP",
        "CI/CD",
        "Monitoring and alerting"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education line, rendered after the employment entries in Work experience

const education = {
  line: "BSc Computer Science · Helwan University · 2015–2019"
};

// Work experience section
// Each entry's `bullets` are shown initially; `moreBullets` sit under a
// native <details> disclosure labelled "More at <company>".

const workExperiences = {
  display: true,
  experience: [
    {
      id: "indrive",
      current: true,
      role: "Senior Software Engineer",
      company: "inDrive",
      companylogo: require("./assets/images/indriveLogo.png"),
      date: "Jul 2025 – Present",
      caseStudy: {
        id: "weride",
        title: "Case study: WeRide fleet integration",
        sections: [
          {
            heading: "The challenge",
            text: "Connect WeRide’s autonomous-vehicle fleet to inDrive’s ride-hailing platform for a field pilot in Saudi Arabia, while keeping vendor-specific logic out of shared platform services."
          },
          {
            heading: "My responsibility",
            text: "I designed and owned the integration backend using Go, Kafka, gRPC, and Kubernetes. I authored the API contract, tested the vendor sandbox, and drove architecture decisions across six teams with the Architecture Committee."
          },
          {
            heading: "The key decision",
            text: "Keep vendor-specific behavior within the integration rather than introducing it into shared platform services. The API contract and sandbox testing established the integration requirements; issues I reported were fixed before go-live."
          },
          {
            heading: "Delivery and outcome",
            text: "I prepared the service for production through reliability work, monitoring and alerting, and security and architecture reviews, then supported it through the Saudi field pilot."
          }
        ]
      },
      bullets: [
        "Owned the backend connecting WeRide’s autonomous fleet to inDrive’s ride-hailing platform, using Go, Kafka, gRPC, and Kubernetes, through a field pilot in Saudi Arabia.",
        "Authored the vendor API contract and tested WeRide’s sandbox, identifying issues that were resolved before go-live.",
        "Prepared the service for production with reliability work, monitoring and alerting, and security and architecture reviews; supported it throughout the pilot.",
        "Drove architecture decisions across six teams and the Architecture Committee, keeping vendor-specific logic out of shared platform services."
      ],
      moreBullets: [
        "Extended saved places across all inDrive business lines, including a zero-downtime data migration.",
        "Designed a validation gate to catch invalid geographic data before release, then handed it over to the owning team."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "BitBang",
      companylogo: require("./assets/images/bitbang.png"),
      date: "Aug 2024 – Mar 2025",
      bullets: [
        "Led the backend squad for Amplifidor, managing execution, priorities, and scalability.",
        "Built a federated service for user analytics and SSO data, simplifying deployments and feature rollouts."
      ],
      moreBullets: [
        "Led technical debt reduction to improve backend performance and maintainability.",
        "Created a shared utilities package used across 5+ services.",
        "Integrated Sentry, Grafana, Prometheus, and ELK to improve monitoring and troubleshooting.",
        "Automated testing and deployments through CI/CD pipelines.",
        "Introduced test-driven development and wrote more than 150 unit tests."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Alraedah",
      companylogo: require("./assets/images/alraedah.jpeg"),
      date: "Jun 2023 – Dec 2023",
      bullets: [
        "Designed and implemented backend solutions with a team of four engineers.",
        "Re-architected backend systems in Go, improving maintainability and integration speed by 20%."
      ],
      moreBullets: [
        "Built CI/CD pipelines with GitHub deployments to streamline releases across environments.",
        "Reviewed code and documented and enforced coding standards."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "SWVL",
      companylogo: require("./assets/images/swvlLogo.jpeg"),
      date: "Jan 2022 – Dec 2022",
      bullets: [
        "Led a team of seven engineers, guiding delivery and code quality.",
        "Improved B2B Kubernetes operations with monitoring dashboards, playbooks, and deployment scripts."
      ],
      moreBullets: [
        "Optimized data fetching for the transportation-as-a-service platform to reduce execution time and BigQuery costs.",
        "Established code-review and quality standards.",
        "Consolidated duplicated transportation applications in Kubernetes and automated operational work to improve reliability.",
        "Led technical and business discussions to understand customer needs and drive system improvements."
      ]
    },
    {
      role: "Full-stack JavaScript Session Lead",
      company: "Udacity",
      companylogo: require("./assets/images/udacityLogo.jpeg"),
      date: "Dec 2021 – Nov 2022",
      bullets: [
        "Led full-stack JavaScript sessions with presentations, code examples, and feedback on student work.",
        "Supported more than 50 students through feedback and class discussions."
      ],
      moreBullets: [
        "Created FAQ documents to help students work through recurring questions."
      ]
    },
    {
      role: "Software Engineer",
      company: "Magalix",
      id: "magalix",
      companylogo: require("./assets/images/magalixLogo.jpeg"),
      date: "Sep 2019 – Dec 2021",
      bullets: [
        "Reduced time-series data response time from 600 ms to 100 ms and expanded write throughput.",
        "Identified an ingestion bottleneck and implemented circuit breakers, increasing ingestion rate by 10×."
      ],
      moreBullets: [
        "Built webhook integrations with Zapier, Slack, and Jira to make recommendations available beyond the web application.",
        "Defined user and functional requirements for three services based on business needs.",
        "Reduced per-cluster tracking requests from 60 to 2 per hour.",
        "Received an exceptional achievement award for stabilizing the development environment."
      ]
    },
    {
      role: "Software Engineer",
      company: "Teknowl",
      companylogo: require("./assets/images/teknowlLogo.jpeg"),
      date: "Nov 2017 – Nov 2018",
      bullets: [
        "Built a reusable API response package using HAL (Hypertext Application Language), simplifying how related data models were represented.",
        "Optimized MySQL queries, reducing executed queries on multiple pages by 27%."
      ],
      moreBullets: [
        "Integrated Elasticsearch with data mappings, synchronization, and role-based search.",
        "Shared technical resources and documented solutions with diagrams to support team decisions.",
        "Established and maintained coding standards for five backend engineers."
      ]
    }
  ]
};

// Writing section

const blogSection = {
  title: "Writing",
  subtitle:
    "Notes on backend systems, infrastructure, and engineering trade-offs.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.amr-hassan.xyz/when-to-go-serverless",
      title: "When to go serverless",
      description:
        "Trade-offs to consider before choosing serverless infrastructure."
    },
    {
      url: "https://blog.amr-hassan.xyz/kubernetes-namespaces-you-should-never-miss-with",
      title: "Kubernetes namespaces you should not mess with",
      description: "System namespaces and why they matter to a working cluster."
    },
    {
      url: "https://blog.amr-hassan.xyz/message-queue-battle-royal-sqs-vs-kafka",
      title: "SQS vs Kafka",
      description: "Different messaging models and where each fits."
    }
  ],
  seeMoreText: "More articles",
  seeMore: "https://blog.amr-hassan.xyz/",
  display: true // Set false to hide this section, defaults to true
};

// Public client feedback. Source details are recorded in docs/client-feedback-sources.md.
const clientFeedback = {
  title: "Client feedback",
  subtitle: "Feedback from freelance projects.",
  reviews: [
    {
      id: "upwork-laravel",
      quote:
        "Amr added a new feature to my Laravel application. He respected my deadline and delivered exactly what I needed.",
      reviewer: "Upwork Client",
      context: "Laravel feature development",
      sourceLabel: "View Upwork profile",
      sourceUrl: "https://www.upwork.com/freelancers/~0148eb64c3222c1bc6"
    },
    {
      id: "fiverr-emadbashouty",
      quote:
        "…understanding my requirements as a non-developer and guiding me through the development process…",
      reviewer: "emadbashouty · Fiverr client",
      context: "Client guidance · Review excerpt",
      sourceLabel: "View Fiverr profile",
      sourceUrl: "https://www.fiverr.com/amrhassan823"
    }
  ]
};

// Contact section

const contactInfo = {
  title: "Get in touch",
  subtitle:
    "Have a backend project or an engineering role in mind? Tell me about the system, the challenge, and what you need. My experience spans platform integrations, performance improvements, and production reliability.",
  email_address: socialMediaLinks.gmail,
  meetingLink: "https://bit.ly/book-meeting-w-me",
  meetingLinkText: "Book a conversation"
};

export {
  greeting,
  capabilities,
  socialMediaLinks,
  technicalExpertise,
  education,
  workExperiences,
  blogSection,
  clientFeedback,
  contactInfo
};
