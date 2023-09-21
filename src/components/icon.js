const Carrier = require('./icons/battleship');
const Battleship = require('./icons/battleship');
const Destroyer = require('./icons/destroyer');
const Submarine = require('./icons/submarine');
const Patrol = require('./icons/patrol');

function shipIconComponent() {
  const shipIcons = {
    Battleship,
    Destroyer,
    Submarine,
    Patrol,
    Carrier,
  };

  return function (metadata) {
    const { x, y } = metadata.position;
    const { postion, name, ...props } = metadata;
    const imgContainer = document.createElement('div');

    const renderSvg = shipIcons[name];
    const svg = renderSvg(props);

    imgContainer.style.zIndex = 2;
    imgContainer.style.gridRow = `${y + 1} /span 1`;
    imgContainer.style.gridColumn = `${x + 1} /span ${metadata.length}`;
    if (metadata.axis === 'y') {
      imgContainer.style.gridRow = `${y + 1} /span ${metadata.length}`;
      imgContainer.style.gridColumn = `${x + 1} /span 1`;
    }

    imgContainer.innerHTML = svg;
    return imgContainer;
  };
}

exports.renderIcon = shipIconComponent();
