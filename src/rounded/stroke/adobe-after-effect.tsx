import React from "react";
const AdobeAfterEffect: React.FC<
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
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 16-.866-2.8M6 16l.866-2.8m0 0 .724-2.341C8.18 8.953 8.475 8 9 8s.82.953 1.41 2.859l.724 2.341m-4.268 0h4.268M14 12.87V14a2 2 0 0 0 3.736.994M14 12.87V12a2 2 0 1 1 4 0v.87z"
      />
    </svg>
  );
};
export default AdobeAfterEffect;
