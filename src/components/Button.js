import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <Link to={`/results?search_query=${name}`}>
        <button className="p-3 py-2 m-5 rounded-lg bg-gray-200">{name}</button>
      </Link>
    </div>
  );
};

export default Button;
