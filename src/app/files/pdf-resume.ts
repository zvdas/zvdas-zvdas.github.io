import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';  
import { Alignment, Decoration, Margins } from 'pdfmake/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs; 

export function PdfResume() {
    let docDefinition = {
        header: [
            /*
            {
                style: 'titleMain',
                text: 'Judeson Brian Caleb Rodriguez',
            },
            */
        ],
        content: [
            {
                style: 'titleMain',
                text: 'Judeson Brian Caleb Rodriguez',
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Career Objective',
            },
            {
                text: `Have gained good exposure to understand various aspects of Web Development through
                 Master's Program which has developed a great sense of confidence at a very personal level. 
                 Hence, I seek a challenging position in the area of Web Development, Hosting (DevOps) & related 
                 fields where I can share my skills and expand my capabilities further in the pursuit of 
                 progressive career advancement.`,
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Projects',
            },
            {
                ul: [
                    'Angular',
                    {
                        ul: [
                                {
                                    text: 'Online Test Application', 
                                    decoration: 'underline' as Decoration,
                                    // style: 'listSecondary',
                                },
                                // {
                                    // text: 
                                    `The Online Test Application enables users to provide online tests, review them, and
                                    display the results. (Angular Application with JSON server for serving fake APIs)
                                    GitHub URL containing project files : https://github.com/zvdas/OnlineTestApp`,
                                // },
                        ]
                    },
                    'React',
                    {
                        ul: [
                                {
                                    text: 'Event Finder Application', 
                                    decoration: 'underline' as Decoration,
                                    // style: 'listSecondary',
                                },
                                // {
                                    // text: 
                                    `The Event Finder App allows users to view and promote upcoming events. (React
                                    Application with JSON server for serving fake APIs & Redux for state management)
                                    GitHub URL containing project files : https://github.com/zvdas/EventFinderApp`,
                                // },
                        ]
                    },
                    'Node',
                    {
                        ul: [
                                {
                                    text: 'Learning Management System', 
                                    decoration: 'underline' as Decoration,
                                    // style: 'listSecondary',
                                },
                                // {
                                    // text: 
                                    `The Learning Management System allows users to monitor and customize the
                                    registration processes of e-learning curriculum, upload and manage documents
                                    containing curricular content, deliver course content over web-based interfaces
                                    (desktops, phones or tablets), create and publish course schedules, deadlines and tests
                                    & create new courses and register the students. (Node.js with Express and MongoDB
                                    serving as database)
                                    GitHub URL containing project files :
                                    https://github.com/zvdas/LearningManagementSystem`,
                                // },
                        ]
                    },
                ]
            },
            "\n",
            {
                style: 'titleSecondary',
                text: 'Skills',
            },
            "Self-Learning from Online Courses",
            {
                ul: [
                    'Udemy',
                    {
                        ul: [
                            'CorelDRAW',
                            'Photoshop',
                        ]
                    },
                    'Simplilearn Certified',
                    {
                        ul: [
                            'MEAN Stack Training (MongoDB, Express, Angular, React & NodeJS)',
                            'Cloud Architectures (AWS, Azure)',
                            'DevOps Training (Git, GitHub, CI/CD with Jenkins, Kubernetes)',
                            'Dashboarding (Excel, Tableau)',
                            'Data Science with Python',
                        ]
                    },
                    "pdf generation incomplete; development in progress..."
                    /*
                        Work Experience
                            ● Angular Wiki
                            November 2022 to Present
                            Frontend Web Development using Angular (with Angular Material).
                            ● Power Engineering India Private Limited (Pai Kane Group) - Marketing Officer
                            (Generators & Allied Power Products)
                            March 2018 to March 2020
                            Lead generation, design of brochures, banners, corporate presentations, etc., planning &
                            organization of exhibitions.
                            ● Paulo Motors - Job Controller
                            (Automobile Repair & Service)
                            February 2016 to December 2017
                            Vehicle scheduling, liasioning of GPS & e-toll, documentation of service, maintenance, warranty,
                            pre-delivery inspection of COmmercial Vehicles (Buses & Trucks).
                            Achievements
                            ● New product brand launch with marketing team at a local Interior Designing Exhibition, brochure
                            design (from scratch), stall setup & layout, logistics coordination and product promotion.
                            ● Lead generation (for company) from various sectors using internet search engines, web scraping
                            tools (Selenium - python) and Excel.
                        Educational Qualifications
                            ● Vishwanathrao Deshpande Rural Institute of Technology, Haliyal, Karnataka
                                Vishveshwarya Technical University - Bachelor’s of Mechanical Engineering
                                September 2007 - January 2015
                                Second Class
                            ● Father Agnel Higher Secondary School, Verna, Goa
                                HSSC (Goa Board)
                                June 2006 - March 2007
                                Second Class
                            ● Gurugram Public School, Gurgaon, Haryana
                                SSC (CBSE Board)
                                June 2004 - March 2005
                                First Class
                        Personal Details
                            ● Mobile number: 7972037493 (primary) | 9637112081
                            ● E-mail Id: judeson_rodriguez@gmail.com (primary) | rodriguez_jude@hotmail.com
                            ● LinkedIn URL : https://www.linkedin.com/in/judeson-brian-rodriguez-764439b5
                            ● Github URL : https://github.com/zvdas
                            ● Portfolio URL : https://zvdas.github.io
                            ● Location: Panaji, Goa
                            ● Date of Birth : 9th October, 1989
                        */
                ]
            }
        ],
        styles: {
            titleMain: {
                bold: true,
                alignment: 'center' as Alignment,
                fontSize: 16,
                // fonts: 'Times-Bold',
                fonts: 'times new roman bold italic.ttf',
                decoration: 'underline' as Decoration,
            },
            titleSecondary: {
                bold: true,
                fontSize: 12,
                fonts: 'Times-Bold',
                decoration: 'underline' as Decoration,
            },
            listSecondary: {
                markerColor: 'white',
            }
        },
        defaultStyle: {
            fontSize: 11,
            fonts: 'calibri-regular.ttf',
        }
    };

    return pdfMake.createPdf(docDefinition).open();
}