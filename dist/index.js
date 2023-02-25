import Screen from './view.js';
const canvas = document.querySelector('canvas#gameCanvas');
const context = canvas.getContext('2d');
const screen = new Screen(canvas, context);
screen.drawnAt(0, 0);
