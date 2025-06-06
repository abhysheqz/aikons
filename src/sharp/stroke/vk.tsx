import React from "react";
const Vk: React.FC<
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
        strokeWidth={1.5}
        d="M2 5.5h3.5c0 8 4.5 9 4.5 9l.002-9h3.5l-.003 5c4.5-2 5-5 5-5H22s-1 4.5-4.906 6.653C19.11 13.351 21.268 15.331 22 18.5h-3.5s-1-3-5-4.5l.002 4.5C1.887 18.5 2.002 7.5 2 5.5Z"
      />
    </svg>
  );
};
export default Vk;
