import React from "react";
const Service: React.FC<
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
        d="M12 4.76s2.866-3.156 6.858-1.015c3.403 1.825 4.583 7.396.785 12.107M12 4.76S9.134 1.604 5.142 3.745C.307 6.338-.04 16.492 12 21c3.566-1.335 6.045-3.165 7.643-5.148M12 4.76 8.73 7.205a2.21 2.21 0 0 0 2.55 3.608L14 9l5.643 6.852"
      />
    </svg>
  );
};
export default Service;
