import React from "react";
const CricketHelmet: React.FC<
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
        d="M22 21.75a.75.75 0 0 0 0-1.5zm-6.74-10.133 1.233 7.812 1.481-.234-1.233-7.812zm3.949 10.133H22v-1.5h-2.791zm-2.716-2.321a2.75 2.75 0 0 0 2.716 2.321v-1.5a1.25 1.25 0 0 1-1.235-1.055z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 16-4.825.484c-.447.041-.9.011-1.308-.18-.672-.319-1.725-.997-2.367-2.304"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.008 17h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 16v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 9-1.023.43m0 0C19.695 5.69 15.673 3 11.5 3A9.5 9.5 0 0 0 2 12.5a9.79 9.79 0 0 0 3.156 7.186C6.255 20.692 7.78 21 9.27 21h3.009a2 2 0 0 0 1.909-2.596l-.876-2.802a3 3 0 0 1 1.7-3.66z"
      />
    </svg>
  );
};
export default CricketHelmet;
