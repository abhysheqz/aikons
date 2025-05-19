import React from "react";
const MapsCircle_02: React.FC<
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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11c-2.56 0-4.915-.874-6.784-2.34a.293.293 0 0 1-.023-.439l4.832-4.833a.3.3 0 0 1 .424 0l4.948 4.949A9.003 9.003 0 0 0 12 3a9 9 0 0 0-8.337 5.603l4.949 4.948a.3.3 0 0 1 0 .424l-4.833 4.832a.293.293 0 0 1-.439-.023A10.95 10.95 0 0 1 1 12"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.695 5.25c-2.374 0-4.25 1.991-4.25 4.386 0 1.31.577 2.28 1.244 3.074.308.366.649.71.966 1.03l.061.063c.343.345.656.666.928 1.002.526.652 1.564.676 2.11.02.277-.33.589-.648.927-.994l.017-.017a17 17 0 0 0 1.024-1.112c.659-.803 1.223-1.78 1.223-3.066 0-2.395-1.876-4.386-4.25-4.386m0 2.75a1.5 1.5 0 0 0 0 3h.01a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsCircle_02;
