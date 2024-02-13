
import Image from 'next/image';

const Card = ({ imageUrl, title, description1, description2, description3, phoneNumber }) => {
    return (
      <div className="p-4 border-4 border-white rounded-md shadow-md mx-16 my-8">
      <Image src={imageUrl} alt={title} width={135} height={125} className="w-3/8 h-32 object-cover mb-2 rounded-md" />
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <p className="mb-2 text-white">{description1}</p>
      <p className="mb-2 text-white">{description2}</p>
      <p className="mb-2 text-white">{description3}</p>
      <p className="text-gray-100">{phoneNumber}</p>
    </div>
    );
  };
  
  export default Card;
  