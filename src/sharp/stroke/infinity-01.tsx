import React from "react";
const Infinity_01: React.FC<
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
        d="M12 12s-2.739 5-5.5 5S2 14.761 2 12s1.739-5 4.5-5 5.5 5 5.5 5Zm0 0s2.739 5 5.5 5 4.5-2.239 4.5-5-1.739-5-4.5-5-5.5 5-5.5 5Z"
      />
    </svg>
  );
};
export default Infinity_01;
