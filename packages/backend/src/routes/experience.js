const router = require("express").Router({ mergeParams: true });
const HttpStatus = require("http-status-codes");

const jobs = (req, res) =>
  res.status(HttpStatus.OK).json({
    jobs: [
      {
        id: 1,
        company: "Magnet Forensics",
        startDate: "May 2017",
        endDate: "Present",
        logo: "/images/magnet-forensics.jpg",
        details: [
          "Architected the backend for a brand new AWS based application",
          "Provisioned AWS applications using Serverless Framework for easy deployment",
          "Used Elasticsearch to query and filter large datasets",
          "Wrote unit, functional, and end-to-end tests in parallel with features",
          "Worked on a team that developed applications using the C# MVVM software design pattern",
          "Used database migrations to make changes to database schemas that were already being used in production",
          "Used Git and Gerrit for source control and code reviews"
        ],
        skills: [
          "JavaScript",
          "React",
          "Redux",
          "Jest",
          "Webpack",
          "NodeJS",
          "Serverless Framework",
          "Elasticsearch",
          "AWS DynamoDB",
          "AWS S3",
          "AWS Cognito",
          "AWS Cloudfront",
          "Git",
          "Gerrit",
          "Jenkins",
          "C#",
          "XAML",
          "D3.js",
          "Selenium",
          "SQLite",
          "Clojure",
          "Semanic UI",
          "Scrum",
          "Kanban"
        ]
      },
      {
        id: 2,
        company: "IBM",
        startDate: "May 2015",
        endDate: "August 2016",
        logo: "/images/ibm.jpg",
        details: [
          "Designed and maintained Selenium page objects for end to end testing",
          "Architectured and implemented front end features using JavaScript and Dojo Toolkit",
          "Debugged and fixed defects in the product",
          "Worked on a team that followed Agile practices",
          "Was a member of the IBM Future Blue Executive team"
        ],
        skills: [
          "JavaScript",
          "HTML",
          "CSS",
          "JUnit",
          "Selenium",
          "Dojo Toolkit",
          "Java",
          "RESTful APIs",
          "NodeJS",
          "Semanic UI",
          "PostgreSQL"
        ]
      },
      {
        id: 3,
        company: "Huron Geomatics",
        startDate: "June 2011",
        endDate: "August 2014",
        logo: "/images/huron-geomatics.jpg",
        details: [
          "Designed and developed the company website using Wordpress",
          "Created several applications for local businesses using C# and Microsoft SQL Server",
          "Developed internal tools for collegues to use"
        ],
        skills: [
          "C#",
          "Wordpress",
          "PHP",
          "D3.js",
          "Microsoft SQL Server",
          "JavaScript",
          "HTML",
          "CSS"
        ]
      }
    ]
  });

router.get("/jobs", jobs);

module.exports = router;
