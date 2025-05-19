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
        d="m12 2.123 11 9.754h-2.73v10H3.73v-10H1zM13 17v-2h-2v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Home_06;
