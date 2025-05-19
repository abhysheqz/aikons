import React from "react";
const CheckmarkSquare_03: React.FC<
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
        d="M21.158 2.267A.8.8 0 0 0 21 2.25H3a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V4.2c-.876.441-1.791 1.141-2.706 2.015-1.116 1.066-2.174 2.337-3.096 3.571a47 47 0 0 0-2.231 3.28c-.27.436-.698 1.17-.841 1.417l-.92 1.666-.85-1.702c-.678-1.354-1.447-2.106-2.007-2.513l-.073-.053c-.225-.165-.32-.235-.78-.414l-.959-.24.485-1.94.97.243.031.01c.109.037.348.118.469.171.27.12.628.31 1.033.605a7.9 7.9 0 0 1 1.714 1.741l.029-.045a49 49 0 0 1 2.328-3.423c.96-1.286 2.093-2.65 3.316-3.82 1.071-1.023 2.256-1.94 3.496-2.502"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkSquare_03;
