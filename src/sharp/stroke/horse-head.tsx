import React from "react";
const HorseHead: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 21c-4.5-5-1.5-8-1.5-8h.5c1 2 3.5 2 3.5 2l2.5 1.5 2-3-1.552-1.651a4.37 4.37 0 0 1-1.116-2.313C18.17 8.5 17.5 7.5 16.887 6.908L16 6l1-3s-2.576.03-3.5 2C7.5 5.5 3 9.536 3 21"
      />
    </svg>
  );
};
export default HorseHead;
