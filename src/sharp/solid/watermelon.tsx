import React from "react";
const Watermelon: React.FC<
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
        fill="currentColor"
        d="m18.686 2.802-.522-.552-1.94 1.94.285.285.007.008A8.513 8.513 0 0 1 4.482 16.517l-.008-.007-.284-.285-1.94 1.94.552.52a11.2 11.2 0 0 0 7.712 3.065c6.206 0 11.236-5.03 11.236-11.236a11.2 11.2 0 0 0-3.064-7.712"
      />
      <path
        fill="currentColor"
        d="m5.25 15.164.27.27a7.013 7.013 0 0 0 9.913-9.913l-.27-.27-2.052 2.053.187.455q.09.216.092.467c0 .48-.275.897-.679 1.1l-.55.277.175.592a1.724 1.724 0 0 1-1.65 2.211c-.461 0-.878-.179-1.187-.473l-.521-.496z"
      />
    </svg>
  );
};
export default Watermelon;
