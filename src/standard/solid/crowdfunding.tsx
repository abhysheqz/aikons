import React from "react";
const Crowdfunding: React.FC<
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
        d="M8.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
      <circle cx={12} cy={20.5} r={2} fill="currentColor" />
      <circle cx={20} cy={20.5} r={2} fill="currentColor" />
      <circle cx={4} cy={20.5} r={2} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 14.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crowdfunding;
