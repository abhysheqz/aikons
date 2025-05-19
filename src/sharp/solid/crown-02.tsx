import React from "react";
const Crown_02: React.FC<
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
        d="M4.5 19.25h15v2h-15z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.257 9.197 12 2.75 8.743 9.197a1.5 1.5 0 1 1-2.062.588L1.25 6.56l3.544 11.69h14.412L22.75 6.56l-5.431 3.225a1.5 1.5 0 1 1-2.062-.588"
      />
    </svg>
  );
};
export default Crown_02;
