import React from "react";
const Redo_03: React.FC<
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
        fillRule="evenodd"
        d="M17.605 3.204a1 1 0 0 0-1.21 1.592l1.154.877c.736.56 1.283.976 1.684 1.327H9a7 7 0 1 0 0 14h4a1 1 0 1 0 0-2H9A5 5 0 0 1 9 9h10.233c-.4.35-.948.768-1.684 1.327l-1.154.877a1 1 0 0 0 1.21 1.592l1.214-.922c.897-.681 1.656-1.258 2.181-1.79.552-.559 1-1.22 1-2.084s-.448-1.525-1-2.084c-.525-.532-1.284-1.108-2.181-1.79l-.06-.046z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Redo_03;
