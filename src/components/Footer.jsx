import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='pt-4 my-md-5 border-top'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
              <div className='col mb-3'>
                  <a className='logofooter'>
                    <img src='img/first.jpg' className='bi me-2' width={100} height={100}></img>
                  </a>
                  <p>
                    A&B
                  </p>

                  <div className='col mb-3'>

                  </div>

                  </div>
                  <div className='col mb-4'> 
                      <h5>Информация</h5>
                      <ul className='nav flex-column'>
                        <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'>Соц.Сети</a>
                        </li>
                        <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'>Ютуб</a>
                        </li>
                      </ul>
                  </div>

                  <div className='col mb-4'> 
                      <h5>Информация</h5>
                      <ul className='nav flex-column'>
                        <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'>Поддержка</a>
                        </li>
                        <li className='nav-item mb-3'>
                          <a className='nav-link p-0 text-muted'>Отзывы</a>
                        </li>
                      </ul>
                  </div>
              
            </footer>
        </footer>
    </div>
  )
}

export default Footer