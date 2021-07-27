import React from 'react';
import SinglePicture from '../components/SinglePicture';

const Gallery = ({ images }) => {

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">

            {images.hits ?
                images.hits.map(image => <SinglePicture key={image.imageSize} image={image} />)
                : console.log('Empty Array')
            }

        </div>

    )
}

export default Gallery
