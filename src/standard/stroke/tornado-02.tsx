import React from "react";
const Tornado_02: React.FC<
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
        d="M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0 1.48 3.89-15.029 6.222-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11c-2.577 2.079-9.423 2.913-12 .651M14 21.5c-.971.306-2 .482-3 .5M7 15c2.077 1.371 5.384 1.235 8 .18M8 18.504c1.466.589 3.274.631 5 .264"
      />
    </svg>
  );
};
export default Tornado_02;
