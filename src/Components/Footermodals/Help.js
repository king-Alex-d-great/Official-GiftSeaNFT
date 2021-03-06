import React, {useState} from 'react'
import {Data} from '../../Components/Data'
import styled, {keyframes} from 'styled-components'
import FrequentStyled from '../../Styled-components/MarketplaceStyled'
import {fadeInUp} from 'react-animations';
import {IconContext} from 'react-icons'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const Bounce = styled.div`
animation: 2s ${keyframes`${fadeInUp}`}`;

const TogglerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:-20px;
    width: 100%; 
    transition: all ease-in-out .6s;   
    @media(max-width: 540px){
    height: 100%;
    position: relative;
    padding-bottom: 60px;
    }
`;
const Container = styled.div`
    background: #FFF;
    transition: all ease-in-out .4s;
    box-shadow: 10px 24px 54px 0px #0000000A;
    border-radius: 20px;
    justify-content: center;
    @media(max-width: 1440px){
        width: 705px;
        transform: translateX(20px);
    }
    @media(max-width: 1366px){
        width: 665px;
        margin-left: -10px;
    }
    @media(max-width: 1330px){
        width: 600px;
    }
    @media(max-width: 1316px){
        margin-left: 20px;
    }
    @media(max-width: 1280px){
        margin-left: 10px;
        width: 595px;
    }
    @media(max-width: 1250px){
        width: 570px;
    }
    @media(max-width: 1200px){
        width: 570px;
        margin-left: -5px;
    }
    @media(max-width: 1100px){
        width: 470px;
    }
    @media(max-width: 1170px){
        width: 450px;
    }
    @media(max-width: 1045px){
        transform: translateX(-50px);
        width: 540px;
    }
    @media(max-width: 1024px){
        width: 525px;
    }
    @media(max-width: 1000px){
        width: 515px;
    }
    @media(max-width: 980px){
        width: 495px;
    }
    @media(max-width: 950px){
        width: 465px;
    }
    @media(max-width: 930px){
        width: 445px;
    }
    @media(max-width: 900px){
        width: 405px;
    }
    @media(max-width: 768px){
        transform: translateX(20px);
        width: 95%;
    }
    @media(max-width: 540px){
        margin-top: -35px;
    }
    @media(max-width: 425px){
        margin-left: -13px;
    }
`;

const Wrap = styled.div`
    background: #FFF;
    color: black;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    justify-content: space-between;
    transition: all ease-in-out .4s;
    align-items: center;
    padding-right: 20px;
    text-align: center;
    cursor: pointer;
    @media(max-width: 540px){
        font-size: 16px;
        margin: 0 !important;
    }
    :first-child{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    :last-child{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    h6{
        padding: 1rem;
        font-size: .8rem;
        @media(max-width: 540px){
            font-size: .8rem;
            padding:1rem;
        }
    }

`;
const Dropdown = styled.div`
    background: #FDFDFD;
    padding: 2rem;
    p{
        border-left: 1.2px solid #02AAB0;
        padding-left: 1.2em;
        text-align: justify;
        transition: ease-in-out .6s all;
    }
`;

const FrequentQuestions = styled.div`
    justify-content: left;
    align-items: left;
    @media(max-width: 540px){
        margin-bottom: 50px;
    }
    h4{
        text-align: left;
        font-size: 20px;
        margin-left: 20px;
        margin-bottom: 15px;
        font-weight: 700;
        justify-content: left;
        @media(max-width: 1045px){
            margin-left: -50px;
        }
        @media(max-width: 768px){
            margin-left: 15px;
        }
        @media(max-width: 540px){
            font-size: 14px;
        }
        }
        h1{
            font-weight: bold;
            @media(max-width: 540px){
                font-size: 24px;
            }
            @media(max-width: 400px){
                font-size: 22px;
                padding:1rem;
             }
            }
    }
    span{
        color: #02AAB0;
        font-size: 13px;
    }
`;


const Help = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index){
            //If clicked question is already active, then close
            return setClicked(null);
        } 

        setClicked(index)
    }
    
    return (
        <div>
         {/* <IconContext.Provider value={{color: '#02AAB0', size: '18px'}}> */}
            {/* <TogglerStyled> */}
            {/* <FrequentQuestions>
                <h4>Frequently asked questions</h4>
            </FrequentQuestions> */}
                    <Bounce>
                    <div>
                        <h4 style={{padding: '1em', transform:'translateY(15px)', fontSize:'14px', fontWeight:'bold'}}>Quick answers to your questions</h4>
                    {Data.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                            <h6>{item.question}</h6>
                            <span>{clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown style={{transition: 'ease-in-out .6s'}}/>}</span>
                            </Wrap>
                            {clicked === index ? (
                            <Dropdown>
                            <Bounce>
                            <p>{item.answer}</p>
                            </Bounce>
                            </Dropdown>
                            ): null }
                            </>
                        )
                    })}
                </div>
                </Bounce>
            {/* </TogglerStyled> */}
        {/* </IconContext.Provider> */}
        <button style={{color: '#FFF', padding:'0.4em 50px', borderRadius:'3px', border:'none', background:'#02AAB0', marginTop:'20px'}}>Send us a direct message</button>
        </div>
    );
};


export default Help;