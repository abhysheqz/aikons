import React from "react";
const NThRoot: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.825 7.388A2 2 0 0 1 12.729 6H22a1 1 0 0 1 0 2h-9.271L8.452 21.306a1 1 0 0 1-1.816.198l-2.846-4.88-1.083 1.083a1 1 0 1 1-1.414-1.414l1.083-1.083a2 2 0 0 1 3.141.407l1.717 2.942z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.824 2.434A.999.999 0 0 0 2 3v6a1 1 0 0 0 2 0V5.571C4 4.677 4.698 4 5.5 4S7 4.677 7 5.571V9a1 1 0 0 0 2 0V5.571C9 3.626 7.46 2 5.5 2c-.61 0-1.18.158-1.676.434"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NThRoot;
