import React from "react";
const Plant_04: React.FC<
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
        d="M17.85 5.195c-3.77 0-6.825 3.047-6.825 6.806v8.749h1.95v-6.805h1.95c3.77 0 6.825-3.047 6.825-6.805V5.195zM11.963 6.488A6.83 6.83 0 0 0 6.15 3.25h-3.9v1.944C2.25 8.953 5.305 12 9.075 12h.7c0-2.134.831-4.072 2.188-5.512"
      />
    </svg>
  );
};
export default Plant_04;
