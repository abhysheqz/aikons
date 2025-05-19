import React from "react";
const Ticket_03: React.FC<
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
        d="M1.248 3.5a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-20a.75.75 0 0 1-.75-.75v-6.75H2.47a1.75 1.75 0 0 0 0-3.5H1.248zm16.75 7.5h-5v2h5zm-9 4h9v2h-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ticket_03;
