import React from "react";
const Dropper: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.759 5.697 2.756-2.756a3.213 3.213 0 0 1 4.544 4.542l-2.757 2.756M13.76 5.697l4.543 4.542M13.76 5.697 12.5 4.5m5.802 5.74L19.5 11.5M11.5 7.5l-6.921 6.914a2 2 0 0 0-.587 1.415v2.185a1 1 0 0 1-.291.706l-1.294 1.299c-.622.634-.424 1.258-.076 1.635.243.263.888.642 1.622-.03l1.33-1.33a1 1 0 0 1 .706-.293h2.188a2 2 0 0 0 1.418-.588l1.87-1.879m0 0 3.117-3.11m-3.118 3.11L10 16.068m6.5-3.568-1.918 1.924m0 0-1.47-1.469"
      />
    </svg>
  );
};
export default Dropper;
