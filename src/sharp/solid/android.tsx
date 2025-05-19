import React from "react";
const Android: React.FC<
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
        d="M19 17.25v-6h2v6zM14 22.25v-3h2v3zM8 22.25v-3h2v3zM3 17.25v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.25 19.25V11H5.75v8.25c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75M9.08 4.223A6.25 6.25 0 0 0 5.755 9.5h12.49a6.25 6.25 0 0 0-3.324-5.277L16.1 2.65l-1.2-.9-1.442 1.921a6.3 6.3 0 0 0-2.918 0L9.101 1.75l-1.2.9z"
      />
    </svg>
  );
};
export default Android;
