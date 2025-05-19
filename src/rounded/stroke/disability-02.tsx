import React from "react";
const Disability_02: React.FC<
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
        d="m11.5 10-2-1L7 12M14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 19.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042 0-.875.164-1.707.5-2.458M12.65 8l-.754 1.846c-.766 1.879-1.149 2.818-.713 3.486s1.432.668 3.424.668c.694 0 1.364-.18 1.75.496L19.5 20"
      />
    </svg>
  );
};
export default Disability_02;
