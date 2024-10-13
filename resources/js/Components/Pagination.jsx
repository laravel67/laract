import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="join">
            {prev && (
                <Link href={prev} className="join-item btn btn-square" aria-label="Previous">
                    &lt;
                </Link>
            )}
            <span className="join-item btn btn-square" aria-label="Current Page">
                {current}
            </span>
            {next && (
                <Link href={next} className="join-item btn btn-square" aria-label="Next">
                    &gt;
                </Link>
            )}
        </div>
    );
};

export default Pagination;
