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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.836 6.733.404.794a1 1 0 0 0 .734.533l4.755.757a1 1 0 0 1 .55 1.694l-3.404 3.413a1 1 0 0 0-.28.862l.751 4.763a1 1 0 0 1-1.442 1.047l-2.144-1.092"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.737 2.63c.549-1.077 2.175-.687 2.175.522v14.415c0 .658-.37 1.26-.956 1.56l-4.197 2.137c-1.273.65-2.745-.42-2.523-1.831l.75-4.764a.25.25 0 0 0-.07-.215L2.514 11.04c-1.009-1.011-.447-2.74.964-2.964l4.754-.758a.25.25 0 0 0 .184-.133z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarHalf;
