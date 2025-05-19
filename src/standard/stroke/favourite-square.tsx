import React from "react";
const FavouriteSquare: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16.5s-5-3.177-5-6.25C7 8.731 8.053 7.5 9.5 7.5c.75 0 1.5.265 2.5 1.324 1-1.06 1.75-1.324 2.5-1.324 1.447 0 2.5 1.231 2.5 2.75 0 3.073-5 6.25-5 6.25Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
};
export default FavouriteSquare;
