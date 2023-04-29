import React from 'react';
import PropTypes from 'prop-types';

const ButtonOutImage = (props: any) => {
  const { name, link, backgrtound, border, color, imagemIcon } = props;

  return (
    <div
      className='rounded-3xl items-center flex transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 '
      style={{
        height: '52px',
        border: border ?? '#01DF5A',
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: backgrtound ?? 'transparent',
      }}
    >
      <a href={link}
        className='px-6 flex gap-4'
        style={{
          color: color ?? '#000',

        }}
      >
        {imagemIcon &&
          <img src={imagemIcon} />
        }
        {name}
      </a>
    </div>
  );
}

ButtonOutImage.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgrtound: PropTypes.string,
  border: PropTypes.string,
  imagemIcon: PropTypes.string,
};

ButtonOutImage.defaultProps = {
};


export default ButtonOutImage;
