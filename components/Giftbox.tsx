import React from "react";

interface GiftBoxProps {
  onClick: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onClick }) => {
  return (
    <div className="col-12 d-flex justify-content-center" onClick={onClick}>
      <div className="box p-5">
        <div className="box-body">
          <img
            className="img"
            src="https://via.placeholder.com/80"
            alt="gift"
          />
          <div className="box-lid">
            <div className="box-bowtie"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
