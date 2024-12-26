import image1 from "./src/assets/image-1.jpg";
import city1 from "./src/assets/city-1.jpg";
import mapImage1 from './src/assets/map-image-1.png'
import image2 from "./src/assets/image-2.jpg";
import city2 from "./src/assets/city-2.jpg";
import mapImage2 from './src/assets/map-image-2.png'
import image3 from "./src/assets/image-3.jpg";
import anotherImage3 from "./src/assets/image-3.1.jpg";
import mapImage3 from './src/assets/map-image-3.png'
import image4 from "./src/assets/image-4.jpg";
import mapImage4 from './src/assets/map-image-4.png'
import image5 from "./src/assets/image-5.jpg";
import mapImage5 from './src/assets/map-image-5.png'
import image6 from "./src/assets/image-6.jpg";
import mapImage6 from './src/assets/map-image-6.png'
import image7 from "./src/assets/image-7.jpg";
import mapImage7 from './src/assets/map-image-7.png'


export const universityData = [
  {
    id: 1,
    name: "Addis Ababa Science and Technology University",
    nameAbbrivation: "AASTU",
    universityImage1: image1,
    location: "Addis Ababa, AA",
    cityLocation: "https://maps.app.goo.gl/Wk6pEPqenCDqrJ4A9",
    mapLocation: "https://maps.app.goo.gl/GMfaVZMx7XT3AuvY7",
    mapImage: mapImage1,
    locationDescription:
      "Addis Ababa Science and Technology University (AASTU) is located in Addis Ababa, Ethiopia; population approximately 6 million. The campus is situated in an urban setting.",
    address: "Kilinto, Akaky Kaliti Subcity, Addis Ababa, Ethiopia",
    establishedIn: "2011",
    setting: "Urban city environment",
    type: "Public",
    duration: "4-5 Years",
    cityName: "Addis Ababa",
    cityImage: city1,
    officialWebsite: "http://www.aastu.edu.et/",
    websitePrefix: "aastu.edu",
    UGRADenrollmentNumber: "6,074",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      " is a leading institution of higher education located in the Akaky Kaliti subcity of Addis Ababa, Ethiopia. Established in 2011, AASTU was founded as part of the Ethiopian government's strategic initiative to enhance the country's educational framework and promote science and technology as vital components for economic growth and development. The university's establishment aligns with the national Five-Year Growth and Transformation Plan, which emphasizes the importance of a skilled workforce in driving industrialization and innovation.",
    majorsDescription:
      "Addis Ababa Science and Technology University (AASTU) offers a variety of undergraduate majors, primarily focusing on engineering and applied sciences. Established in 2011, the university has quickly gained recognition as a leading institution in Ethiopia, aligning its programs with national development goals. Below are all the undergraduate majors available at AASTU.",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "College of Enginnering",
        majors: [
          { name: "Architecture", creditHours: 190 },
          { name: "Chemical Engineering", creditHours: 196 },
          { name: "Civil Engineering", creditHours: 190 },
          { name: "Electrical and Computer Engineering", creditHours: 180 },
          { name: "Electromechanical Engineering", creditHours: 187 },
          { name: "Environmental Engineering", creditHours: 188 },
          { name: "Mechanical Engineering", creditHours: 196 },
          { name: "Mining Engineering", creditHours: 187 },
          { name: "Software Engineering", creditHours: 185 },
        ],
      },

      {
        name: "College of Natural and Applied Sciences",
        majors: [
          { name: "Biotechnology", creditHours: 119 },
          { name: "Industrial Chemistry", creditHours: 150 },
          { name: "Geology", creditHours: 151 },
          { name: "Food Science and Applied Nutrition", creditHours: 152 },
        ],
      },
      // {
      //   name: "College of Social Science and Humanities",
      //   divisions: [
      //     {
      //       name: "Business & Management Division",
      //       majors: [
      //         { name: "Bachelor of Business Administration", creditHours: 120 },
      //       ],
      //     },
      //     {
      //       name: "Humanities Division",
      //       majors: [
      //         { name: "Philosophy", creditHours: 140 },
      //         { name: "Psychology", creditHours: 110 },
      //         { name: "Civics", creditHours: 110 },
      //         { name: "Geography", creditHours: 110 },
      //         { name: "History", creditHours: 110 },
      //       ],
      //     },
      //     {
      //       name: "Social Sciences Division",
      //       majors: [
      //         { name: "Sociology", creditHours: 140 },
      //         { name: "Political Science", creditHours: 110 },
      //         { name: "Economics", creditHours: 110 },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: "Adama Science and Technology University",
    nameAbbrivation: "ASTU",
    universityImage1: image2,
    location: "Adama",
    cityLocation: "https://maps.app.goo.gl/XRmppN3bWZSVcHEk9",
    mapLocation: "https://maps.app.goo.gl/aXosd6bq3SS64Se17",
    mapImage: mapImage2,
    locationDescription: "Adama Science and Technology University (ASTU) is located in Adama, Ethiopia; population approximately 500,000. The campus is situated in an urban setting.",
    address: "P.O. Box 1888, Adama, Oromia, Ethiopia",
    establishedIn: "1993 (originally as Nazareth Technical College)",
    setting: "Urban city environment",
    type: "Public",
    duration: "4-5 Years",
    cityName: "Adama",
    cityImage: city2,
    officialWebsite: "https://www.astu.edu.et/",
    websitePrefix: "astu.edu",
    UGRADenrollmentNumber: "NA",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription: " located in Adama, Ethiopia, is a prominent institution dedicated to excellence in applied sciences and technology. Established with the vision of becoming the leading choice for higher education in Ethiopia and a center of excellence in Africa by 2030, ASTU offers a diverse range of undergraduate and postgraduate programs across various disciplines, including engineering, natural sciences, and technology. The university emphasizes innovative research, problem-solving, and community service, aiming to produce ethically responsible and internationally competent graduates. ASTU's mission includes fostering partnerships with industries to enhance productivity and technological development, thereby contributing significantly to Ethiopia's sustainable development goals.",
    majorsDescription:
      "Adama Science and Technology University (ASTU) offers a diverse range of undergraduate programs across several schools, including Applied Natural Science, Engineering, and Architecture. The university is particularly noted for its engineering programs, such as Civil Engineering, Mechanical Engineering, Softwate Engineering and Electrical Engineering, which are designed to meet the growing demand for skilled professionals in Ethiopia's development sectors.",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "School of Applied Natural Science",
        majors: [
          { name: "Applied Biology Program", creditHours: 145 },
          { name: "Applied Chemistry", creditHours: 145 },
          { name: "Applied  Physics", creditHours: 145 },
          { name: "Applied Geology", creditHours: 145 },
          { name: "Applied Mathematics", creditHours: 145 },
          { name: "Industrial chemistry", creditHours: 145 },
          { name: "Pharmacy program", creditHours: 145 },
        ],
      },

      {
        name: "School of electrical engineering and computing",
        majors: [
          { name: "Computer Science and Engineering program", creditHours: 180 },
          { name: "Electronics & Communication Engineering program", creditHours: 178 },
          { name: "Electrical Power and Control Engineering program", creditHours: 178 },
          { name: "Software Engineering program", creditHours: 180 },
        ],
      },
      {
        name: "School of civil engineering and Architecture",
        majors: [
          { name: "Architecture program", creditHours: 174 },
          { name: "Civil engineering program ", creditHours: 180 },
          { name: "Water Resources Engineering program", creditHours: 180 },
        ],
      },
      {
        name: "School of Mechanical, Chemical and Materials Engineering",
        majors: [
          { name: "Chemical Engineering program", creditHours: 180 },
          { name: "Material Science and Engineering program", creditHours: 183 },
          { name: "Mechanical Engineering program", creditHours: 185 },
        ],
      },

    ],
  },
  {
    id: 3,
    name: "Addis Ababa University",
    nameAbbrivation: "AAU",
    universityImage1: image3,
    universityImage2: anotherImage3,
    location: "Addis Ababa, AA",
    cityLocation: "https://maps.app.goo.gl/Wk6pEPqenCDqrJ4A9",
    mapLocation: "https://maps.app.goo.gl/vhnxm2ipwNsjbP1y7",
    mapImage: mapImage3,
    locationDescription: "Addis Ababa University (AAU) is located in Addis Ababa, Ethiopia; population approximately 6 million. The campus is situated in a major urban setting.",
    address: "Sidist Kilo, Addis Ababa, Ethiopia",
    establishedIn: "March 20, 1950",
    setting: "Urban city environment",
    type: "Private",
    duration: "4-7 Years",
    officialWebsite: "http://www.aau.edu.et/",
    websitePrefix: "aau.edu",
    UGRADenrollmentNumber: "29,872",
    size: "Large",
    status: "Profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      " established in 1950, is the oldest and largest higher education institution in Ethiopia, initially founded as the University College of Addis Ababa. With a current enrollment of approximately 47,610 students across its 14 campuses, AAU offers a wide array of academic programs, including 70 undergraduate and 293 graduate courses. The university is organized into ten colleges and several research institutes, focusing on diverse fields such as social sciences, health sciences, and technology. Over its history, AAU has produced over 222,000 graduates and has played a significant role in national development through teaching, research, and community service initiatives.",
    majorsDescription:
      "Addis Ababa University (AAU) offers a diverse array of majors across multiple disciplines, catering to the academic and professional aspirations of its students. The Addis Ababa Institute of Technology is particularly esteemed for its engineering programs, including Software Engineering and Electrical Engineering, which are among the most sought-after fields of study. Similarly, the College of Business and Economics provides highly regarded programs such as Accounting and Finance and Business Administration, reflecting the growing demand for business-oriented education. The famous Medicine program at AAU equips students with comprehensive medical education and training, addressing the nation’s healthcare needs. Additionally, the College of Law and Governance Studies is recognized for its distinguished Bachelor of Laws program. With over 70 undergraduate programs, AAU delivers a robust and holistic educational experience, preparing students for a variety of professional pathways.",
    creditPoints: "ECTS",
    colleges: [
      {
        name: "Addis Ababa University Institute of Technology",
        majors: [
          { name: "Biomedical Engineering", ECTS: 313 },
          { name: "Cadastral Surveying and Geomatics", ECTS: 255 },
          { name: "Chemical Engineering", ECTS: 304 },
          { name: "Civil Engineering", ECTS: 187 },
          { name: "Electrical and Computer Engineering", ECTS: 320 },
          { name: "Information Technology", ECTS: 260 },
          { name: "Leather Technology", ECTS: 306 },
          { name: "Mechanical Engineering", ECTS: 326 },
          { name: "Software Engineering", ECTS: 328 },
        ],
      },

      {
        name: "College of Business and Economics",
        majors: [
          { name: "Accounting and Finance", ECTS: 185 },
          { name: "Administrative Service Management", ECTS: 187 },
          { name: "Business Administration and Information Systems", ECTS: 181 },
          { name: "Economics", ECTS: 180 },
          { name: "Logistics and Supply Chain Management", ECTS: 185 },
          { name: "Marketing Management", ECTS: 180 },
          { name: "Management", ECTS: 184 },
          { name: "Public Administration & Development Management", ECTS: 185 },
        ],
      },
      {
        name: "College of Education and Behavioral Studies",
        majors: [
          { name: "Education & Behavioral Studies", ECTS: 182 },
          { name: "Psychology", ECTS: 180 },
          { name: "Speech-Language Therapy", ECTS: 192 },
          { name: "Special Needs Education", ECTS: 187 }
        ],
      },
      {
        name: "College Humanities Language Studies, Journalism and Communication",
        majors: [
          { name: "Amharic", ECTS: 180 },
          { name: "Afan Oromo and Literature", ECTS: 180 },
          { name: "Arabic Language and Communication", ECTS: 245 },
          { name: "Broadcast Journalism", ECTS: 192.1 },
          { name: "Chinese Language", ECTS: 181 },
          { name: "English Language and Literature", ECTS: 181 },
          { name: "Ethiopian Sign Language and Deaf Culture", ECTS: 180 },
          { name: "French Language and Professional skills", ECTS: 240 },
          { name: "Linguistics", ECTS: 185 },
          { name: "Print and Web Journalism", ECTS: 240 },
          { name: "Tigrigna Language, Literature and Folklore", ECTS: 180 },
        ],
      },

      {
        name: "College of Health Sciences",
        majors: [
          { name: "Anesthesia", ECTS: 250 },
          { name: "Dental Medicine", ECTS: 363 },
          { name: "Medical Laboratory", ECTS: 243 },
          { name: "Medical Radio-logic Technology", ECTS: "NA" },
          { name: "Medicine", ECTS: 364 },
          { name: "Midwifery", ECTS: 250 },
          { name: "Nursing", ECTS: 247 },
          { name: "Pharmacy", ECTS: 310 },
          { name: "Physiotherapy", ECTS: 241 },
        ],
      },

      {
        name: "College of Natural Sciences",
        majors: [
          { name: "Biology", ECTS: 180 },
          { name: "Chemistry", ECTS: "185-189" },
          { name: "Computer Science", ECTS: 240 },
          { name: "Geology", ECTS: 245 },
          { name: "Information System", ECTS: 240 },
          { name: "Mathematics", ECTS: 184 },
          { name: "Physics", ECTS: 181 },
          { name: "Sport Science", ECTS: 183 },
          { name: "Statistics", ECTS: 188 },
        ],
      },

      {
        name: "College of Performing and Visual Arts",
        majors: [
          { name: "Industrial Design", ECTS: 245 },
          { name: "Music", ECTS: 242 },
          { name: "Painting", ECTS: 244 },
          { name: "Print making", ECTS: 245 },
          { name: "Sculpture", ECTS: 244 },
          { name: "Theater Arts", ECTS: 257 },
        ],
      },

      {
        name: "College of Social Sciences",
        majors: [
          { name: "Archaeology and Heritage Management", ECTS: 180 },
          { name: "Geography and Environmental Studies", ECTS: 180 },
          { name: "History", ECTS: 185 },
          { name: "Philosophy", ECTS: 185 },
          { name: "Political Science and International Relations", ECTS: 180 },
          { name: "Social Anthropology", ECTS: 180 },
          { name: "Social Work", ECTS: 182 },
          { name: "Sociology", ECTS: 180 },
        ],
      },

      {
        name: "College of Veterinary Medicine and Agriculture",
        majors: [
          { name: "Agricultural Economics", ECTS: 180 },
          { name: "Animal Science", ECTS: 181 },
          { name: "Horticulture", ECTS: 180 },
          { name: "Plant Science", ECTS: 180 },
          { name: "Veterinary Laboratory Technology", ECTS: 180 },
          { name: "Veterinary Medicine", ECTS: 360 },
        ],
      },

      {
        name: "Architecture Building Contraction and City Development",
        majors: [
          { name: "Architecture", ECTS: 304 },
          { name: "Construction Technology and Management", ECTS: 307 },
          { name: "Urban and Regional Planning", ECTS: 301 },
        ],
      },

      {
        name: "College of Law and Governance Studies",
        majors: [
          { name: "Law", ECTS: 300 },
        ],
      },

    ],
  },

  {
    id: 4,
    name: "Adigrat University",
    nameAbbrivation: "AGU",
    universityImage1: image4,
    location: "Adigrat, Tigray",
    cityLocation: "https://maps.app.goo.gl/yCukN8ZhgGMjZMtZ7",
    mapLocation: "https://maps.app.goo.gl/nJ2wVJYkz3vfzniu8",
    mapImage: mapImage4,
    locationDescription:
      "Adigrat University is located in Adigrat, Tigray Region, Ethiopia; population approximately 125,000. The campus is situated in an urban setting.",
    address: "P.O. Box 50, Adigrat, Tigray Region, Ethiopia",
    establishedIn: "May 26, 2011",
    setting: "Urban city environment",
    type: "Public",
    duration: "4-5 Years",
    cityName: "Adigrat, Tigray",
    officialWebsite: "http://www.adu.edu.et/",
    websitePrefix: "adu.edu",
    generalEnrollmentNumber: "16,000",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      " located in the town of Adigrat in the Tigray Region of Ethiopia, is a public university established in 2011. It was founded with the aim of producing highly qualified graduates to support the country's socio-economic development and contribute to its Growth and Transformation Plans. The university has two campuses and offers a range of academic programs across six colleges, including Medicine, Engineering, and Agriculture, serving approximately 16,000 students. However, its facilities suffered significant damage during the Tigray War, impacting its operations. Despite these challenges, Adigrat University continues to focus on education, research, and community service as part of its mission to foster development in Ethiopia",
    majorsDescription:
      "Adigrat University offers a diverse array of academic majors across its six colleges, catering to various fields of study. Notable programs include Civil Engineering, Mechanical Engineering, and Computer Science within the College of Engineering and Technology, which are popular among students seeking practical skills for the engineering sector. The College of Medicine and Health Sciences is well-regarded for its Medicine, Nursing, and Pharmacy programs, addressing the growing demand for healthcare professionals in Ethiopia. ",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "College of Engineering and Technology",
        majors: [
          { name: "Computer Science and IT", creditHours: "NA" },
          { name: "Architecture", creditHours: "NA" },
          { name: "Civil engineering", creditHours: "NA" },
          { name: "Mechanical engineering", creditHours: "NA" },
          { name: "Chemical engineering", creditHours: "NA" },
          { name: "Construction Management and Technology", creditHours: "NA" },
          { name: "Electrical engineering", creditHours: "NA" },
        ],
      },

      {
        name: "College of Natural and Computation Sciences",
        majors: [
          { name: "Mathematics", creditHours: "NA" },
          { name: "Physics", creditHours: "NA" },
          { name: "Chemistry", creditHours: "NA" },
          { name: "Biology", creditHours: "NA" },
          { name: "Sport Science", creditHours: "NA" },
          { name: "Geology", creditHours: "NA" },
          { name: "Statistics", creditHours: "NA" },
        ],
      },
      {
        name: "College of Medicine and Health Sciences",
        majors: [
          { name: "Medicine", creditHours: "NA" },
          { name: "Health Officer", creditHours: "NA" },
          { name: "Nursing", creditHours: "NA" },
          { name: "Midwifery", creditHours: "NA" },
          { name: "Pharmacy", creditHours: "NA" },
        ],
      },
      {
        name: "College of Agriculture and Environmental Sciences",
        majors: [
          { name: "Plant Science and Technology", creditHours: "NA" },
          { name: "Animal Science and Technology", creditHours: "NA" },
          { name: "Natural Resource Management", creditHours: "NA" },
          { name: "Environmental Science", creditHours: "NA" },
        ],
      },

      {
        name: "College of Business and Economics",
        majors: [
          { name: "Accounting and Finance", creditHours: "NA" },
          { name: "Management", creditHours: "NA" },
          { name: "Marketing Management", creditHours: "NA" },
          { name: "Economics", creditHours: "NA" },
        ],
      },

      {
        name: "College of Social Sciences and Humanities",
        majors: [
          { name: "Archaeology", creditHours: "NA" },
          { name: "English and Literature", creditHours: "NA" },
          { name: "Civics and Ethical Education", creditHours: "NA" },
          { name: "Geography", creditHours: "NA" },
          { name: "Sociology", creditHours: "NA" },
          { name: "Law", creditHours: "NA" },
          { name: "Tigrina", creditHours: "NA" },
          { name: "Psychology", creditHours: "NA" },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Ambo University",
    nameAbbrivation: "AU",
    universityImage1: image5,
    location: "Ambo, Oromia",
    cityLocation: "https://maps.app.goo.gl/j2GVUHdV76qMZunF8",
    mapLocation: "https://maps.app.goo.gl/SWghrz9ueEN3Axud9",
    mapImage: mapImage5,
    locationDescription: "Ambo University is located in Ambo, Oromia Region, Ethiopia; population approximately 102,000. The campus is situated in an urban setting.",
    address: "P.O. Box 19, Ambo, Oromia Region, Ethiopia",
    establishedIn: "May 11, 2011",
    setting: "Urban city environment",
    type: "Public",
    duration: "3-6 Years",
    cityName: "Ambo, Oromia",
    officialWebsite: "https://ambou.edu.et/",
    websitePrefix: "ambou.edu",
    generalEnrollmentNumber: "18,250",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      ", established in 1939 EC, is one of Ethiopia's oldest higher learning institutions, located in Ambo, Oromia Region, about 114 km west of Addis Ababa. Originally founded as a school of agriculture, it has evolved significantly over the decades, gaining university status in 2009. The university now offers a wide range of academic programs across nine colleges, including Agriculture and Veterinary Science, Business and Economics, Medicine and Health Sciences, and Natural and Computational Sciences. With a commitment to research and community engagement, Ambo University serves approximately 20,000 students and aims to contribute to the socio-economic development of the region while aspiring to become a renowned educational institution in Eastern Africa by 2030.",
    majorsDescription:
      "Ambo University offers a comprehensive range of academic majors across its various colleges, catering to diverse fields of study. Prominent programs include Civil Engineering, Mechanical Engineering, and Electrical and Computer Engineering within the Institute of Technology, which are designed to meet the growing demand for skilled engineers in Ethiopia. The College of Medicine and Health Sciences is well-known for its programs in Medicine, Nursing, and Pharmacy, addressing critical healthcare needs.",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "College of Agriculture and Veterinary Sciences",
        majors: [
          { name: "B.Sc in Animal Science ", creditHours: 151 },
          { name: "B.Sc in Agribusiness and Value Chain Management", creditHours: 156 },
          { name: "B.Sc in Plant Science", creditHours: 151 },
          { name: "B.Sc in Agricultural Economics", creditHours: 155 },
          { name: "BVSc in Bachelor of Degree in Veterinary Science", creditHours: 180 },
          { name: "BVSc in Veterinary Science", creditHours: 149 },
          { name: "B.Sc in Natural Resource Management", creditHours: 154 },
          { name: "B.Sc in Disaster Risk Management and Sustainable Development", creditHours: 181 },
          { name: "B.Sc in Forestry", creditHours: 165 },
          { name: "B.Sc in Horticulture", creditHours: 155 },
          { name: "B.Sc in Land Administration and Surveying", creditHours: 160 },
          { name: "B.Sc in MMC Guest Students ", creditHours: 180 },
          { name: "B.Sc Water Resource and Irrigation Management", creditHours: 180 },
          { name: "B.Sc in Rural Development and Agricultural Extension", creditHours: 151 },
          { name: "B.Sc in Veterinary Laboratory Technology", creditHours: 151 },
          { name: "Doctor of Veterinary Medicine", creditHours: 282 },
        ],
      },

      {
        name: "College of Business and Economics",
        majors: [
          { name: "B.A in Cooperative", creditHours: 180 },
          { name: "B.A in Cooperative Accounting and Auditing", creditHours: 150 },
          { name: "B.A in Accounting and Finance", creditHours: 200 },
          { name: "B.A in Management", creditHours: 150 },
          { name: "B.A in Economics", creditHours: 147 },
          { name: "B.A in Public Administration and Development Management", creditHours: 153 },
          { name: "B.A in Marketing Management", creditHours: 150 },
        ],
      },
      {
        name: "College of Medicine and Health Sciences",
        majors: [
          { name: "B.Sc in Nursing", creditHours: 172 },
          { name: "B.Sc in Anesthesia", creditHours: 196 },
          { name: "B.Sc in Pharmacy", creditHours: 304 },
          { name: "B.Sc in Emergency and Critical Care Nursing", creditHours: 200 },
          { name: "B.Sc in Public Health", creditHours: 185 },
          { name: "B.Sc in Midwifery", creditHours: 191 },
          { name: "B.Sc in Medical Laboratory Sciences", creditHours: 174 },
          { name: "Doctor of Medicine ", creditHours: 238 },
          { name: "B.Sc in Pediatric and Child Health Nursing", creditHours: 170 },
          { name: "B.Sc in Psychiatric Nursing", creditHours: 200 }
        ],
      },
      {
        name: "College of Natural and Computational Sciences",
        majors: [
          { name: "B.Sc in Mathematics", creditHours: 152 },
          { name: "B.Sc in Chemical Laboratory Science and Management", creditHours: 146 },
          { name: "B.Sc in Chemistry", creditHours: 146 },
          { name: "B.Sc in Chemistry Laboratory Technology", creditHours: 149 },
          { name: "B.Sc in Physics", creditHours: 153 },
          { name: "B.Sc in Physics Laboratory Technology", creditHours: 160 },
          { name: "B.Sc in Biological Laboratory Sciences", creditHours: 180 },
          { name: "B.Sc in Biology", creditHours: 151 },
          { name: "B.Sc in Biology Laboratory Technology", creditHours: 152 },
          { name: "B.Sc in Sport Science", creditHours: 160 },
          { name: "B.Sc in Statistics", creditHours: 165 }
        ],
      },
      {
        name: "College of Social Science and Humanities",
        majors: [
          { name: "B.A in Afan Oromo and Literature", creditHours: 146 },
          { name: "B.A in Civics and Ethical Studies", creditHours: 146 },
          { name: "B.A in English Language and Literature", creditHours: 144 },
          { name: "B.A in General Linguistics", creditHours: 151 },
          { name: "B.A in Journalism and Communication", creditHours: 155 },
          { name: "BSW in Social Work", creditHours: 153 },
          { name: "B.A in Political Science and International Relations", creditHours: 143 },
          { name: "B.A in Sociology", creditHours: 147 },
        ],
      },
      {
        name: "Institute of Education and Behavioral Sciences",
        majors: [
          { name: "B.A in Adult Education and Community Development", creditHours: 150 },
          { name: "B.A in Lifelong Learning and Community Development", creditHours: 150 },
          { name: "B.A in Early Childhood Care and Education", creditHours: 151 },
          { name: "B.A in Special Needs and Inclusive Education", creditHours: 148 },
          { name: "B.A in Educational Planning and Management", creditHours: 147 },
          { name: "B.A in Psychology", creditHours: 148 },
        ],
      },
      {
        name: "Institute of Technology",
        majors: [
          { name: "B.Sc in Civil Engineering (Woliso)", creditHours: 140 },
          { name: "B.Sc in Information Technology (Woliso)", creditHours: 242 }
        ],
      },
      {
        name: "School of Agricultural and Food Engineering & School of Agriculture and Urban Planning",
        majors: [
          { name: "B.Sc Agricultural Engineering", creditHours: 189 },
          { name: "B.Sc in Architecture", creditHours: 200 },
          { name: "B.Sc in Cadastral Surveying and Geomatics Engineering", creditHours: 241 },
          { name: "B.Sc in Surveying Engineering", creditHours: 201 },
          { name: "B.Sc in Food Engineering", creditHours: 192 },
          { name: "B.Sc in Food Process Engineering and Postharvest Technology", creditHours: 308 },
          { name: "B.Sc in Urban and Regional Planning", creditHours: 305 },
          { name: "B.Sc in Urban Planning and Design", creditHours: 290 }
        ],
      },
      {
        name: "School of Business and Economics(Waliso)",
        majors: [
          { name: "B.A in Accounting and Finance(Woliso)", creditHours: 180 },
          { name: "B.A Agribusiness and Value Chain Management (Woliso)", creditHours: 109 },
          { name: "B.Sc in Agricultural Economics (Woliso)", creditHours: 109 },
          { name: "B.A Business Administration and Information System (Woliso)", creditHours: 109 },
          { name: "B.A in Economics (Woliso)", creditHours: 180 },
          { name: "B.A Logistic and Supply Chain Management (Woliso)", creditHours: 114 },
          { name: "B.A in Management (Woliso)", creditHours: 180 },
          { name: "B.A in Marketing Management (Woliso)", creditHours: 180 },
          { name: "B.A in Public Administration and Development Management (Woliso)", creditHours: 180 },
          { name: "B.A in Tourism Management (Woliso)", creditHours: 109 }
        ],
      },
      {
        name: "School of Civil and Environmental Engineering",
        majors: [
          { name: "B.Sc in Construction Technology and Management", creditHours: 306 },
          { name: "B.Sc in Civil Engineering", creditHours: 201 },
          { name: "B.Sc in Hydraulic and Water Resources Engineering", creditHours: 310 }
        ],
      },
      {
        name: "School of Governance and Law(W)",
        majors: [
          { name: "B.A Civics and Ethical Education (Woliso)", creditHours: 110 },
          { name: "B.A in Governance and Development Studies (Woliso)", creditHours: 110 },
          { name: "LLB Law (W)", creditFHours: 200 }
        ],
      },
      {
        name: "School of Informatics and Electrical Engineering",
        majors: [
          { name: "B.Sc in Computer Science", creditHours: 149 },
          { name: "B.Sc in Electrical & Computer Engineering (Communication Engineering)", creditHours: 309 },
          { name: "B.Sc in Electrical & Computer Engineering (Computer Engineering)", creditHours: 202 },
          { name: "B.Sc in Electrical & Computer Engineering (Industrial Control Engineering)", creditHours: 188 },
          { name: "B.Sc in Electrical & Computer Engineering (Power Engineering)", creditHours: 212 },
          { name: "B.Sc Electrical and Computer Engineering", creditHours: 300 },
          { name: "B.Sc in Information Technology", creditHours: 151 }
        ],
      },
      {
        name: "School of Law",
        majors: [
          { name: "LLB in Law", creditHours: 168 }
        ],
      },
      {
        name: "School of Mechanical and Industrial Engineering",
        majors: [
          { name: "B.Sc in Industrial Engineering", creditHours: 191 },
          { name: "B.Sc in Mechanical Engineering", creditHours: 300 },
          { name: "B.Sc in Mechanical Engineering (Design)", creditHours: 305 },
          { name: "B.Sc in Mechanical Engineering (Manufacturing)", creditHours: 199 },
          { name: "B.Sc in Mechanical Engineering (Motor Vehicle)", creditHours: 305 },
          { name: "B.Sc in Mechanical Engineering (Thermal)", creditHours: 199 }
        ],
      },
      {
        name: "School of Technology and Informatics(W)",
        majors: [
          { name: "B.Sc in Computer Science (Woliso)", creditHours: 240 },
          { name: "B.Sc Construction Technology and Management (Woliso)", creditHours: 109 },
          { name: "B.Sc Information System (Woliso)", creditHours: 140 },
          { name: "B.Sc in Nursing (Woliso)", creditHours: 247 }
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Arba Minch University",
    nameAbbrivation: "AMU",
    universityImage1: image6,
    location: "Arba Minch",
    cityLocation: "https://maps.app.goo.gl/vkWw4i7KHB5SZW3L8",
    mapLocation: "https://maps.app.goo.gl/HbX5UjGGZMznsQ2j6",
    mapImage: mapImage6,
    locationDescription: "Arba Minch University (AMU) is located in Arba Minch, Ethiopia; population approximately 201,049. The main campus is situated 5 km north of the town center, with additional campuses nearby.",
    address: "P.O. Box 21, Arba Minch, SNNP's Region, Ethiopia.",
    establishedIn: "1986",
    setting: "Urban city environment",
    type: "Public",
    duration: "4-5 Years",
    cityName: "Arba Minch",
    officialWebsite: "http://www.amu.edu.et/",
    websitePrefix: "amu.edu",
    generalEnrollmentNumber: "39,000",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      " is a public higher education institution located in Arba Minch, Southern Nations, Nationalities, and Peoples' Region (SNNPR), Ethiopia. Established in 1986 as the Arba Minch Water Technology Institute and gaining university status in 2004, AMU operates across six campuses and offers a diverse array of academic programs, including 74 undergraduate, 83 graduate, and 13 PhD programs in fields such as agriculture, business, medicine, natural sciences, and social sciences. With an enrollment of approximately 40,000 students, the university is dedicated to providing quality education and research opportunities while actively engaging in community service initiatives.",
    majorsDescription:
      "Arba Minch University (AMU) offers a diverse range of academic programs across various disciplines, catering to the educational needs of its approximately 40,000 students. The university is organized into several colleges, including the College of Medicine and Health Sciences, which is notable for its programs in nursing and public health; the College of Agricultural Sciences, known for its focus on sustainable agriculture and natural resource management; and the College of Business and Economics, which provides degrees in management, finance, and tourism. Additionally, AMU has strong offerings in natural sciences, engineering, and social sciences, making it a comprehensive institution for higher education in Ethiopia. Popular majors include medicine, environmental science, engineering, and business-related fields, reflecting the university's commitment to addressing both local and global challenges through education and research.",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "College of Arts & Humanities",
        majors: [
          { name: "Adult Education", creditHours: "NA" },
          { name: "Civics", creditHours: "NA" },
          { name: "Economics", creditHours: "NA" },
          { name: "Educational Administration", creditHours: "NA" },
          { name: "History", creditHours: "NA" },
          { name: "Humanities and Social Science Education", creditHours: "NA" },
          { name: "Law", creditHours: "NA" },
          { name: "Psychology", creditHours: "NA" },
          { name: "Special Education", creditHours: "NA" },
          { name: "Sports", creditHours: "NA" }
        ]
      },
      {
        name: "College of Business & Social Sciences",
        majors: [
          { name: "Accountancy", creditHours: "NA" },
          { name: "Agricultural Business", creditHours: "NA" },
          { name: "Business and Commerce", creditHours: "NA" },
          { name: "Hotel Management", creditHours: "NA" },
          { name: "Management", creditHours: "NA" },
          { name: "Sociology", creditHours: "NA" },
          { name: "Tourism", creditHours: "NA" }
        ]
      },

      {
        name: "College of Engineering",
        majors: [
          { name: "Architecture", creditHours: "NA" },
          { name: "Civil Engineering", creditHours: "NA" },
          { name: "Electrical Engineering", creditHours: "NA" },
          { name: "Engineering", creditHours: "NA" },
          { name: "Environmental Engineering", creditHours: "NA" },
          { name: "Hydraulic Engineering", creditHours: "NA" },
          { name: "Mechanical Engineering", creditHours: "NA" },
          { name: "Production Engineering", creditHours: "NA" }
        ]
      },

      {
        name: "College of Language & Cultural Studies",
        majors: [
          { name: "English", creditHours: "NA" },
          { name: "Native Language", creditHours: "NA" }
        ]
      },

      {
        name: "School of Medicine & Health",
        majors: [
          { name: "Medicine", creditHours: "NA" },
          { name: "Nursing", creditHours: "NA" },
          { name: "Public Health", creditHours: "NA" },
          { name: "Toxicology", creditHours: "NA" }
        ]
      },

      {
        name: "College of Science & Technology",
        majors: [
          { name: "Animal Husbandry", creditHours: "NA" },
          { name: "Biology", creditHours: "NA" },
          { name: "Biotechnology", creditHours: "NA" },
          { name: "Chemistry", creditHours: "NA" },
          { name: "Computer Science", creditHours: "NA" },
          { name: "Forestry", creditHours: "NA" },
          { name: "Geography", creditHours: "NA" },
          { name: "Geology", creditHours: "NA" },
          { name: "Horticulture", creditHours: "NA" },
          { name: "Industrial Chemistry", creditHours: "NA" },
          { name: "Mathematics", creditHours: "NA" },
          { name: "Medical Technology", creditHours: "NA" },
          { name: "Meteorology", creditHours: "NA" },
          { name: "Natural Resources", creditHours: "NA" },
          { name: "Natural Sciences", creditHours: "NA" },
          { name: "Physics", creditHours: "NA" },
          { name: "Plant and Crop Protection", creditHours: "NA" },
          { name: "Statistics", creditHours: "NA" },
          { name: "Technology", creditHours: "NA" },
          { name: "Water Science", creditHours: "NA" }
        ]
      }
    ],
  },

  {
    id: 7,
    name: "Arsi University",
    nameAbbrivation: "ARU",
    universityImage1: image7,
    location: "Asella",
    cityLocation: "https://maps.app.goo.gl/jCoMdGKqvmwazUzv8",
    mapLocation: "https://maps.app.goo.gl/AQiwa75dXxSLQL5k8",
    mapImage: mapImage7,
    locationDescription: "Arsi University(ARU) is located in Asella, Ethiopia, a town situated in the Oromia Region, approximately 175 km southeast of Addis Ababa. The university's main campus is conveniently positioned within the town, making it easily accessible to students and the local community. Asella itself has a population of around 	140,000, providing a vibrant backdrop for the university's academic and social activities.",
    address: "P.O. Box 193, Arsi University Main Campus, Asella, Oromia, Ethiopia.",
    establishedIn: "2014",
    setting: "Urban city environment",
    type: "Public",
    duration: "3-6 Years",
    cityName: "Asella",
    officialWebsite: "https://arsiun.edu.et/",
    websitePrefix: "arsiun.edu",
    UGRADenrollmentNumber: "12,000",
    size: "Large",
    status: "Non-profit",
    onCampusHousing: "Yes",
    levelOfStudy: "Undergrad/Masters/PHD",
    overviewDescription:
      ", established in 2014, is a prominent public higher education institution located in Asella, Ethiopia. The university is committed to academic excellence and the holistic development of its students, offering a diverse range of undergraduate and postgraduate programs across various fields, including agriculture, health sciences, and social sciences. With a focus on innovation, community engagement, and research, Arsi University aims to prepare its graduates for successful careers while contributing to the sustainable development of the country. The campus provides a vibrant academic environment that fosters intellectual curiosity and collaboration among students and faculty.",
    majorsDescription:
      "Arsi University offers a diverse array of academic programs across several disciplines, making it a notable institution in Ethiopia. Some of the most recognized majors include Agriculture, particularly in areas such as agribusiness and environmental science, and Health Sciences, which has gained prominence due to its commitment to producing qualified healthcare professionals. Additionally, the university provides strong programs in Education and Behavioral Sciences, Business and Economics, and Social Sciences, catering to a wide range of student interests and career aspirations. The university emphasizes practical learning and community engagement, preparing graduates to meet the demands of various sectors.",
    creditPoints: "Credit-Hours",
    colleges: [
      {
        name: "College of Agriculture & Environmental Sciences",
        majors: [
          { name: "B.Sc in Agribusiness and Value Chain Management", creditHours: 109 },
          { name: "B.Sc in Rural Development And Agricultural Extension", creditHours: 116 },
          { name: "B.Sc Agricultural Economics", creditHours: 111 },
          { name: "B.Sc in Animal Science", creditHours: 111 },
          { name: "B.Sc in Food Science and Postharvest Technology", creditHours: 140 },
          { name: "B.Sc in Forestry", creditHours: 108 },
          { name: "B.Sc in Natural Resource Management", creditHours: 116 },
          { name: "B.Sc in Soil Resource and Water Shade Management", creditHours: 108 },
          { name: "B.Sc in Horticulture", creditHours: 114 },
          { name: "B.Sc in Plant Science", creditHours: 112 },
          { name: "B.Sc Veterinary Science", creditHours: 111 }
        ],
      },
      {
        name: "College of Business & Economics",
        majors: [
          { name: "B.A in Accounting and Finance", creditHours: 118 },
          { name: "B.A in Economics", creditHours: 114 },
          { name: "B.Sc in Information System", creditHours: 147 },
          { name: "B.A in International Trade and Investment Management", creditHours: 120 },
          { name: "B.A in Logistics and Supply Chain Management", creditHours: 114 },
          { name: "B.A in Management", creditHours: 111 },
          { name: "B.Sc in Management Information System", creditHours: 125 },
          { name: "B.A in Marketing Management", creditHours: 111 },
          { name: "B.A in Tourism Management", creditHours: 121 }
        ],
      },
      {
        name: "College of Computational Science",
        majors: [
          { name: "B.Sc in Computer Science", creditHours: 148 },
          { name: "B.Sc in Information Technology", creditHours: 144 },
          { name: "B.Sc in Mathematics", creditHours: 144 },
          { name: "B.Sc in Sport Science", creditHours: 153 },
          { name: "B.Sc in Statistics", creditHours: 120 }
        ],
      },
      {
        name: "College of Education & Behavioral Sciences",
        majors: [
          { name: "B.A in Adult Education and Community Development", creditHours: 110 },
          { name: "B.A in Early Child Care", creditHours: 108 },
          { name: "B.A in Psychology", creditHours: 120 },
          { name: "B.A in Educational Leadership and Management", creditHours: 107 }
        ],
      },
      {
        name: "College of Health Sciences",
        majors: [
          { name: "B.Sc in Anaesthesia", creditHours: 150 },
          { name: "B.Sc in Medical Laboratory", creditHours: 150 },
          { name: "MD Medicine", creditHours: 180 },
          { name: "B.Pharm Midwifery Generic", creditHours: 137 },
          { name: "B.Sc in Midwifery Post basic", creditHours: 150 },
          { name: "B.Sc in Neonatal Nursing", creditHours: 100 },
          { name: "B.Sc in Nursing", creditHours: 120 },
          { name: "B.Sc in Operation Theater Nursing", creditHours: 97 },
          { name: "B.Sc in Operation Theatre Nursing", creditHours: 120 },
          { name: "B.Sc in Pediatrics and Child Health", creditHours: 180 },
          { name: "B.Pharm Pharmacy", creditHours: 189 },
          { name: "B.Sc Public Health Officer", creditHours: 120 },
          { name: "B.Sc in Radiography", creditHours: 120 }
        ],
      },
      {
        name: "College of Social Sciences & Humanity",
        majors: [
          { name: "B.A Afan Oromo and Literature", creditHours: 120 },
          { name: "B.A in Gadaa", creditHours: 145 },
          { name: "B.A in Civics & Ethical Studies", creditHours: 120 },
          { name: "B.A English Language and Literature", creditHours: 112 },
          { name: "B.A Geography & Environmental Studies", creditHours: 109 },
          { name: "B.A in History & Heritage Management", creditHours: 120 },
          { name: "B.A in Sociology & Social Work", creditHours: 120 }
        ],
      },
      {
        name: "School of Law",
        majors: [
          { name: "LL.B Law", creditHours: 170 }
        ],
      }
    ],
  },
];
