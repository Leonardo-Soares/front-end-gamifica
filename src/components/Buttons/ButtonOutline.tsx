import React from 'react'
interface Props {
  title: string,
  onPress: () => void,
  backgroundColor?: any,
  color?: string,
  image?: string,
}

export default function ButtonOutline({ title, onPress, backgroundColor, color, image }: Props) {
  return (
    <button
      onClick={onPress}
      className='
        px-10 py-3 
        rounded-[90px]
        font-light'
      style={{
        borderColor: backgroundColor,
        borderWidth: 2,
        color: color,
        display: 'flex',
        gap: 12
      }}
    >
      {image && <img src={image} className='h-[24px]' /> }
      {title}
    </button>
  )
}
