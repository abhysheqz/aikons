import React from "react";
const Brain_02: React.FC<
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
        d="m11.5 20 .289.866a1 1 0 0 0 .877.682l4.576.326a2 2 0 0 0 2.104-1.602L20 17l2-2-2-4a9 9 0 1 0-18 0c0 1.887.581 3.517 1.574 4.935.263.375.426.815.426 1.273V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.332 12a1.75 1.75 0 1 1-1.653-2.499A2 2 0 0 1 9.24 6.43m0 0a2.5 2.5 0 0 1 4.715.595M9.24 6.43c.463.367.76.934.76 1.57m3.955-.975Q14 7.257 14 7.5m-.045-.475C15 6.847 16 7.68 16 8.75A1.75 1.75 0 0 1 13.025 10M10.5 15v-.077c0-1.062.861-1.923 1.923-1.923.917 0 1.706-.647 1.886-1.546l.191-.954"
      />
    </svg>
  );
};
export default Brain_02;
