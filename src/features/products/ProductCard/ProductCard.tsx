import {Link, useNavigate, useParams} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../../../app/hooks"
import {useEffect} from "react"
import {getProduct, selectProduct} from "../productsSlice"
import NoPageFound from "../../../components/NoPageFound"
import style from "./ProductCard.module.css"

export default function ProductCard() {
    const {productId} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const product = useAppSelector(selectProduct);

    useEffect(() => {
        if (productId) {
            dispatch(getProduct(Number(productId)))
                .then(response => {
                })
                .catch(error => {
                });
        }
    }, [dispatch, productId]);

    if (product) {
        return (
            <div className={style.box}>
                <h2>{product.title}</h2>
                {/*<img src={product.images[0]} alt={product.title}/>*/}
                <p>{product.category}</p>
                <span className={style.price}>{product.price} € </span>

                {/*<button onClick={() => navigate(-1)}>To previous page</button>*/}

                <a href="">В корзину</a>
                <br/>
                <Link to="/products">Все продукты</Link>
            </div>
        );
    } else {
        return <NoPageFound/>;
    }
}
