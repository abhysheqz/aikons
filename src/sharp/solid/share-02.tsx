import React from "react";
const Share_02: React.FC<
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
        d="M9.325 5.446C6.206 6.518 4 9.397 4 12.752c0 1.066.222 2.08.623 3.003l-1.834.797a9.5 9.5 0 0 1-.789-3.8c0-4.265 2.803-7.867 6.675-9.197zM20 12.752c0-3.355-2.206-6.234-5.325-7.306l.65-1.891C19.198 4.885 22 8.487 22 12.75c0 1.127-.205 2.4-.58 3.432l-1.88-.683c.288-.792.46-1.83.46-2.748M7.99 19.458A8.16 8.16 0 0 0 12 20.5c1.464 0 2.833-.38 4.01-1.042l.98 1.744A10.16 10.16 0 0 1 12 22.5c-1.814 0-3.52-.471-4.99-1.298z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
    </svg>
  );
};
export default Share_02;
