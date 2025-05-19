import React from "react";
const Home_02: React.FC<
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
        d="M13.579 2.189a2.75 2.75 0 0 0-3.154 0L2.632 7.641a2.75 2.75 0 0 0-1.123 2.773L3.453 20.52a2.75 2.75 0 0 0 2.7 2.23H17.85a2.75 2.75 0 0 0 2.7-2.23l1.944-10.105a2.75 2.75 0 0 0-1.124-2.773zM13 16a1 1 0 1 0-2 0v2a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_02;
