import React from "react";
const PoliceBadge: React.FC<
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
        d="M3 14c0-.82.156-1.548.388-2.19.633-1.75.949-2.625 1.007-3.037.073-.518.072-.645-.007-1.163C4.325 7.2 3.5 5 3.5 5 5.354 3.324 8.233 2 12 2s6.646 1.324 8.5 3c0 0-.825 2.2-.888 2.61-.079.518-.08.645-.007 1.163.058.412.375 1.287 1.007 3.037.232.642.388 1.37.388 2.19 0 3-2.5 5.375-5 6-2.192.548-3.333 1.333-4 2-.667-.667-1.808-1.452-4-2-2.5-.625-5-3-5-6Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.401 9.389-1.33-2.256a.1.1 0 0 0-.172.001l-1.302 2.255-2.435.596a.1.1 0 0 0-.05.165l1.689 1.821-.646 2.816a.1.1 0 0 0 .136.115l2.706-1.121 2.692 1.127a.1.1 0 0 0 .136-.114l-.643-2.823 1.704-1.821a.1.1 0 0 0-.05-.166z"
      />
    </svg>
  );
};
export default PoliceBadge;
