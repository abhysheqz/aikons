import React from "react";
const Mouse_06: React.FC<
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
        d="M13.857 3.114a.75.75 0 0 1 1.025-.26l5.923 3.44.628-1.153 1.317.718-1 1.833a.75.75 0 0 1-1.04.287l-5.95-3.455-1.116 1.862-1.287-.772z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.551 4.196c-2.163-.949-4.7-.345-5.972 1.482-.727 1.044-1.465 2.14-2.138 3.312-.674 1.17-1.25 2.361-1.787 3.516-.938 2.017-.192 4.521 1.706 5.927a21 21 0 0 0 1.972 1.314c.7.406 1.415.749 2.12 1.058 2.162.949 4.698.345 5.971-1.482.727-1.044 1.465-2.14 2.139-3.312.673-1.17 1.25-2.361 1.786-3.516.938-2.017.192-4.521-1.706-5.927a21 21 0 0 0-1.972-1.314c-.7-.406-1.414-.749-2.119-1.058m-.393 3.265L9.791 9.596l1.684 1.079 1.367-2.135z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_06;
