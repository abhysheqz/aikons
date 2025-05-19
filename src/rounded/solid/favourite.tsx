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
        d="M19.419 15.66c1.77-2.036 3.331-4.507 3.331-6.966 0-3.242-2.402-5.944-5.75-5.944-1.592 0-3.134.513-5 2.215C10.134 3.263 8.592 2.75 7 2.75c-3.348 0-5.75 2.702-5.75 5.944 0 2.459 1.56 4.93 3.331 6.966 1.799 2.068 3.948 3.837 5.38 4.908l.233.16a3.39 3.39 0 0 0 3.844-.16l.57-.433c1.395-1.085 3.237-2.666 4.81-4.475"
      />
    </svg>
  );
};
export default Favourite;
