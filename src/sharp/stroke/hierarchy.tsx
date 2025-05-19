import React from "react";
const Hierarchy: React.FC<
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
        d="M11.994 12.965v2.492m0 0 2.498 1.495m-2.499-1.495-2.498 1.495"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.527 3.5c0 .844-.682 1.528-1.523 1.528s-1.522-.684-1.522-1.527c0-.844.681-1.528 1.522-1.528s1.523.684 1.523 1.528ZM8.997 10.52c.18-4 5.746-4.071 6.014 0zM6.52 14.954c0 .843-.682 1.527-1.523 1.527s-1.522-.684-1.522-1.527c0-.844.681-1.528 1.522-1.528s1.523.684 1.523 1.528ZM1.99 21.973c.18-4 5.746-4.071 6.014 0zM20.511 14.954c0 .843-.682 1.528-1.523 1.528s-1.522-.684-1.522-1.528.682-1.528 1.522-1.528c.841 0 1.523.684 1.523 1.528ZM15.981 21.973c.18-4 5.746-4.071 6.015 0z"
      />
    </svg>
  );
};
export default Hierarchy;
