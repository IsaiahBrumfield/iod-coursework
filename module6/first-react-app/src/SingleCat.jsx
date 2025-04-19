const SingleCat = ({ cat }) => {
    return (
        <div className="cat-item" key={cat.name}>
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <h3>{cat.name}</h3>
            <p><strong>Latin Name:</strong> {cat.latinName}</p>
        </div>
    );
};

export default SingleCat;