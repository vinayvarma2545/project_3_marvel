import React from 'react'
import JsonData from './data.json'
import './marvel.css'
import { useState } from 'react';

function JsonDataDisplay(){
    let [page,setPage] = useState('characters');
    let [data,setData] = useState()
    
    let changePage1 = () => {setPage(page='characters');setData(data=DisplayData1)};
    let changePage2 = () => {setPage(page='comics');setData(data=DisplayData2)};
    let changePage3 = () => setPage(page='stories')

    const DisplayData1=JsonData.marvel.characters.map(
        (info)=>{
            return(
                <div className='j-body'>
                    <div className='image1'>
                        <img src={info.img1} alt='imageOfCard' className='cardImage'></img>
                    </div>
                    <div className='cardBody'>
                      <p className='title1'>{info.title1}</p>
                      <button className='button1'>{info.button1}</button>
                    </div>
                </div>
            )
        }
    )

    const DisplayData2=JsonData.marvel.comics.map(
        (info)=>{
            return(
                <div className='j-body'>
                    <div className='image1'>
                        <img src={info.img2} alt='imageOfCard' className='cardImage'></img>
                    </div>
                    <div className='cardBody'>
                      <p className='title1'>{info.title2}</p>
                      <button className='button1'>{info.button2}</button>
                    </div>
                </div>
            )
        }
    )

    // const DisplayData3=JsonData.marvel.characters.map(
    //     (info)=>{
    //         return(
    //             <div className='j-body'>
    //                 <div className='image1'>
    //                     <img src={info.img1} alt='imageOfCard' className='cardImage'></img>
    //                 </div>
    //                 <div className='cardBody'>
    //                   <p className='title1'>{info.title1}</p>
    //                   <button className='button1'>{info.button1}</button>
    //                 </div>
    //             </div>
    //         )
    //     }
    // )


    return(
        <div className='content-body'>
            <div className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' alt='marvel' className='logo'></img>
                <button onClick={changePage1} className='headerPage' >Characters</button>
                <button onClick={changePage2} className='headerPage' >Comics</button>
                <button onClick={changePage3} className='headerPage' >Stories</button>
            </div>
            <h3 className='pageInfo'>{page}</h3>
            <div className='card1'>
                <div className='main-body'>
                    {data}
                </div>
            </div>
        </div>
    )
}

export default JsonDataDisplay;