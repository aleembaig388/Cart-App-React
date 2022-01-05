import { connect } from "react-redux";
import { createStructuredSelector }  from "reselect"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

const Header = (props) => {
    const { cartItems ,  cartTotal } = props;
    return (
        <header>
        <div style={{ display: "block", padding: "20px" }}>
          <img
            style={{ display: "inlineBlock", width: 200 + "px" }}
            src="https://www.rubios.com/sites/all/themes/rubios/images/global/logo-rubios_coastal.png"
            alt="Rubios Castal Grills"
          />
          {cartItems.length > 0 && <div style={{'fontWeight': 600}}>Cart Items: { cartItems.length } - Total: ${ parseFloat(cartTotal).toFixed(2) }</div>}
        </div>
      </header>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Header);