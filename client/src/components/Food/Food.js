import React from "react";

function Food() {
  return (
    <>
      {" "}
      <div className="page app__content">
        <div className="content">
          <h1 className="title title--medium">Mon alimentation</h1>

          <div className="content__inside">
            <p className="text">
              J'ai l'estomac capricieux, et je ne mange donc que des croquettes
              vétérinaires...
            </p>

            <p className="text bold">
              Merci de ne pas me donner d'autre nourriture, et surtout pas de
              lait, qui me rend malade.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
