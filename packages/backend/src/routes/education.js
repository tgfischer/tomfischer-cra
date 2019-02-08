const router = require("express").Router({ mergeParams: true });
const HttpStatus = require("http-status-codes");

const transcript = (req, res) =>
  res.status(HttpStatus.OK).json({
    transcript: [
      {
        title: "First Year",
        courses: [
          {
            name: "Linear Algebra for Engineers",
            code: "APPLMATH 1411A",
            mark: 91,
            weight: 0.5
          },
          {
            name: "Applied Math for Engineers I",
            code: "APPLMATH 1413",
            mark: 94,
            weight: 1
          },
          {
            name: "General Chemistry",
            code: "CHEM 1024A",
            mark: 68,
            weight: 0.5
          },
          {
            name: "Properties of Materials",
            code: "ENGSCI 1021B",
            mark: 88,
            weight: 0.5
          },
          {
            name: "Engineering Statics",
            code: "ENGSCI 1022Y",
            mark: 78,
            weight: 0.5
          },
          {
            name: "Programming Fundamentals for Engineers",
            code: "ENGSCI 1036B",
            mark: 90,
            weight: 0.5
          },
          {
            name: "Introduction to Engineering Design",
            code: "ENGSCI 1050",
            mark: 86,
            weight: 1
          },
          {
            name: "An Introduction to Film Studies",
            code: "FILM 1020E",
            mark: 78,
            weight: 0.5
          },
          {
            name: "Physics for Engineering Students I",
            code: "PHYSICS 1401A",
            mark: 83,
            weight: 0.5
          },
          {
            name: "Physics for Engineering Students II",
            code: "PHYSICS 1402B",
            mark: 78,
            weight: 0.5
          }
        ]
      },
      {
        title: "Second Year",
        courses: [
          {
            name: "Applied Mathematical Methods I",
            code: "APPLMATH 2415",
            mark: 80,
            weight: 1
          },
          {
            name: "Information Systems and Design",
            code: "COMPSCI 1032B",
            mark: 96,
            weight: 0.5
          },
          {
            name: "Computer Science Fundamentals II",
            code: "COMPSCI 1037A",
            mark: 83,
            weight: 0.5
          },
          {
            name: "Introduction to Electrical Engineering",
            code: "ECE 2238B",
            mark: 92,
            weight: 0.5
          },
          {
            name: "Digital Logic Systems",
            code: "ECE 2277A",
            mark: 86,
            weight: 0.5
          },
          {
            name: "Engineering Communications",
            code: "ENGSCI 2211G",
            mark: 84,
            weight: 0.5
          },
          {
            name: "Discrete Structures for Engineers",
            code: "MATH 2151A",
            mark: 70,
            weight: 0.5
          },
          {
            name: "Software Design",
            code: "SE 2203B",
            mark: 92,
            weight: 0.5
          },
          {
            name: "Algorithms and Data Structures",
            code: "SE 2205B",
            mark: 92,
            weight: 0.5
          },
          {
            name: "Software Construction",
            code: "SE 2250A",
            mark: 97,
            weight: 0.5
          },
          {
            name: "Applied Probablity and Statistics for Engineers",
            code: "STATS 2141A",
            mark: 81,
            weight: 0.5
          }
        ]
      },
      {
        title: "Third Year",
        courses: [
          {
            name: "Microprocessors and Microcomputers",
            code: "ECE 3375B",
            mark: 89,
            weight: 0.5
          },
          {
            name: "Networking",
            code: "ECE 4436A",
            mark: 88,
            weight: 0.5
          },
          {
            name: "Database Management Systems",
            code: "SE 3309A",
            mark: 84,
            weight: 0.5
          },
          {
            name: "Theoretical Foundations of Software Engineering",
            code: "SE 3310B",
            mark: 88,
            weight: 0.5
          },
          {
            name: "Operating Systems for Engineers",
            code: "SE 3313A",
            mark: 82,
            weight: 0.5
          },
          {
            name: "Networking Applications",
            code: "SE 3314B",
            mark: 90,
            weight: 0.5
          },
          {
            name: "Web Technologies",
            code: "SE 3316A",
            mark: 85,
            weight: 0.5
          },
          {
            name: "Software Engineering Design I",
            code: "SE 3350Y",
            mark: 88,
            weight: 0.5
          },
          {
            name: "Software Project and Process Management",
            code: "SE 3351B",
            mark: 82,
            weight: 0.5
          },
          {
            name: "Software Requirements and Analysis",
            code: "SE 3352A",
            mark: 82,
            weight: 0.5
          },
          {
            name: "Human Computer Interaction",
            code: "SE 3353B",
            mark: 93,
            weight: 0.5
          }
        ]
      },
      {
        title: "Fourth Year",
        courses: [
          {
            name: "Business for Engineers",
            code: "BUSINESS 2299E",
            mark: 81,
            weight: 1
          },
          {
            name: "Computer Graphics I",
            code: "COMPSCI 3388A",
            mark: 90,
            weight: 0.5
          },
          {
            name: "Game Engine Development",
            code: "COMPSCI 4482A",
            mark: 100,
            weight: 0.5
          },
          {
            name: "Game Design",
            code: "COMPSCI 4483B",
            mark: 90,
            weight: 0.5
          },
          {
            name: "Engineering Ethics, Sustainable Development and the Law",
            code: "ENGSCI 4498G",
            mark: 83,
            weight: 0.5
          },
          {
            name: "Ontario and the Great Lakes",
            code: "GEOGRAPHY 2011B",
            mark: 82,
            weight: 0.5
          },
          {
            name: "Software Engineering Design II",
            code: "SE 4450",
            mark: 91,
            weight: 1
          },
          {
            name: "Software Testing and Maintenance",
            code: "SE 4452A",
            mark: 86,
            weight: 0.5
          },
          {
            name: "Cloud Computing: Concepts, Technologies, and Applications",
            code: "SE 4455B",
            mark: 85,
            weight: 0.5
          },
          {
            name: "Information Security",
            code: "SE 4472A",
            mark: 84,
            weight: 0.5
          }
        ]
      }
    ]
  });

router.get("/transcript", transcript);

module.exports = router;
