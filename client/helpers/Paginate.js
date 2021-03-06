import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Paginate = ({ count, match }) => {
    const totalPages = Array.from(Array(Math.ceil(count / 6)));

    const pages = totalPages.map((_, i) => {
        const page = i + 1;
        let to = "/";

        if (match.path == "/") {
            to = "/home/page/" + page;
        } else if (
            match.path == "/posts/:slug" ||
            match.path == "/posts/:slug/page/:page_no"
        ) {
            to = "/posts/" + match.params.slug + "/page/" + page;
        }
        let selected = parseInt(match.params.page_no) === page ? "active" : "";

        if (!match.params.page_no && page == 1) {
            selected = "active";
        }

        return (
            <li key={i}>
                <Link className={selected} to={to}>
                    {page}
                </Link>
            </li>
        );
    });

    return <ul className="pagination">{pages}</ul>;
};

Paginate.propTypes = {
    count: PropTypes.number,
    match: PropTypes.object
};
export default Paginate;
