
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductEdit extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

        // calling real DOM API
        this.nameElement.focus();

        let id = this.props.match.params.id;

        if (id) {
            //get a product and  a brand
            this.props.actions.fetchProduct(id);

            //get brands
            this.props.actions.fetchBrands();
        }

    }
    
    handleSubmit(e) {
      // stop the browser to submit the form automatically
      // prefer angular for forms
      // share data accross component react is better
      e.preventDefault();
    }

    onChangeValue(e) {
        let {name, value} = e.target;
        console.log(name, value);
        this.props.actions.initProduct(Object.assign({}
            , this.props.product, {
                [name]: value
            }));    
        //ref give access to real dom and uncontrolled componenet because component fully controlled by vitual dom
    }

    render() {
        let { product, brand, brands} = this.props;

        return (
            <div> 
            <h2>Product Edit</h2>

            <h2> Brand: {brand.name} </h2>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                Name 
                <input name="name"
                       ref= { (elem) => this.nameElement = elem}
                       value={product.name}
                       onChange={(e) => this.onChangeValue(e)}
                
                />

                Year 
                <input name="year"
                       value={product.year}
                       onChange={(e) => this.onChangeValue(e)}
                
                />

                Brand 

                <select name="brandId"
                        value={product.brandId}
                        onChange={(e) => this.onChangeValue(e)}
                >
                    {
                        brands.map( (brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))
                    }

                </select>

                <button type="submit">
                    Save
                </button>
            </form>
 

            </div>
        )
    }
} 


ProductEdit.defaultProps = {
    
}

ProductEdit.propTypes = {
    
}