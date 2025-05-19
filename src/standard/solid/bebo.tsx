import React from "react";
const Bebo: React.FC<
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
        d="M4.05 1.25h3.9a.8.8 0 0 1 .8.8V14A3.25 3.25 0 1 0 12 10.75a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75c4.83 0 8.75 3.9 8.75 8.747A8.745 8.745 0 0 1 12 22.75a8.745 8.745 0 0 1-8.75-8.753V2.05a.8.8 0 0 1 .8-.8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bebo;
