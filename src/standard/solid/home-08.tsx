import React from "react";
const Home_08: React.FC<
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
        d="M13.703 2.387a2.75 2.75 0 0 0-3.405 0l-7 5.519a2.75 2.75 0 0 0-1.048 2.16V20A2.75 2.75 0 0 0 5 22.75h14A2.75 2.75 0 0 0 21.75 20v-9.935a2.75 2.75 0 0 0-1.047-2.16zM15 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_08;
