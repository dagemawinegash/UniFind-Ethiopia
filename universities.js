import image1 from "./src/assets/image-1.jpg";
import city1 from "./src/assets/city-1.jpg";
export const universityData = [
  {
    id: 1,
    name: "Addis Ababa Science and Technology University",
    nameAbbrivation: "AASTU",
    universityImage: image1,
    location: "Addis Ababa, AA",
    mapLocation: "https://maps.app.goo.gl/GMfaVZMx7XT3AuvY7",
    type: "Public",
    duration: "4-5 Years",
    cityName: "Addis Ababa",
    cityImage: city1,
    officialWebsite: "http://www.aastu.edu.et/",
    websitePrefix: "aastu.edu",
    enrollmentNumber: "6670",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      " is a leading institution of higher education located in the Akaky Kaliti subcity of Addis Ababa, Ethiopia. Established in 2011, AASTU was founded as part of the Ethiopian government's strategic initiative to enhance the country's educational framework and promote science and technology as vital components for economic growth and development. The university's establishment aligns with the national Five-Year Growth and Transformation Plan, which emphasizes the importance of a skilled workforce in driving industrialization and innovation.",
    majorsDescription:
      "Addis Ababa Science and Technology University (AASTU) offers a variety of undergraduate majors, primarily focusing on engineering and applied sciences. Established in 2011, the university has quickly gained recognition as a leading institution in Ethiopia, aligning its programs with national development goals. Below are all the undergraduate majors available at AASTU.",
    colleges: [
      {
        name: "College of Enginnering",
        majors: [
          { name: "Architecture", graduates: 120 },
          { name: "Chemical Engineering", graduates: 150 },
          { name: "Civil Engineering", graduates: 180 },
          { name: "Electrical and Computer Engineering", graduates: 200 },
          { name: "Electromechanical Engineering", graduates: 110 },
          { name: "Environmental Engineering", graduates: 90 },
          { name: "Mechanical Engineering", graduates: 160 },
          { name: "Mining Department", graduates: 75 },
          { name: "Software Engineering", graduates: 250 },
        ],
      },

      {
        name: "College of Natural and Applied Sciences",
        majors: [
          { name: "Biotechnology", graduates: 145 },
          { name: "Industrial Chemistry", graduates: 102 },
          { name: "Geology", graduates: 87 },
          { name: "Food Science and Applied Nutrition", graduates: 134 },
          { name: "Maths-Physics-Statistics", graduates: 98 },
        ],
      },
      {
        name: "College of Social Science and Humanities",
        divisions: [
          {
            name: "Business & Management Division",
            majors: [
              { name: "Bachelor of Business Administration", graduates: 120 },
            ],
          },
          {
            name: "Humanities Division",
            majors: [
              { name: "Philosophy", graduates: 140 },
              { name: "Psychology", graduates: 110 },
              { name: "Civics", graduates: 110 },
              { name: "Geography", graduates: 110 },
              { name: "History", graduates: 110 },
            ],
          },
          {
            name: "Social Sciences Division",
            majors: [
              { name: "Sociology", graduates: 140 },
              { name: "Political Science", graduates: 110 },
              { name: "Economics", graduates: 110 },
            ],
          },
        ],
      },
    ],
  },
];
