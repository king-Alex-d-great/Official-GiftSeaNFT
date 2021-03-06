import React from 'react'
import Table from '../../pages/Admindashboardpages/Table'
import Dashboard from '../../pages/Userdashboardpages/Dashboard'
import TransactionStyled from '../../Styled-components/AdminHeroStyled'

const Transactions = () => {
  return (
    <div style={{marginTop: '-20px'}} className='transactions__container'>
    <TransactionStyled>
        <div className='text-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', transform: 'translateY(20px)'}}>
        <p className='listedNFT'>Recent Transactions</p>
        <p className='SeeAll' style={{cursor: 'pointer', background:'#fff', padding: '0.4em', borderRadius: '10px'}}>Monthly <i className='fas fa-angle-right'></i></p>
      </div>
        <Table/>
        {/* <Dashboard/> */}
    </TransactionStyled>
    </div>
  )
}

export default Transactions