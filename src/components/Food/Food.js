import React from "react";

import "./Food.scss";

function Food() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Bonjour !</h1>

          <div className="content__inside">
            <p className="text">
              Je m'appelle Pavlov. <br /> Je suis un chat très curieux, et
              j'aime donc me promener et rencontrer de nouveaux humains. <br />
              Mais je ne suis pas perdu pour autant !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
