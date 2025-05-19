import React from "react";
const RainDoubleDrop: React.FC<
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
        d="M15 13.2c0 3.756-2.91 6.8-6.5 6.8S2 16.956 2 13.2c0-4.308 4.46-7.792 5.991-8.86a.88.88 0 0 1 1.018 0C10.539 5.407 15 8.891 15 13.2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 5.08c.389-.31.73-.558.988-.739a.88.88 0 0 1 1.02-.002C17.54 5.41 22 8.892 22 13.2c0 3.756-2.91 6.8-6.5 6.8q-.252 0-.5-.02"
      />
    </svg>
  );
};
export default RainDoubleDrop;
