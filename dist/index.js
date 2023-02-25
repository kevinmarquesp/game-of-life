var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Config from './models.js';
import Screen from './view.js';
import Game from './controllers.js';
const canvas = document.querySelector('canvas#gameCanvas');
const context = canvas.getContext('2d');
const screen = new Screen(canvas, context);
if (Config.initGeneration === null)
    Config.initGeneration = Game.randomLayout(40, 40);
function loop() {
    return __awaiter(this, void 0, void 0, function* () {
        screen.clear();
        screen.render(Config.initGeneration, Config.grid.rows, Config.grid.cols);
        setTimeout(() => requestAnimationFrame(loop), Config.delay);
    });
}
requestAnimationFrame(loop);
