import React from "react";
const Boxer: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 6zm1.5.75v1.5h16.5v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25a.75.75 0 0 0-.696.471L1.25 10.856V21.75h9.5v-5.44L12 15.06l1.25 1.25v5.44h9.5V10.856L20.696 5.72A.75.75 0 0 0 20 5.25H4m8 0a.75.75 0 0 1 .642.364l3 5-1.286.772-2.414-4.023-1.334 1.853L9.39 8.34l2-2.778a.75.75 0 0 1 .608-.312"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Boxer;
