import React from 'react'
import Heading from "../../Components/Heading/SecHeading";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
      image: 'https://via.placeholder.com/150'
    }
  ]
  return (
    <>
    <div className="container">
      <Heading title="Blogs" subtitle="Here is our latest blogs" /> 
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4" key={blog.id}>
            <div className="card">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href="/" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Blogs

