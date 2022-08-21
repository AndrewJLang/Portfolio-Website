// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Andrew",
  middleName: "",
  lastName: "Lang",
  message: " Software Developer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AndrewJLang",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/andrew-lang-a61459173/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/photo.jpg"),
  imageSize: 375,
  message:
    "My name is Andrew Lang. I am a software engineer at Oracle Cloud Infrastructure. I graduated from the University of Portland with a degree in Computer Science. In my free time I like reading about new technologies.",
  resume: "https://docs.google.com/document/d/1wfMMnWzgKROByclaW659NpbAbZb2F8a1/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  organization: 'streamlux',
  gitHubUsername: "AndrewJLang", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["pulsebanner"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/photo.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/photo.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 100 },
    { name: "Python", value: 100 },
    { name: "React", value: 100 },
    { name: "Typescript", value: 100 },
    { name: "Bash", value: 100 },
    { name: "Terraform", value: 100 },
    // { name: "", value: 100 },
    // { name: "", value: 100 },
  ],
  softSkills: [
    { name: "Git", value: 100 },
    { name: "Docker", value: 100 },
    { name: "Object Oriented Design", value: 100 },
    { name: "Linux OS", value: 100 },
    { name: "Mac OS", value: 100 },
    { name: "Data Structures", value: 100 },
    { name: "Electron", value: 100 },
    { name: "Tensorflow", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "andrew.j.lang@hotmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/oracle.png'),
      date: 'July 2021 - Present'
    },
    {
      role: 'PulseBanner Co-Founder',
      companylogo: require('../assets/img/pulsebanner.png'),
      date: 'December 2021 - Present'
    },
    {
      role: 'Streamlux Co-Founder',
      companylogo: require('../assets/img/streamlux.png'),
      date: 'December 2020 - January 2021'
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/oracle.png'),
      date: 'May 2020 - August 2020'
    },
    {
      role: 'University of Portland Machine Learning Research Assistant',
      companylogo: require('../assets/img/up.jpg'),
      date: 'Spring 2019 - May 2021'
    }
  ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
