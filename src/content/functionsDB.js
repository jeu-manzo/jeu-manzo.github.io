import data from './data.js';

const projectsSpanish = data[2].projectsSpanish;

const projectsEnglish = data[2].projectsEnglish;


const titlesSpanish = [];
const titlesEnglish = [];
const contentSpanish = [];
const contentEnglish = [];
const technologiesSpanish = [];
const technologiesEnglish = [];


projectsSpanish.forEach(project => {
  titlesSpanish.push(project.title);
  contentSpanish.push(project.content);
  technologiesSpanish.push(project.technologies);
})

projectsEnglish.forEach(project => {
  titlesEnglish.push(project.title);
  contentEnglish.push(project.content);
  technologiesEnglish.push(project.technologies);
})

// console.log(technologiesSpanish);
// console.log(technologiesEnglish);

export default {
  titlesSpanish,
  titlesEnglish,
  contentSpanish,
  contentEnglish,
  technologiesSpanish,
  technologiesEnglish,
}
