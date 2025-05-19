import React from "react";
const GymnasticRings: React.FC<
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
        d="M17.5 2a1 1 0 1 0-2 0v8.076A6.502 6.502 0 0 0 16.5 23a6.5 6.5 0 0 0 1-12.924zm-1 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M7.513 8A4.507 4.507 0 0 0 3 12.5c0 2.64 2.403 4.769 5.028 4.472a1 1 0 1 1 .225 1.988C4.453 19.389 1 16.347 1 12.5c0-3.247 2.386-5.936 5.5-6.422V2a1 1 0 0 1 2 0v4.074a6.52 6.52 0 0 1 4.313 2.646 1 1 0 0 1-1.626 1.166A4.51 4.51 0 0 0 7.513 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GymnasticRings;
