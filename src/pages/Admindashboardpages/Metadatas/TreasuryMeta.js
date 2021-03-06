import React from 'react'
import Dashboard from '../../Userdashboardpages/Dashboard'
import {Link} from 'react-router-dom'
import woman from '../../../img/woman.png';
import TreasuryStyled from '../../../Styled-components/MetadataStyled'

const Metadata = () => {
    return (
        <div>
            <TreasuryStyled>
            <div style={{display: 'flex'}}>
            <Link to='../treasury'><i className='fas fa-arrow-left' style={{marginLeft: '10px', cursor: 'pointer', fontWeight: '600', width: '21px', marginTop:'10px'}}></i>&nbsp; &nbsp; </Link>
            <p style={{fontFamily: 'Inter', fontSize: '24px', fontWeight: '500' }}>Treasury / NFT Metadata</p>
            </div>
            <div className='metadata_container'>
            <div style={{display: 'block'}}>
                <img src={woman} alt='woman'/>
                <div className='nftContainer'>
                <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p className='listedNFT'>Africana NFTs  &nbsp; <span style={{fontSize: '14px', fontWeight: '600'}}>#128</span></p>
                    <Link to=''><button className='Buy'>Edit</button></Link>
                </div>
                <div className='gridContainer'>
                    <div style={{display: 'block'}}>
                        <p className='title'>Floor Price</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Daily Value</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Weekly Value</p>
                        <p className='details'>0.530ETH</p>
                    </div>
                    <div style={{display: 'block'}}>
                        <p className='title'>Holders</p>
                        <p className='details'>2 out of 12</p>
                    </div>
                </div>
                <div className='contents'>
                    <p className='description'>Description</p>
                    <p style={{textAlign:'justify'}}>
                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him.<br/><br/>
                    This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to himThis beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him This beautiful artwork represents the heritage of us made with earnest and soulful this art means a lot to him.
                    </p>
                </div>
            </div> 
            </div>
            </div>
            </TreasuryStyled>
            <Dashboard/>
        </div>

    )
}


export default Metadata;
