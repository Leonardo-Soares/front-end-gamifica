import React from 'react';
import PropTypes from 'prop-types';

const ButtonSolid = (props: any) => {
  const { name, link, backgrtound, color } = props;

  return (
    <a
      href={link}
      className='rounded-3xl items-center flex justify-center my-4 hover:opacity-80'
      style={{
        height: '52px',
        border: backgrtound ?? '#01DF5A',
        backgroundColor: backgrtound ?? '#01DF5A',
      }}
    >
      <div
        className='px-6 text-center'
        style={{ color: color ?? '#000' }}
      >
        {name}
      </div>
    </a>
  );
}

ButtonSolid.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgrtound: PropTypes.string,
};

ButtonSolid.defaultProps = {
};


export default ButtonSolid;
