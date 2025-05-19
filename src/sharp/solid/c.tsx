import React from "react";
const C: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7 6H5.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H9a.75.75 0 0 0 .75-.75v-1.5h-1.5v.75h-2v-4.5h2v.75h1.5V9A.75.75 0 0 0 9 8.25m2.75 3V10h1.5v1.25h1.25v1.5h-1.25V14h-1.5v-1.25H10.5v-1.5zm5-1.25v1.25H15.5v1.5h1.25V14h1.5v-1.25h1.25v-1.5h-1.25V10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default C;
