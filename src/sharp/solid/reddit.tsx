import React from "react";
const Reddit: React.FC<
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
        d="M12 3.25a.75.75 0 0 0-.75.75v5h1.5V4.75h3.604a2.751 2.751 0 1 0 0-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.522 9.494A2.9 2.9 0 0 0 4.14 8.25c-1.59 0-2.89 1.278-2.89 2.87 0 1.028.543 1.925 1.353 2.43a5.6 5.6 0 0 0-.353 1.95c0 2.096 1.178 3.927 2.947 5.204C6.967 21.983 9.375 22.75 12 22.75s5.033-.767 6.803-2.046c1.77-1.277 2.947-3.108 2.947-5.204a5.6 5.6 0 0 0-.353-1.95 2.86 2.86 0 0 0 1.353-2.43c0-1.592-1.3-2.87-2.89-2.87-.988 0-1.861.492-2.382 1.244-1.57-.79-3.46-1.244-5.478-1.244s-3.908.453-5.478 1.244M12 17.25a4.92 4.92 0 0 1-3.039-1.061l-.922 1.183A6.42 6.42 0 0 0 12 18.75a6.42 6.42 0 0 0 3.961-1.378l-.922-1.183A4.92 4.92 0 0 1 12 17.249M10.008 13a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1m5 1a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Reddit;
