import React, { useState, useEffect } from 'react';
import image1 from '../../public/img/humans1.svg';
import image2 from '../../public/img/02.svg';
import image3 from '../../public/img/sariq.svg';
import image4 from '../../public/img/04.svg';

const numbers = ['01', '02', '03', '04'];
const colors = ['bg-orange-500', 'bg-pink-500', 'bg-orange-800', 'bg-blue-500'];
const texts = ['Engineering peace of mind', 'International Invention Day', 'AI innovation', 'Expert software development'];
const images = [image1, image2, image3, image4];

function Pageone() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative border-b-[1px]">
      <div className={`absolute top-0 left-0 m-4 p-4 rounded-lg shadow-lg h-[40%] ${colors[index]}`}>
        <h1 className="text-8xl font-semibold text-black w-[1000px] h-[50%] ">{texts[index]}</h1>
       
      </div >
       <p className="text-black mt-40 w-[40%] mr-24 ">Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.</p>
        <button className={`mt-24 px-4 py-2 ${colors[index]} text-white mr-60 w-[30%] h-[9%] mt-4 rounded-2xl`} onClick={() => handleClick(index)}>
          {texts[index]} Button
        </button>
      <div className="absolute top-20 right-10 flex items-end ">
        {numbers.map((number, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`transition-transform duration-7000 cursor-pointer ${
              i === index ? 'text-6xl text-black border-b-4 px-6 opacity-0.3' : 'text-2  xl text-gray-400 border-t-2 px-4'
            } mx-2 border-black `}
            style={{ transform: `translateY(${i === index ? '0' : '20px '})` }}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 mb-[100px] right-4">
        <img src={images[index]} alt={`Slide ${index + 1}`} className="w-420 h-72 rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Pageone;
