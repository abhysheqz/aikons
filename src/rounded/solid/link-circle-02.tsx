import React from "react";
const LinkCircle_02: React.FC<
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
        d="M12.115 2.901a1 1 0 0 1-.896 1.094 8.023 8.023 0 1 0 8.786 8.786 1 1 0 0 1 1.99.198C21.492 18.044 17.22 22 12.022 22 6.487 22 2 17.513 2 11.978c0-5.198 3.956-9.47 9.021-9.973a1 1 0 0 1 1.094.896"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.302 2.118c-1.046-.185-2.796-.11-3.674-.058-1.16.068-1.635 1.457-.85 2.242l1.252 1.252-2.73 2.709q-.089.089-.151.19l-3.854 3.838a1 1 0 1 0 1.41 1.418l3.966-3.948q.03-.027.06-.056l2.736-2.714 1.231 1.23c.786.786 2.174.31 2.242-.849.052-.878.127-2.628-.058-3.674a1.95 1.95 0 0 0-.487-.99l-.009-.01a1.94 1.94 0 0 0-1.084-.58"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LinkCircle_02;
