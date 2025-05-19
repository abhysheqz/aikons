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
        d="M17 1.25A1.75 1.75 0 0 0 15.25 3v1H14a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1.25v1c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 22.75 21v-4A1.75 1.75 0 0 0 21 15.25h-4A1.75 1.75 0 0 0 15.25 17v1H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.25v1c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 22.75 7V3A1.75 1.75 0 0 0 21 1.25zM4.5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4 0c0 .642-.202 1.238-.546 1.726a4.5 4.5 0 0 1 2.049 3.773V14.5a1 1 0 0 1-1 1h-.749l-.792 2.775A1 1 0 0 1 6.5 19h-2a1 1 0 0 1-.962-.725L2.746 15.5h-.742a1 1 0 0 1-1-1v-1c0-1.58.813-2.969 2.044-3.772A3 3 0 1 1 8.5 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_08;
