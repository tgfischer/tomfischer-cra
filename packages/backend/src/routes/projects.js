const router = require("express").Router({ mergeParams: true });
const HttpStatus = require("http-status-codes");

const projects = (req, res) =>
  res.status(HttpStatus.OK).json({
    projects: [
      {
        id: 1,
        name: "Portfolio Website",
        urls: [
          "https://tom.fisc.dev",
          "https://fisc.dev",
          "https://tom.fschr.dev",
          "https://fschr.dev",
          "https://www.tomfischer.ca",
          "https://tomfischer.ca"
        ],
        repository: "https://github.com/tgfischer/tomfischer",
        startDate: "July 2018",
        thumbnail: "/images/portfolio.PNG",
        details: [
          "Build a static website using React, Material UI, and Serverless Framework",
          "Hosted with AWS S3 and Cloudfront",
          "Managed separate components of the application with Lerna",
          "Cost to host the website is $2.00 a month",
          "Website is responsive, and designed to work on mobile devices",
          "Published an npm package called serverless-build-client to allow static websites hosted in AWS S3 to use environment variables from a Serverless template"
        ],
        technologies: [
          "JavaScript",
          "React",
          "Material UI",
          "Serverless Framework",
          "NodeJS",
          "Lerna",
          "AWS S3",
          "AWS Lambda",
          "AWS CloudFront",
          "AWS Route 53",
          "AWS CloudFormation",
          "AWS Certificate Manager"
        ]
      },
      {
        id: 2,
        name: "Megan Shea Dressage",
        urls: [
          "https://megansheadressage.com",
          "https://www.megansheadressage.com"
        ],
        repository: "https://github.com/tgfischer/Megan-Shea",
        startDate: "March 2016",
        endDate: "May 2016",
        thumbnail: "/images/meganshea.PNG",
        details: [
          "Created a portfolio for the owner to showcase their horses, and advertise their training services",
          "Created a custom CMS to allow the owner to have full control over the website",
          "Developed with EJS, NodeJS, and MongoDB",
          "Hosted in a Digital Ocean droplet"
        ],
        technologies: [
          "JavaScript",
          "NodeJS",
          "Semantic UI",
          "EJS",
          "MongoDB",
          "Digital Ocean"
        ]
      }
    ]
  });

router.get("/", projects);

module.exports = router;
