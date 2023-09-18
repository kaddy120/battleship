const Carrier = require('./assets/carrier.svg');
const Battleship = require('./assets/battleship.svg');
const Destroyer = require('./assets/destroyer.svg');
const Submarine = require('./assets/submarine.svg');
const Patrol = require('./assets/patrol.svg');

/* const Carrier = Battleship; */
const shipIconPath = {
  Battleship,
  Destroyer,
  Submarine,
  Patrol,
  Carrier,
};

function shipIcon(metadata) {
  const { x, y } = metadata.position;
  const imgContainer = document.createElement('div');
  const img = new Image();

  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.src = metadata.path;
  imgContainer.style.zIndex = 2;
  imgContainer.style.gridRow = `${y + 1} /span 1`;
  imgContainer.style.gridColumn = `${x + 1} /span ${metadata.length}`;
  if (metadata.direction === 'vertical') {
    /* TODO: Scale the image correctly when rotated */
    imgContainer.style.gridRow = `${y + 1} /span ${metadata.length}`;
    imgContainer.style.gridColumn = `${x + 1} /span 1`;
    img.style.transform = 'rotate(90deg)';
    /* img.style.height = '60px'; */
    /* img.style.width = '300px'; */
  }
  imgContainer.appendChild(img);
  return imgContainer;
}

module.exports = { shipIcon, shipIconPath };
