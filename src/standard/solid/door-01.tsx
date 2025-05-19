import React from "react";
const Door_01: React.FC<
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
        d="M15 3.316a2 2 0 0 0-2.535-1.927l-7 1.944A2 2 0 0 0 4 5.26v13.48a2 2 0 0 0 1.465 1.927l7 1.944A2 2 0 0 0 15 20.684zM11.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 4a1 1 0 0 1 1-1h4a2 2 0 0 1 2 2v14h2a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1zm5 15V5h-3v14zM1 20a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Door_01;
