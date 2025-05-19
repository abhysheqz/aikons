import React from "react";
const Restaurant_03: React.FC<
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
        d="M8.363 18.234 4.128 22.47l-1.356-1.356 4.234-4.235zM16.036 10.562l-2.316 2.315-1.356-1.356 2.316-2.316z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.913 3.847-4.796 4.796 2.48 2.48 4.796-4.796 1.357 1.357-6.152 6.152-5.194-5.193 6.153-6.153z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.832 5.765-4.234 4.234-1.357-1.357 4.235-4.234z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.832 21.112-1.357 1.357-7.674-7.674-2.877 2.878L5.6 14.35A14.85 14.85 0 0 1 1.25 3.846V1.531z"
      />
    </svg>
  );
};
export default Restaurant_03;
