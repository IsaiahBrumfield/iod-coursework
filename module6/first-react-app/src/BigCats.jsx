import SingleCat from "./SingleCat";

const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus" , image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheetah_Kruger.jpg" },
  { name: "Cougar", latinName: "Puma concolor" },
  { name: "Jaguar", latinName: "Panthera onca" },
  { name: "Leopard", latinName: "Panthera pardus" },
  { name: "Lion", latinName: "Panthera leo" },
  { name: "Snow leopard", latinName: "Panthera uncia" },
  { name: "Tiger", latinName: "Panthera tigris" },
];

const BigCats = () => {
    return (
        <div className="big-cats">
            <h1>Big Cats of the World</h1>
            <div className="cat-list">
                {cats.map((cat, index) => (
                    <SingleCat key={cat.name} cat={cat} />
                ))}
            </div>
        </div>
    );
};

export default BigCats;