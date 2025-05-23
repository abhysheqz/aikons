import React from "react";
const Shapes: React.FC<
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
        d="M16.082 2.996a6.005 6.005 0 0 0 4.922 4.922c.545.09.996.53.996 1.082v6c0 .552-.451.991-.996 1.082a6.005 6.005 0 0 0-4.922 4.922c-.09.545-.53.996-1.082.996H9c-.552 0-.991-.451-1.082-.996a6.005 6.005 0 0 0-4.922-4.922C2.45 15.992 2 15.552 2 15V9c0-.552.451-.991.996-1.082a6.005 6.005 0 0 0 4.922-4.922C8.008 2.45 8.448 2 9 2h6c.552 0 .991.451 1.082.996Z"
      />
    </svg>
  );
};
export default Shapes;
