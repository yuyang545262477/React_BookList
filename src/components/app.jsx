import React from "react";
import BookList from "../container/book-list";
import BookDetail from "../container/book-detail";

class APP extends React.Component {
    render() {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        )
    }
}

export default APP;