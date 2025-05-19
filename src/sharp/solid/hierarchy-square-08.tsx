import React from "react";
const HierarchySquare_08: React.FC<
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
        d="M7.49 9.344A2.58 2.58 0 0 0 8.002 7.8c0-1.388-1.1-2.55-2.5-2.55s-2.5 1.162-2.5 2.55c0 .576.19 1.113.51 1.544A4.25 4.25 0 0 0 1.253 13.1v1.65h1.665l1 4h3.17l1-4h1.664V13.1a4.25 4.25 0 0 0-2.26-3.756M4.5 7.8c0-.6.468-1.05 1-1.05.533 0 1 .45 1 1.05s-.467 1.05-1 1.05-1-.45-1-1.05"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM15.25 2a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 6h3V4h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_08;
