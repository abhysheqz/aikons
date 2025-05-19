import React from "react";
const FavouriteCircle: React.FC<
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17s-5-3.177-5-6.25C7 9.231 8.053 8 9.5 8c.75 0 1.5.265 2.5 1.324C13 8.264 13.75 8 14.5 8c1.447 0 2.5 1.231 2.5 2.75 0 3.073-5 6.25-5 6.25Z"
      />
    </svg>
  );
};
export default FavouriteCircle;
