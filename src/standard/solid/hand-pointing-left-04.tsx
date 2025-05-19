import React from "react";
const HandPointingLeft_04: React.FC<
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
        d="M14.589 2.906c.74 0 1.464.22 2.08.63l3.908 2.606a3.75 3.75 0 0 1 1.67 3.12v7.394a3.75 3.75 0 0 1-3.75 3.75h-6a2.25 2.25 0 0 1-2.25-2.25v-.332h2.75a.45.45 0 0 0 0-.9h-2.892a2.25 2.25 0 0 1-.858-1.768v-.772h3.105a.45.45 0 0 0 0-.9H8.68a2.24 2.24 0 0 1-.434-1.328s-.015-.457 0-.75c.01-.19.043-.485.043-.485h3.128a.45.45 0 0 0 0-.9H3.031a1.281 1.281 0 0 1 0-2.563h10.966a.45.45 0 0 0 0-.9H9.035l2.553-2.553a3.75 3.75 0 0 1 2.652-1.099z"
      />
    </svg>
  );
};
export default HandPointingLeft_04;
