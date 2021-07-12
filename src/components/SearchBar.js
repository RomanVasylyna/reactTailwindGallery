import React from 'react'

const SearchBar = ({submitForm}) => {

    return (
        <div>
            <form className="w-full mt-6"
                onSubmit={e => submitForm(e)}>

                <input type="text"
                    placeholder="Search Images Here"
                    className="shadow appearance-none border rounded py-2 pl-3 pr-32 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </input>

                <input type="submit"
                    value="Search"
                    className="bg-purple-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                </input>

            </form>
        </div>
    )
}

export default SearchBar
