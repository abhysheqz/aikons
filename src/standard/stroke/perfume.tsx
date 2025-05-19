import React from "react";
const Perfume: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8.996V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.996"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11 5.995V3.999a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.996"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5.5 4l2.49-.004m3.003 0H16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.07 15.162c-.424 2.746 1.177 5.361 2.24 6.547a.9.9 0 0 0 .683.291h9.014a.9.9 0 0 0 .684-.291c1.062-1.186 2.662-3.801 2.24-6.547-.453-2.934-2.759-5.43-4.792-6.118A.9.9 0 0 0 11.853 9H7.147a.9.9 0 0 0-.286.044c-2.033.689-4.34 3.184-4.791 6.118Z"
      />
    </svg>
  );
};
export default Perfume;
