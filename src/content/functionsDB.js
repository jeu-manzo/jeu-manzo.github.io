import data from './data.js';

const projectsSpanish = data[2].projectsSpanish;

const projectsEnglish = data[2].projectsEnglish;


const titlesSpanish = [];
const titlesEnglish = [];
const contentSpanish = [];
const contentEnglish = [];

projectsSpanish.forEach(project => {
  titlesSpanish.push(project.title);
  contentSpanish.push(project.content);
})

projectsEnglish.forEach(project => {
  titlesEnglish.push(project.title);
  contentEnglish.push(project.content);
})



export default {
  titlesSpanish,
  titlesEnglish,
  contentSpanish,
  contentEnglish,
  projectsSpanish,
  projectsEnglish,
}
