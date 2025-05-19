import React from "react";
const Move_02: React.FC<
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
        d="m17.939 1 2.03 2.03-1.06 1.061-.22-.22v1.44h1.439l-.22-.22 1.06-1.06L23 6.06l-2.03 2.03-1.06-1.06.219-.22h-1.44V8.25l.22-.22 1.06 1.061-2.03 2.03-2.03-2.03 1.06-1.06.22.219V6.81H15.75l.22.22-1.06 1.061-2.031-2.03 2.03-2.03 1.06 1.06-.219.22h1.44V3.87l-.22.22-1.06-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.005 6a2.5 2.5 0 1 1 5 0v4.977h3.745a3.75 3.75 0 0 1 3.75 3.75v4.523A3.75 3.75 0 0 1 14.75 23h-8a.75.75 0 0 1-.624-.334l-4.593-6.885a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
      />
    </svg>
  );
};
export default Move_02;
