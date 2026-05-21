
import profile from './assets/profile.png'
import yoh from './assets/yoh.jpg'
import Rosemary from './assets/Rosemary.jpg'

function Cards(){

    return(
        <div className='cardwrap'>
        <div className="card">
            <div className='cardimage'>
            
            <img src={Rosemary} alt="img"></img>
            </div>
            <div className='cardInfo'>
              <h1> Simo</h1>
              <p> A visionary ELECTROMECHANICAL ENGINEER</p>
            </div>
        </div>

        <div className="card">
            <div className='cardimage'>
            <img src={yoh} alt="img"></img>
            </div>
            <div className='cardInfo'>
            <h1> Simo</h1>
            <p> A visionary ELECTROMECHANICAL ENGINEER</p>
            </div>
        </div>

        <div className="card">
            <div className='cardimage'>
            <img src={profile} alt="img"></img>
            </div>
    
            <div className='cardInfo'>
            <h1> Simo</h1>
            <p> A visionary ELECTROMECHANICAL ENGINEER</p>
            </div>
        </div>

        </div>
    )

}

export default Cards