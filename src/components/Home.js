import { useEffect , useState } from "react";
import axios from "axios";

const Home =() =>{
  const [categories , setcategories] =useState ([]);
  useEffect (() =>{
    getcategories();
  },[]);
  
   async function getcategories(){
    const res = await axios.get("http://165.232.177.108:5000/categories");
    setcategories(res.data);
    console.log(res);

   }
   
    return(

<>
<>
  <div className="container-fluid">
    <div className="card w-100">
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-between text-center ps-3 pe-3">
           {categories.map((item) =>
           {
            return(
              <li className="nav-item">
                <a href={"/Productcats/"+item._id}>
                <img src={item.image} className="w-50"/>
                <h6>{item.name}</h6>
               </a>
              </li>
            )
           })}
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="card w-100 mt-2">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f15b29daa9ad2ac1.jpg?q=20"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/50a78433b9c07bdd.jpg?q=20"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/122c7c65868dec69.jpg?q=20"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="goes mt-2 " style={{ backgroundColor: "white" }}>
        <div className="go mt-2 d-flex">
          <div className="col">
            <div className="card-group w-100">
              <div className="card text-center">
                <h2 className="card-title">Best of Electronics</h2>
                <div className="dsfsa p-4">
                  <button type="button" className="btn btn-primary">
                    View All
                  </button>
                </div>
                <img src="assets/images/img14.png" className="w-100 object-fit-cover" />
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card "
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img16.png" className="w-75 object-fit-cover" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card "
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img15.png" className="w-75 object-fit-cover" />
                <h6>Projectors</h6>
                <h6>Shop Now!</h6>
                <h6>ZEBRONICS</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card "
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img18.png" className="w-75 object-fit-cover" />
                <h6>Monitors</h6>
                <h6>Shop Now!</h6>
                <h6>Lenovo</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card "
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img17.png" className="w-75 object-fit-cover" />
                <h6>Printers</h6>
                <h6>Shop Now!</h6>
                <h6>HP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="goes mt-2" style={{ background: "white" }}>
        <div className="go mt-2 d-flex">
          <div className="col">
            <div className="card-group " style={{ width: "100%" }}>
              <div className="card text-center">
                <h2 className="card-title">Books Toys or More</h2>
                <div className="dsfsa p-4">
                  <button type="button" className="btn btn-primary">
                    View All
                  </button>
                </div>
                <img
                  src="assets/images/img19 (1).png"
                  className="w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img19 (2).png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img19 (5).png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img19 (3).png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img19 (4).png" className="w-70" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="goes mt-2" style={{ background: "white" }}>
        <div className="go mt-2 d-flex">
          <div className="col">
            <div className="card-group " style={{ width: "100%" }}>
              <div className="card text-center">
                <h2 className="card-title">Sports Healthcare &amp; More</h2>
                <div className="dsfsa p-4">
                  <button type="button" className="btn btn-primary">
                    View All
                  </button>
                </div>
                <img
                  src="assets/images/img19 (1).png"
                  className="w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img20.png" className="w-50" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img21.png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img22.png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img23.png" className="" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="goes mt-2" style={{ background: "white" }}>
        <div className="go mt-2 d-flex">
          <div className="col">
            <div className="card-group " style={{ width: "100%" }}>
              <div className="card text-center">
                <h2 className="card-title">Pick Your Styles</h2>
                <div className="dsfsa p-4">
                  <button type="button" className="btn btn-primary">
                    View All
                  </button>
                </div>
                <img
                  src="assets/images/img19 (1).png"
                  className="w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img26.png" className="" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img27.png" className="" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img28.png" className="w-75" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card p-3"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="goes text-center">
                <img src="assets/images/img25.png" className="w-50" />
                <h6>Top Mirrorless Camera</h6>
                <h6>Shop Now!</h6>
                <h6>Cannon Sony</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

</>

)
}

export default Home;
