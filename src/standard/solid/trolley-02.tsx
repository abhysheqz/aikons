import React from "react";
const Trolley_02: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .987.84l2.229 13.82a1 1 0 0 0 .987.84H21a1 1 0 1 1 0 2H9.703a3 3 0 0 1-2.961-2.522L4.648 4H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 22.994a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M18.25 22.994a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.25A1.75 1.75 0 0 0 10.25 6v8c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 21.75 14V6A1.75 1.75 0 0 0 20 4.25zm3 3.5h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trolley_02;
