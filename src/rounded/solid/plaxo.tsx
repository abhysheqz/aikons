import React from "react";
const Plaxo: React.FC<
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
        d="M8.25 12a3.75 3.75 0 1 1 2.999 3.675 1.25 1.25 0 1 0-.498 2.45q.609.124 1.249.125A6.25 6.25 0 1 0 5.75 12v8.747A10.74 10.74 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75a10.7 10.7 0 0 1-3.752-.673L8.25 22z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plaxo;
