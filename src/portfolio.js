/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const yearsOfExperience = {
    meh: "1 year or less",
    beginner: "2 - 3 years",
    pro: "4 - 6 years",
    super: "7 - 9 years",
    superulterproce: "10+ years"
}
const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Amr Hassan",
    title: "Hi all, I'm Amr",
    subTitle: emoji(
        "As a software engineer with " + (new Date().getFullYear() - 2017) + "+ years of experience and a relentless passion for technology, I have honed my skills in a wide range of programming languages such as Nodejs, Golang, PHP, and many others. My expertise extends to multiple technologies like bigQuery, MongoDB, GCP, AWS and more. I am a problem-solver, a fast learner and a creative thinker who thrives on taking on new challenges. My ultimate goal is to create innovative solutions that make a real impact and drive the industry forward. Additionally, I am passionate about writing technical blogs and sharing my knowledge and experience with others to help them learn and grow in their careers."
    ),
    resumeLink:
        "/#/resume", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/amrHassanAbdallah",
    linkedin: "https://www.linkedin.com/in/amr-hassan-abdullah/",
    gmail: "amr.hassan.abdullah@gmail.com",
    twitter: "https://twitter.com/amrh434",
    stackoverflow: "https://stackoverflow.com/users/7331793/amr-h",
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "Passionate, curious human being who loves digging under the hood of every new technology",
    skills: [
        emoji(
            "⚡ Building the right thing the right way"
        ),
        emoji("⚡ Optimize and scale applications"),
        emoji(
            "⚡ Influencing others"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {"skillName": "Agile", "experience": yearsOfExperience.pro}, {
            "skillName": "Bash (Gnu Bash)",
            "experience": yearsOfExperience.pro
        }, {"skillName": "Git", "experience": yearsOfExperience.pro}, {
            "skillName": "GitHub",
            "experience": yearsOfExperience.pro
        }, {"skillName": "Jira (Atlassian)", "experience": yearsOfExperience.pro}, {
            "skillName": "Microservices",
            "experience": yearsOfExperience.pro
        }, {"skillName": "MongoDB", "experience": yearsOfExperience.pro}, {
            "skillName": "Node.js",
            "experience": yearsOfExperience.pro
        },{
            "skillName": "PHP",
            "experience": yearsOfExperience.pro
        }, {"skillName": "PostgreSQL", "experience": yearsOfExperience.pro}, {
            "skillName": "Redis",
            "experience": yearsOfExperience.pro
        }, {"skillName": "REST", "experience": yearsOfExperience.pro}, {
            "skillName": "SQL",
            "experience": yearsOfExperience.pro
        },{
            "skillName": "TDD",
            "experience": yearsOfExperience.pro
        }, {"skillName": "AWS (Amazon Web Services)", "experience": yearsOfExperience.beginner}, {
            "skillName": "CircleCI",
            "experience": yearsOfExperience.beginner
        }, {"skillName": "Docker", "experience": yearsOfExperience.beginner}, {
            "skillName": "GCP (Google Cloud Platform)",
            "experience": yearsOfExperience.beginner
        },{
            "skillName": "BigTable",
            "experience": yearsOfExperience.beginner
        },{
            "skillName": "BigQuery",
            "experience": yearsOfExperience.beginner
        }, {"skillName": "Github Actions", "experience": yearsOfExperience.beginner}, {
            "skillName": "Golang (Go)",
            "experience": yearsOfExperience.beginner
        }, {"skillName": "Kafka", "experience": yearsOfExperience.beginner}, {
            "skillName": "Kubernetes",
            "experience": yearsOfExperience.beginner
        }, {"skillName": "Laravel", "experience": yearsOfExperience.beginner}, {
            "skillName": "TypeScript",
            "experience": yearsOfExperience.beginner
        }, {"skillName": "Datadog", "experience": yearsOfExperience.meh}, {
            "skillName": "DynamoDB (AWS)",
            "experience": yearsOfExperience.meh
        }, {"skillName": "Elastic Search", "experience": yearsOfExperience.meh}, {
            "skillName": "Grafana",
            "experience": yearsOfExperience.meh
        }, {"skillName": "Jenkins", "experience": yearsOfExperience.meh}, {
            "skillName": "Lambda",
            "experience": yearsOfExperience.meh
        }, {"skillName": "Prometheus", "experience": yearsOfExperience.meh}, {
            "skillName": "Python",
            "experience": yearsOfExperience.meh
        }, {"skillName": "RDS (AWS)", "experience": yearsOfExperience.meh}, {
            "skillName": "Terraform",
            "experience": yearsOfExperience.meh
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Helwan University",
            logo: require("./assets/images/helwanLogo.jpeg"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2015 - April 2019",
            desc: "Scored excellent in the graduation project.",
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: false, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Senior Software Engineer",
            company: "SWVL",
            companylogo: require("./assets/images/swvlLogo.jpeg"),
            date: "Jan 2022 – Present",
            descBullets: [
                "Supervise a team of 7 engineers.",
                "Partnered with business teams and operators to ensure problems were addressed and corrected.",
                "Decreased the number of fetched resources by ~0.001x for the TaaS solution which in return reduced the execution time & the bigQuery’s bill.",
                "Enhanced the docs for system designs as well as planning system improvements."
            ]
        },
        {
            role: "FullStack JavaScript Session Lead",
            company: "Udacity",
            companylogo: require("./assets/images/udacityLogo.jpeg"),
            date: "Dec 2021 - Present ",
            descBullets: [
                "Made FAQ documents which reduced students' questions & boosted the graduation rate.",
                "Built relationships with over 50 students and ensured all students felt attended to with personalized feedback, class discussions, and encouragement",
                "Provide informative presentations to students regarding different areas of study and ensure that all students fully",
            ]
        },
        {
            role: "Software Engineer",
            company: "Magalix",
            companylogo: require("./assets/images/magalixLogo.jpeg"),
            date: "Sep 2019 - Dec 2021",
            descBullets: [
                "Reduced time-series data serving from 600ms (90th percentile) to 100ms (90th percentile) and expanded write",
                "Extended the web application by integrating with Zapier, Slack, and Jira webhooks and amplified the ingestion rate by 10x.",
                "Researched a way to manage workflows which strengthened the extensibility and visibility of the system by 2x factor.",
                "Minimized the network traffic to 2 requests per hour instead of 60 per hour for each cluster status.",
                "Collaborated closely with other roles within the SDLC (e.g. project management, DevOps, and QA)",
                "Awarded exceptional achievement award for consistently fixing and stabilizing the dev environment."
            ]
        },
        {
            role: "Software Engineer",
            company: "Teknowl",
            companylogo: require("./assets/images/teknowlLogo.jpeg"),
            date: "Nov 2017 - Nov 2018",
            descBullets: [
                "Implemented a content-type HAL package that allowed joining data with simple keywords, which saved our time by 500%",
                "Optimized MySQL queries by reducing the number of executing queries on multiple pages by 27%.",
                "Promoted productivity and quality standards by sharing tech resources and reflecting on them with the team.",
                "Presented and demonstrated solutions by developing documentation, flowcharts, layouts, diagrams, charts.",
            ]
        },

    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://nextu.se/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                {name: "Certification", url: ""},
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.amr-hassan.xyz/when-to-go-serverless",
            title: "When To Go Serverless?",
            description:
                "Discussing the benefits of serverless"
        },
        {
            url: "https://blog.amr-hassan.xyz/kubernetes-namespaces-you-should-never-miss-with",
            title: "Kubernetes namespaces you should never miss with",
            description:
                "Whenever you see kubernetes behaving different or you want to cut some resources, these are some namespaces that's essential to your k8s cluster"
        },
        {
            url: "https://blog.amr-hassan.xyz/message-queue-battle-royal-sqs-vs-kafka",
            title: "Message queues SQS vs Kafka",
            description:
                "different use-cases for kafka and SQS."
        }
    ],
    seeMore: "https://blog.amr-hassan.xyz/",
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: socialMediaLinks.gmail,
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};


export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
};
