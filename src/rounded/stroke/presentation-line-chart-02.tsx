import React from "react";
const PresentationLineChart_02: React.FC<
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
        strokeWidth={1.5}
        d="M2.5 8c0-2.828 0-4.243.879-5.121C4.257 2 5.672 2 8.5 2h7c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v3c0 2.828 0 4.243-.879 5.121C19.743 17 18.328 17 15.5 17h-7c-2.828 0-4.243 0-5.121-.879C2.5 15.243 2.5 13.828 2.5 11z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 9.725.697-.915c.878-1.153 2.432-1.062 3.209.19.75 1.21 2.237 1.344 3.134.283L16 8.15M8.5 22l.328-.328c.578-.578.867-.867 1.235-1.02.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152.367.152.656.441 1.234 1.02L15.5 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17.5V22"
      />
    </svg>
  );
};
export default PresentationLineChart_02;
