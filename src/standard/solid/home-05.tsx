import React from "react";
const Home_05: React.FC<
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
        d="m21.532 10.805-.782-.625v9.04A2.75 2.75 0 0 1 18 21.97H6a2.75 2.75 0 0 1-2.75-2.75v-9.04l-.781.625a.75.75 0 1 1-.938-1.171l8.751-7a2.75 2.75 0 0 1 3.436 0l8.75 7a.75.75 0 1 1-.936 1.171M13 17.22a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_05;
