import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  image?: string;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, image, className = '', onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img src={image} alt={title || 'Card image'} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>}
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default Card;


