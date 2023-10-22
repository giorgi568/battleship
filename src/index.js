import './style.css';
import { drawBoard, drawShipPlacement } from './boardUI';
// console.log('haa');
drawBoard();
let allCells = document.getElementsByClassName('grid-item');
for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener('mouseover', () => {
    return drawShipPlacement(
      allCells[i].dataset.cords,
      3,
      'vertical'
    );
  });
  // console.log(allCells[i].dataset.cords[0]);
}
