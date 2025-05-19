import React from "react";
const WindPower_03: React.FC<
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
        d="M12 9.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 10.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 8.918V2a.75.75 0 0 0-.75-.75c-2.053 0-3.75 1.628-3.75 3.676v3.992c-.21.3-.363.643-.441 1.013l-5.7 3.48a.75.75 0 0 0-.258 1.017 3.66 3.66 0 0 0 5.015 1.32L12 13.471l3.634 2.275.024.014a3.66 3.66 0 0 0 4.991-1.333.75.75 0 0 0-.258-1.016l-5.7-3.48a2.7 2.7 0 0 0-.441-1.014M12 9.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.746 16.654-.493 5.276a.75.75 0 0 0 .747.82h4a.75.75 0 0 0 .747-.815l-.462-5.263L12 15.242z"
      />
    </svg>
  );
};
export default WindPower_03;
