import React from "react";
const MouseRightClick_05: React.FC<
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
      <path fill="currentColor" d="M21.25 4.25a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.027 8.683A22.4 22.4 0 0 1 19.25 12c0 2.734-.364 5.404-1.602 7.413-1.292 2.098-3.447 3.337-6.648 3.337s-5.356-1.239-6.648-3.337C3.114 17.405 2.75 14.734 2.75 12s.364-5.404 1.602-7.413C5.644 2.489 7.799 1.25 11 1.25c1.32 0 2.462.21 3.44.605a4.5 4.5 0 0 0-.656 1.841A6.3 6.3 0 0 0 12 3.256V5h.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.5V11h5.29a18 18 0 0 0-.246-2.413 4.5 4.5 0 0 0 1.982.096M6.002 5.617C5.18 6.954 4.796 8.807 4.711 11H10V9.5h-.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.5V3.256c-2.012.217-3.227 1.109-3.999 2.36"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_05;
