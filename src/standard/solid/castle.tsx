import React from "react";
const Castle: React.FC<
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
        d="M9 2a1 1 0 1 0-2 0v1.322A1.75 1.75 0 0 0 5.748 5v1.5c0 .756.48 1.4 1.152 1.645l-.436 3.105h-2.11a1.75 1.75 0 0 0-1.731 1.49L1.251 21.89a.75.75 0 0 0 .741.861H22a.75.75 0 0 0 .741-.861L21.37 12.74a1.75 1.75 0 0 0-1.73-1.49h-2.103L17.1 8.142A1.75 1.75 0 0 0 18.243 6.5V5A1.75 1.75 0 0 0 17 3.325V2a1 1 0 1 0-2 0v1.25h-2V2a1 1 0 1 0-2 0v1.25H9zm6.095 6.25h-6.19L7.15 20.75h1.718l.293-2.924a1.75 1.75 0 0 1 1.741-1.576h2.188c.9 0 1.652.681 1.742 1.576l.292 2.924h1.726z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Castle;
