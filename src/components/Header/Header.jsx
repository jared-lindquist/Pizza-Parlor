import { useSelector } from "react-redux";
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header(){

    // Use this to get current order total price.
    const currentOrderStore = useSelector(store => store.currentOrder);

    // Array reduce, add price of all pizzas in cart to calculate total.
    // TODO: Please check if this works
    let total = currentOrderStore.reduce((accumulator, current) => accumulator + Number(current.price), 0);

    return(
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <section className='total-price'>
                <ShoppingCartIcon className="cart-icon" />
                <h2>Total: ${total}</h2>
            </section>
        </header>
    );
}

export default Header;