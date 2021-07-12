import React from 'react';
import SinglePicture from '../components/SinglePicture';

const Gallery = ({ images }) => {
    return (
        <div className="flex mx-3 my-10">

            { images.hits ?
                images.hits.map(image => <SinglePicture key={image.imageSize} image={image} />)
                : console.log('Empty Array')
            }


        </div>
    )
}

export default Gallery
