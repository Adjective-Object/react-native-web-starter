const sourceParagraphs = [
  'This is sample text',
  'Check out my dope-ass sample text',
  'Hecking yeah, check it out!',
  'Ohhhhh yeahhh!',
];

const addText = () => ({
  // identifier for this event
  type: 'ADD_TEXT',
  // select a random text from the list of posssible sources
  text: sourceParagraphs[Math.floor(Math.random() * sourceParagraphs.length)],
});

export default addText;
