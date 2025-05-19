import React from "react";
const Home_06: React.FC<
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
        d="M20.75 19.36v-8.25H22a.75.75 0 0 0 .468-1.336l-9.375-7.5a1.75 1.75 0 0 0-2.186 0l-9.376 7.5A.75.75 0 0 0 2 11.11h1.25v8.25A2.75 2.75 0 0 0 6 22.11h12a2.75 2.75 0 0 0 2.75-2.75m-7.75-2a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_06;
