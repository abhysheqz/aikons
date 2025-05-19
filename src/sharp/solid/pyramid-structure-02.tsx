import React from "react";
const PyramidStructure_02: React.FC<
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
        d="m20.635 17.898 2.639 4.75H.724l2.64-4.75zM19.524 15.898l-2.778-5H7.252l-2.777 5zM8.364 8.898h7.271l-3.636-6.544z"
      />
    </svg>
  );
};
export default PyramidStructure_02;
