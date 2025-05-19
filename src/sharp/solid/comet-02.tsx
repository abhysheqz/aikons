import React from "react";
const Comet_02: React.FC<
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
        d="M18.055 10.055a2.75 2.75 0 1 1 3.89 3.89 2.75 2.75 0 0 1-3.89-3.89M6.705 10.31a.75.75 0 0 1 .864.202l2.529 2.95 1.933-1.548a.75.75 0 0 1 1.125.222l2.5 4.5a.75.75 0 0 1 .04.643l-1 2.5a.75.75 0 0 1-.427.42l-6.5 2.5a.75.75 0 0 1-.71-.093l-5.5-4a.75.75 0 0 1-.283-.803l1.5-5.5a.75.75 0 0 1 .429-.493z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.665 2.664-1.5 1.5L12.75 2.75l1.5-1.5zM13.25 9.251l8-8 1.414 1.414-8 8zm-.585-3.587-3 3L8.25 7.25l3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Comet_02;
