import React from 'react';

interface StarButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const StarButton: React.FC<StarButtonProps> = ({ 
  text = "Download Resume", 
  onClick,
  className = "" 
}) => {
  const StarSvg: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality' as any, // Type assertion to fix error
        fillRule: 'evenodd',
        clipRule: 'evenodd'
      }}
      viewBox="0 0 784.11 815.53"
    >
      <g id="Layer_x0020_1">
        <path
          style={{ fill: '#fffdef' }}
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        />
      </g>
    </svg>
  );

  return (
    <button 
      className={`animated-button ${className}`}
      onClick={onClick}
    >
      {text}
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className={`star-${num}`}>
          <StarSvg />
        </div>
      ))}
      <style>
        {`
        .animated-button {
          position: relative;
          padding: 12px 35px;
          background: #fec195;
          font-size: 17px;
          font-weight: 500;
          color: #181818;
          border: 3px solid #fec195;
          border-radius: 8px;
          box-shadow: 0 0 0 #fec1958c;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }

        .animated-button:hover {
          background: transparent;
          color: #fec195;
          box-shadow: 0 0 25px #fec1958c;
        }

        .star-1 {
          position: absolute;
          top: 20%;
          left: 20%;
          width: 25px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }

        .animated-button:hover .star-1 {
          top: -80%;
          left: -30%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .star-2 {
          position: absolute;
          top: 45%;
          left: 45%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }

        .animated-button:hover .star-2 {
          top: -25%;
          left: 10%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .star-3 {
          position: absolute;
          top: 40%;
          left: 40%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }

        .animated-button:hover .star-3 {
          top: 55%;
          left: 25%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .star-4 {
          position: absolute;
          top: 20%;
          left: 40%;
          width: 8px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
        }

        .animated-button:hover .star-4 {
          top: 30%;
          left: 80%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .star-5 {
          position: absolute;
          top: 25%;
          left: 45%;
          width: 15px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
        }

        .animated-button:hover .star-5 {
          top: 25%;
          left: 115%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .star-6 {
          position: absolute;
          top: 5%;
          left: 50%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 0.8s ease;
        }

        .animated-button:hover .star-6 {
          top: 5%;
          left: 60%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }
      `}
      </style>
    </button>
  );
};

export default StarButton;
