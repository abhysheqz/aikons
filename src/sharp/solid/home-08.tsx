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
        d="M21.75 7.924 12 1.424l-9.75 6.5v14.651h19.5zm-4 7.825h-3.5v3.5h3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_08;
