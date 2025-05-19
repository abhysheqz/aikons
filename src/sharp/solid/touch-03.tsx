import React from "react";
const Touch_03: React.FC<
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
        d="M8.255 4.25a2.5 2.5 0 1 1 5 0v4.978H17a3.75 3.75 0 0 1 3.75 3.75V18.5A3.75 3.75 0 0 1 17 22.25H9a.75.75 0 0 1-.624-.334l-4.593-6.885a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
      />
    </svg>
  );
};
export default Touch_03;
