interface ListProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

const List = ({ text1, text2, text3, text4, text5 }: ListProps) => {
  return (
    <div className="flex flex-col items-start justify-center mt-8">
      <ul>
        <li className="flex items-center ">
          <span className="scale-50 material-symbols-outlined text-white">
            arrow_forward_ios
          </span>
          <a href="#">{text1}</a>
        </li>
        <li className="flex items-center ">
          <span className="scale-50 material-symbols-outlined text-white">
            arrow_forward_ios
          </span>
          <a href="#">{text2}</a>
        </li>
        <li className="flex items-center ">
          <span className="scale-50 material-symbols-outlined text-white">
            arrow_forward_ios
          </span>
          <a href="#">{text3}</a>
        </li>
        <li className="flex items-center ">
          <span className="scale-50 material-symbols-outlined text-white">
            arrow_forward_ios
          </span>
          <a href="#">{text4}</a>
        </li>
        <li className="flex items-center ">
          <span className="scale-50 material-symbols-outlined text-white">
            arrow_forward_ios
          </span>
          <a href="#">{text5}</a>
        </li>
      </ul>
    </div>
  );
};

export default List;
