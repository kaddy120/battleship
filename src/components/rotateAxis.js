function RotateAxis() {
  const rotateAxis = document.querySelector('#rotate-axis');
  let direction = 'x';
  rotateAxis.onclick = () => {
    direction = direction === 'x' ? 'y' : 'x';
  };
  const getDirection = () => direction;
  return getDirection;
}

module.exports = RotateAxis;
