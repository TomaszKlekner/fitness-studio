import { ClassType } from "../sections/Classes";

type Props = {
  singleClass: ClassType;
};

const Class = ({ singleClass }: Props) => {
  const { image, name, description = "" } = singleClass;
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col 
  items-center justify-center whitespace-normal bg-primary-500 text-center 
  text-white opacity-0 transition duration-500 hover:opacity-90 cursor-pointer`;

  return (
    <li className="in-line-block relative mx-5 h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};

export default Class;
