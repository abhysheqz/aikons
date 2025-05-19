import React from "react";
const FileStar: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 5V9l-7-7H4v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.52 16.642 16 14.5l-1.473 2.142-2.527.726 1.621 2.072-.086 2.56L16 21l2.516 1-.082-2.571L20 17.368z"
      />
    </svg>
  );
};
export default FileStar;
