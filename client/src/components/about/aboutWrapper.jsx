import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FetchGet } from '../../helpers/AxiosMethod';
import Loader from '../Load/Loader';
import CompanyMission from './CompanyMission';
import CompanyVision from './CompanyVision';
import Founders from './Founders';

const AboutWrapper = () => {
    const [Company, setCompany] = useState(null);
    const apiGet = async ()=>{
        let company = await FetchGet('/company')
        if (company.status === 200) {
            setCompany(company.data.company)
        }
        return
    }

    useEffect(() => {
        apiGet()
    }, []);
    return ( 
        <>
            {Company === null ? <Loader style={{position : 'relative', backgroundColor : '#F2F3F5', zIndex: 10, height:'50vh'}} /> : 
            <>
            <CompanyMission titleMision={Company.titleMision} mission={Company.mission} culture={Company.culture} /> 
            <CompanyVision vision={Company.vision} />
            <Founders Founder1={Company.founders[0]} Founder2={Company.founders[1]} />
            </>
        }
        </>
    );
}

export default AboutWrapper;
