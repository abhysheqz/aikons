import React from "react";
const Honey_02: React.FC<
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
        d="M9.75 7.75v-6h1.5v6zM7.75 4V2.95h1.5v3.6h-1.5V5.5H6.5V4zm4 2.55v-3.6h1.5V4h7v1.5h-7v1.05zM16.5 10.25h-12v-1.5h12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.25 13.24 2.36-3.304-1.22-.872-2.5 3.5a.75.75 0 0 0-.14.436v8.5c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V13a.75.75 0 0 0-.14-.436l-2.5-3.5-1.22.872 2.36 3.304v.51h-6.5v4.75h-1.5v-4.75h-2.5z"
      />
    </svg>
  );
};
export default Honey_02;
