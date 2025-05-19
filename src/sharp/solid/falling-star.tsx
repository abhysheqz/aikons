import React from "react";
const FallingStar: React.FC<
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
        d="M8.25 9a.75.75 0 0 1 .67.415l1.893 3.785h3.437a.75.75 0 0 1 .555 1.254L12.1 17.43l1.361 4.084a.75.75 0 0 1-1.064.899L8.25 20.2l-4.147 2.212a.75.75 0 0 1-1.064-.9l1.36-4.083-2.704-2.975A.75.75 0 0 1 2.25 13.2h3.436L7.58 9.415A.75.75 0 0 1 8.25 9"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.086 6.5 5-5L16.5 2.914l-5 5zm3 3 8-8L22.5 2.914l-8 8zm3 3 3-3 1.414 1.414-3 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FallingStar;
