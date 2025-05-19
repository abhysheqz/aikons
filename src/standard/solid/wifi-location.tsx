import React from "react";
const WifiLocation: React.FC<
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
        d="M12 1.25c-5.275 0-9.75 4.36-9.75 9.676 0 2.765 1.424 5.112 3.257 7.028 1.835 1.917 4.152 3.479 6.098 4.684a.75.75 0 0 0 .787.002c1.953-1.195 4.27-2.762 6.104-4.685 1.832-1.92 3.254-4.272 3.254-7.03 0-5.315-4.474-9.675-9.75-9.675M11.995 7c-1.73 0-3.32.64-4.626 1.702a1 1 0 1 0 1.262 1.552C9.623 9.447 10.777 9 11.995 9c1.222 0 2.379.45 3.373 1.261a1 1 0 1 0 1.265-1.549C15.324 7.644 13.729 7 11.995 7m0 3.36c-.98 0-1.898.288-2.697.784a1 1 0 1 0 1.054 1.7 3.1 3.1 0 0 1 1.643-.483c.581 0 1.14.17 1.65.487a1 1 0 1 0 1.058-1.697 5.1 5.1 0 0 0-2.708-.79M11 15a1 1 0 0 1 1-1h.006a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiLocation;
