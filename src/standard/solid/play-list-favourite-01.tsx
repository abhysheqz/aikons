import React from "react";
const PlayListFavourite_01: React.FC<
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
        d="M17 13.942a3 3 0 0 0-.772-.473c-.604-.255-1.455-.376-2.432.141-1.209.64-1.817 2.186-1.43 3.795.39 1.622 1.78 3.306 4.547 4.33a.25.25 0 0 0 .173 0c2.768-1.024 4.157-2.708 4.547-4.33.387-1.61-.22-3.154-1.43-3.795-.977-.517-1.828-.396-2.431-.14a3.1 3.1 0 0 0-.772.472"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.5 8h21v5.768a4.2 4.2 0 0 0-1.595-1.484c-1.445-.765-2.779-.594-3.719-.196a5 5 0 0 0-.186.085 5 5 0 0 0-.187-.085c-.94-.398-2.273-.569-3.719.197-1.941 1.028-2.697 3.347-2.186 5.47.445 1.852 1.793 3.56 4.04 4.745H4.5a3 3 0 0 1-3-3zM9.97 1.5 6.507 6H1.5V4.5a3 3 0 0 1 3-3zM19.493 1.5 16.03 6h6.47V4.5a3 3 0 0 0-3-3zM12.493 1.5 9.03 6h4.477l3.461-4.5z"
      />
    </svg>
  );
};
export default PlayListFavourite_01;
