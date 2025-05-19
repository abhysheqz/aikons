import React from "react";
const LogoutSquare_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm2.499 11A.75.75 0 1 1 7 11.25l3.248.005V9.51a.75.75 0 0 1 1.28-.53l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.28-.53v-1.755zM15.749 9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LogoutSquare_02;
