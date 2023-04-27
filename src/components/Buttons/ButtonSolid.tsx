import React from 'react'
interface Props {
  title: string,
  onPress: () => void,
  backgroundColor?: any,
  borderColor?: any,
  color?: string,
  image?: string,
}

export default function ButtonSolid({ title, onPress, backgroundColor, borderColor, color, image }: Props) {
  return (
    <button
      onClick={onPress}
      className='
        px-10 
        py-3 
        font-light'        
      style={{
        gap: 12,
        color: color,
        borderWidth: 2,
        display: 'flex',
        borderRadius: 90,
        backgroundColor: backgroundColor,
        borderColor: borderColor ?? backgroundColor,
      }}
    >
      {image && <img src={image} className='h-[24px]' />}
      {title}
    </button>
  )
}
