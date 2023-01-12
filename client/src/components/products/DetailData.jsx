import React, { useState } from 'react';

const DetailData = ({product}) => {
    const [SelectSize, setSelectSize] = useState();
    const [Sizes, setSizes] = useState([product.size]);
    
    let downCollapse = () => {
        document.querySelector('.data-description').classList.toggle('ds-down-detail')
        document.getElementById('icon-data').classList.toggle('rotate-up')

    }

    let lessAmount = () => {
        let $input = document.getElementById("amount")
        if ($input.value <= 1 || $input.value === "") {
            return $input.value = 1
        }

        $input.value = +$input.value - 1
    }

    let plusAmount = () => {
        let $input = document.getElementById("amount")
        product.stock > $input.value &&  ($input.value = (+$input.value + 1))
    }
    return (
        <article className='data-container '>
                    <div className='description'>
                        <h6 onClick={downCollapse}>Description</h6>
                        <p className='icon-data'><i className="fas fa-chevron-right" id='icon-data'></i></p>
                        <div className='data-description'>
                            <p >{product.description}.</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h6>Select Size</h6>
                        <div className='flex-row list-size'>
                            {Sizes.map((i, size) => (
                                <div key={size} className={SelectSize === i ? "selected" : undefined} onClick={() => setSelectSize(i)}><p>{i}</p></div>
                            ))}

                        </div>
                    </div>

                    <div className='add-cart flex-colummn'>
                        <div className='amount-product flex-row'>
                            <p className='button-cart' onClick={lessAmount}>-</p>
                            <input type="number" name="amoun" id="amount" defaultValue={1} />
                            <p className='button-cart' onClick={plusAmount}>+</p>
                        </div>
                        <button className='button-add'  >Add to Cart</button>
                    </div>
                </article>
    );
}

export default DetailData;
