import React, { Component } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export class ProductReating extends Component {
    constructor(props){
        super(props)
    }

    render() {
      const ratingStar = Array.from({length: 5}, (element, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    this.props.stars >= index + 1 ? (<FaStar />):
                    this.props.stars >= number ? (<FaStarHalfAlt />):
                    (<FaRegStar />)
                }
            </span>
        )
      })
    return (
      <div>
            {ratingStar}
      </div>
    )
  }
}

export default ProductReating