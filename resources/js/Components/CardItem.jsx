const itemList = ({ posts }) => {
    return posts.map((data, i) => {
        const shortDescription = data.description.length > 20 
            ? data.description.slice(0, 100) + '...' 
            : data.description;
        return (
            <div className="card bg-base-100 w-full lg:w-96 lg:shadow-xl text-white" key={i}>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{data.author}</div>
                        <div className="badge badge-outline">{data.category}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noItem=()=>{
    return (
        <p className="text-red-600 text-center">Berita tidak ditemukan.</p>
    )
}

const CardItem =({posts})=>{
    return !posts ? noItem(): itemList({posts})
}

export default CardItem ;
