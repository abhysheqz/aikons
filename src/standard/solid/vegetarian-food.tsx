import React from "react";
const VegetarianFood: React.FC<
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
        d="M18.495 11.679A2.8 2.8 0 0 0 18 13.23a1 1 0 1 1-2 0c0-.886.284-1.9.869-2.717C17.47 9.674 18.432 9 19.727 9a1 1 0 1 1 0 2c-.523 0-.925.25-1.232.678"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.486 13.58c.707-.913 1.698-1.56 2.696-1.56.57 0 1.112.142 1.49.27q.187.064.328.121.142-.058.328-.121c.378-.128.92-.27 1.49-.27.998 0 1.99.647 2.696 1.56.727.94 1.236 2.255 1.236 3.805 0 3.283-2.933 5.365-5.75 5.365s-5.75-2.082-5.75-5.365c0-1.55.51-2.866 1.236-3.805"
      />
      <path
        fill="currentColor"
        d="M2.886 3.5c0 .7.333 1.303.832 1.707-1.453 2.739-2.468 5.24-2.468 8.57V20A2.75 2.75 0 0 0 4 22.75h8.237q.12 0 .237-.01c-1.588-1.176-2.724-3.002-2.724-5.355 0-1.881.619-3.52 1.55-4.724.728-.94 1.82-1.812 3.119-2.067l-.194-.73-.002-.007c-.444-1.6-1.139-3.083-1.963-4.633a2.19 2.19 0 0 0 .854-1.724c0-1.303-1.132-2.25-2.387-2.25H5.273c-1.255 0-2.387.947-2.387 2.25"
      />
    </svg>
  );
};
export default VegetarianFood;
