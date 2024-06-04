import { useState } from 'react'
import './Confirmation.css'
import cnIMG from '../assets/connection.jpg'
import Bible from '../Bible/Bible'
import { Link } from 'react-router-dom'

function Confirmation() {

  const[user, setName] = useState("")
  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (option: any) => {
      setSelectedOption(option);
  };

  return(
    <div className='container'>
      <div className='container-confirmation'>
        <div className='wrap-confirmation'>
          <div className='btn-out'>
            <Link className='btn-out-link' to='/'>Sair</Link>
          </div>
          <form className='confirmation-form'>
          <span className='confirmation-form-title'>
              <img src={cnIMG} alt="Connection Camboriú" />
            </span>
            <span className='confirmation-form-title'>Confirme sua presença!</span>
            <div className='wrap-input'>
              <input 
                className={user !== "" ? 'has-val input' : 'input'} 
                type="text" 
                value={user}
                onChange={e => setName(e.target.value)}
              />
              <span className='confirmation-focus-input' data-placeholder="Nome"></span>  
            </div>    
            <div className='check-input'>
              <div className='select-checkbox'>
              <input
                  type="checkbox"
                  checked={selectedOption === 'yes'}
                  onChange={() => handleCheckboxChange('yes')}
              />
                <p>Vou sim, não posso perder!</p>
              </div>
              <div className='select-checkbox'>
              <input
                  type="checkbox"
                  checked={selectedOption === 'not'}
                  onChange={() => handleCheckboxChange('not')}
              />
                <p>Não vou, infelizmente...😭</p>
              </div> 
              <p>Selected Option: {selectedOption}</p>
            </div> 
            <div className='container-confirmation-form-btn'>
              <button className='confirmation-form-btn'>Confirmar</button>
            </div>   
            <div className='bible-container'>
              <div className='bible-generator'>
                <Bible/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
