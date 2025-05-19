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
        fillRule="evenodd"
        d="M13.749 4.087c-.762-1.371-2.735-1.371-3.497 0L7.523 9h8.955zM17.589 11H6.412l-1.667 3h14.511zm2.778 5H3.634l-1.682 3.028C1.212 20.361 2.175 22 3.7 22h16.601c1.525 0 2.489-1.639 1.748-2.972z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PyramidStructure_02;
