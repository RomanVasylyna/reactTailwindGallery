import React from 'react'

const SinglePicture = ({ image }) => {

    console.log(image);
    return (
        <div className="flex-auto text-center h-7">
            <div className="max-w-sm rounded overflow-hidden shadow-lg px-4 py-2 m-2">
                
                <img src={image.largeImageURL} className="w-full"></img>

                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 mb-2 text-xl">IMG TITLE</div>
                    Photo By {image.user}
                </div>

                {/* Likes/Comments/Views */}
                <ul>
                    <li className="px-6">
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li className="px-6">
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li className="px-6">
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>

                {/* Tags */}
                <div className="px-6 py-4">
                    {image.tags.split(',').map(tag =>
                        <span key={image.tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>)}
                </div>

            </div>
        </div>
    )
}

export default SinglePicture
