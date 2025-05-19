import React from "react";
const Favourite: React.FC<
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
        d="M11.614 21.144a.75.75 0 0 0 .772 0c.28-.18 1.128-.724 1.605-1.057a38 38 0 0 0 3.508-2.752c1.275-1.135 2.574-2.476 3.559-3.925.98-1.441 1.692-3.053 1.692-4.716 0-3.242-2.402-5.944-5.75-5.944-1.592 0-3.134.513-5 2.215C10.134 3.263 8.592 2.75 7 2.75c-3.348 0-5.75 2.702-5.75 5.944 0 1.662.712 3.274 1.692 4.716.985 1.449 2.284 2.79 3.559 3.925a38 38 0 0 0 3.508 2.752c.477.333 1.325.877 1.605 1.057"
      />
    </svg>
  );
};
export default Favourite;
