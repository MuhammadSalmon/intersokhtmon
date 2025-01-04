import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DescriptionWithToggle = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 150; // Characters to show before truncating

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div>
      <p className="text-gray-700">
        {showMore ? description : `${description.slice(0, maxLength)}...`}
      </p>
      {description.length > maxLength && (
        <button
          onClick={toggleShowMore}
          className="flex items-center text-customPurple mt-2 font-medium"
        >
          {showMore ? (
            <>
              <span>Скрыть</span>
              <FaChevronUp className="ml-2" />
            </>
          ) : (
            <>
              <span>Показать больше</span>
              <FaChevronDown className="ml-2" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default DescriptionWithToggle;
