import React from 'react';

import Media from 'react-bootstrap/Media';
import logo from '../../assets/logo.png';

function Teste() {
  return (
      <div>
        <Media>
            <img
                width={64}
                height={64}
                className="mr-5"
                src={logo}
                alt="Generic placeholder"
            />
        <Media.Body>
            <h5>Media Heading</h5>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </p>
        </Media.Body>
    </Media>
  </div>
  )
}

export default Teste;