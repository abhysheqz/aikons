import React from "react";
const CarParking_01: React.FC<
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
        d="M3 7.75V21a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a1 1 0 1 1-2 0V7.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M10.062 11a1 1 0 0 0-.97.758l-.622 2.485a1 1 0 1 1-1.94-.486l.621-2.485A3 3 0 0 1 10.061 9h3.877a3 3 0 0 1 2.91 2.272l.622 2.486a1 1 0 1 1-1.94.485l-.621-2.485a1 1 0 0 0-.97-.758z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 13a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3zm2 3.5a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0zm6 0a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarParking_01;
