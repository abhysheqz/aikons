import React from "react";
const StarHalf: React.FC<
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
        strokeWidth={1.5}
        d="m14.579 8.003.417.995h6.994a.01.01 0 0 1 .007.017l-5 5.487 2.495 7.483a.01.01 0 0 1-.014.012L14.57 19.38M8.983 8.998H2.01a.01.01 0 0 0-.007.017l4.986 5.5-2.468 7.473a.01.01 0 0 0 .014.012l7.45-3.988V6.666l.024-4.657c0-.01-.015-.014-.02-.004z"
      />
    </svg>
  );
};
export default StarHalf;
