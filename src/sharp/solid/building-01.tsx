import React from "react";
const Building_01: React.FC<
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
        d="M20 22.75H4v-2h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.582 1.264C7.77 1.25 6.838 1.25 6.005 1.25H5.25v21.5h13.5v-5H14v-1.5h4.75v-2.5H14v-1.5h4.75c-.001-1.134-.01-1.877-.082-2.5H14v-1.5h4.355a9.75 9.75 0 0 0-7.83-6.88c-.411-.065-1.15-.092-1.943-.106"
      />
    </svg>
  );
};
export default Building_01;
