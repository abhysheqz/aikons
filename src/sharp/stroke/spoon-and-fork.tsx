import React from "react";
const SpoonAndFork: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18.5 3.002-4.5 4.5 3.5 3.5 4.5-4.5m-6.25 2.75L4 21.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 4.999-2.5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325Zm0 0L20 21.001M9.205 2.397A10 10 0 0 1 12 2c1.152 0 2.258.195 3.288.553M2.049 11q-.049.494-.049 1c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935 1.524 0 2.97-.341 4.262-.951m4.09-3.549a9.95 9.95 0 0 0 1.648-5.5q-.002-.868-.143-1.696"
      />
    </svg>
  );
};
export default SpoonAndFork;
