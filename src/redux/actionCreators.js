/**
 * Add your actions here
 */
export const addAuthor = () => {
    return {
        type: "ADD AUTHOR"
    }

}

export const deleteAuthor = (author) => {
    return {
        type: "DELETE_AUTHOR",
        payload: author
    }

}

