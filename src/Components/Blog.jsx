import React from 'react'
import Meme1 from '../image/meme1.jpg'
import Meme2 from '../image/meme2.png'
import Meme3 from '../image/meme3.jpg'
import Meme4 from '../image/meme4.jpg'
import Meme5 from '../image/meme5.jpg'
import Meme6 from '../image/meme6.jpg'
import Meme7 from '../image/meme7.jpg'
import Meme8 from '../image/meme8.jpg'
import Meme9 from '../image/meme9.jpg'
export default function Blog() {
    return (
        <>
            <div className="container prog-img">
                <div className="row">
                    <div className="col-md-4 ">
                            <img src={Meme1} alt="" />
                    </div>
                    <div className="col-md-4 ">
                        <img src={Meme2} alt="" />
                    </div>
                    <div className="col-md-4 ">
                        <img src={Meme3} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme4} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme5} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme6} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme7} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme8} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Meme9} alt="" />
                    </div>
                </div>
            </div>   
        </>
    )
}
