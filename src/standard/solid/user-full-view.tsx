import React from "react";
const UserFullView: React.FC<
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
        d="M8.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m7.799 8.15-.322.313-.007.007C6.37 9.57 5.256 11.535 5.25 13.496c-.005.528.022 1.83.592 2.866a.75.75 0 0 0 .657.389h1.416l1.36 5.432a.75.75 0 0 0 .727.568h4a.75.75 0 0 0 .727-.568l1.36-5.432h1.416a.75.75 0 0 0 .657-.389c.57-1.035.597-2.338.591-2.866-.006-1.964-1.125-3.928-2.223-5.026l-.328-.322A5.24 5.24 0 0 1 12 10.251 5.24 5.24 0 0 1 7.799 8.15"
      />
    </svg>
  );
};
export default UserFullView;
