import React from "react";
const Kurta: React.FC<
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
        d="M6.377 16H3l1.5-9.5L9 5V2s1.5.5 3 .5 3-.5 3-.5v3l4.5 1.5L21 16h-3.377"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 5 2.051.684a3 3 0 0 0 1.898 0L15 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.505 10 6.5 22h11l-.999-12M12 14V6M12 9h2m-2 2.5h2"
      />
    </svg>
  );
};
export default Kurta;
