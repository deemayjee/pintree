import React from 'react';
import Loader, { Circles, ColorRing } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        className="m-5"
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner