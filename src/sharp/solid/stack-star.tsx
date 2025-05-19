import React from "react";
const StackStar: React.FC<
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
        d="M1.534 5.535a.97.97 0 0 1 .688-.285h15.556c.537 0 .972.435.972.972v15.556a.97.97 0 0 1-.972.972H2.222a.97.97 0 0 1-.972-.972V6.222c0-.258.102-.505.284-.687m1.66 1.66v13.61h13.611V7.196z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 9c.286 0 .544.17.656.433l1.1 2.567h2.53a.714.714 0 0 1 .528 1.195l-1.861 2.047.939 2.818a.714.714 0 0 1-1.014.856L10 17.381l-2.878 1.535a.714.714 0 0 1-1.014-.856l.939-2.818-1.861-2.047A.714.714 0 0 1 5.714 12h2.529l1.1-2.567A.71.71 0 0 1 10 9"
      />
      <path
        fill="currentColor"
        d="M5.25 2A.75.75 0 0 1 6 1.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V6.75H6A.75.75 0 0 1 5.25 6z"
      />
    </svg>
  );
};
export default StackStar;
