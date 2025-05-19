import React from "react";
const Vynil_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 12.704c0 5.62-4.477 10.175-10 10.175s-10-4.556-10-10.175 4.477-10.175 10-10.175c1.169 0 2.29.204 3.333.579"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12.703c0-.843-.672-1.526-1.5-1.526s-1.5.683-1.5 1.526.672 1.526 1.5 1.526 1.5-.683 1.5-1.526Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.507 9.18c0 1.413-1.115 2.558-2.49 2.558s-2.492-1.145-2.492-2.558 1.115-2.558 2.491-2.558 2.491 1.145 2.491 2.558Zm0 0s-.053-6.889.034-8.306c.192 1.405.88 3.726 2.957 3.726"
      />
    </svg>
  );
};
export default Vynil_02;
