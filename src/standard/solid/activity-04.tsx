import React from "react";
const Activity_04: React.FC<
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
        d="M22.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.877 2H4.75A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75V7.623A4 4 0 0 1 16.877 2M10.25 7.25a1 1 0 0 1 .894.553l3.106 6.21 1.106-2.21a1 1 0 0 1 .894-.553h2a1 1 0 1 1 0 2h-1.382l-1.724 3.447a1 1 0 0 1-1.788 0l-3.106-6.21-1.106 2.21a1 1 0 0 1-.894.553h-2a1 1 0 1 1 0-2h1.382l1.724-3.447a1 1 0 0 1 .894-.553"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_04;
