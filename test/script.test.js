const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('Gestor Golf', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(fs.readFileSync('./index.html'), { runScripts: 'dangerously' });
    global.window = dom.window;
    global.document = dom.window.document;
    const scriptContent = fs.readFileSync('./script.js', 'utf-8');
    const scriptEl = dom.window.document.createElement('script');
    scriptEl.textContent = scriptContent;
    dom.window.document.body.appendChild(scriptEl);
  });

  test('initial training list is empty', () => {
    const list = dom.window.document.getElementById('training-list');
    expect(list.children.length).toBe(0);
  });
});
