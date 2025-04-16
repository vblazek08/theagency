interface ListProps {
  array: string[];
}

const List = ({ array }: ListProps) => {
  return (
    <div className="flex flex-col items-start justify-center mt-8">
      <ul>
        {array.map((item) => (
          <li key={item} className="flex items-center ">
            <span className="scale-50 material-symbols-outlined text-white">
              arrow_forward_ios
            </span>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
