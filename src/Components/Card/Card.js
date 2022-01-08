import React from 'react';
import './Card.scss';

function Card({
  rounded = true,
  shadowColor = 'black',
  shadowDirection = 'down-left',
  color,
  children,
  type,
  bubbleDirection = 'left',
}) {
  const shadowArray = shadowDirection.split('-');

  let xShadow, yShadow;

  if (
    (shadowArray.includes('left') && shadowArray.includes('right')) ||
    (!shadowArray.includes('left') && !shadowArray.includes('right'))
  ) {
    xShadow = '0px';
  }

  if (
    (shadowArray.includes('down') && shadowArray.includes('up')) ||
    (!shadowArray.includes('down') && !shadowArray.includes('up'))
  ) {
    yShadow = '0px';
  }

  //If the shadows aren't set to 0 because the direction doesn't include both or none then set it for one of the directions
  xShadow = !xShadow
    ? shadowArray.includes('right')
      ? `10px`
      : `-10px`
    : null;
  yShadow = !yShadow ? (shadowArray.includes('down') ? `10px` : `-10px`) : null;

  let bubbleDirectionPos =
    bubbleDirection === 'left' ? { left: '30px' } : { right: '30px' };

  let bubbleDirectionSize =
    bubbleDirection === 'left' ? '20px 20px 0 0' : '20px 0 0 20px';

  return (
    <div
      className={`card`}
      style={{
        backgroundColor: color ? color : 'lightgrey',
        borderRadius: rounded ? `10px` : 0,
        boxShadow: `${xShadow} ${yShadow} 10px ${shadowColor}`,
      }}
    >
      {children}
      {type && (
        <div
          className={`${type}`}
          style={{
            borderColor: `${color ? color : 'lightgrey'} transparent`,
            boxShadow: `${xShadow} ${yShadow} 10px ${shadowColor}`,
            borderWidth: bubbleDirectionSize,
            ...bubbleDirectionPos,
          }}
        ></div>
      )}
    </div>
  );
}
export default Card;
