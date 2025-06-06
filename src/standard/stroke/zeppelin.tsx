import React from "react";
const Zeppelin: React.FC<
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
        d="M2 10.997c0 3 8 6 13 6 4 0 7-2.686 7-6s-3-6-7-6c-5 0-13 3-13 6M2 10.997h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6 5.736 4.49a2 2 0 0 0-1.594-.275L3 4.5 4 8M8 16l-2.264 1.51a2 2 0 0 1-1.594.275L3 17.5 4 14M12 17l.781 1.563a1 1 0 0 0 .699.533l3.585.717a1 1 0 0 0 1.166-.738L19 16"
      />
    </svg>
  );
};
export default Zeppelin;
