import React from 'react';
import '../../styles/footer.css'
const FooterWrapper = () => {
    return (
        <footer className='flex-colummn footer'>
            <div className='flex-row svg-footer'>
                <img src="/svg/BNI.svg" alt="" />
                <img src="/svg/PermataBank.svg" alt="" />
                <img src="/svg/MaterCard.svg" alt="" />
                <img src="/svg/Danamon.svg" alt="" />
                <img src="/svg/Visa.svg" alt="" />
                <img src="/svg/Mandiri.svg" alt="" />
                <img src="/svg/Kredivo.svg" alt="" />
                <img src="/svg/UOB.svg" alt="" />
                <img src="/svg/gopay.svg" alt="" />
                <img src="/svg/Standar.svg" alt="" />
            </div>
            <div className='copyright'>
                <p>Copyright © 2022 - Marcos Britos</p>
            </div>
        </footer>
    );
}

export default FooterWrapper;
