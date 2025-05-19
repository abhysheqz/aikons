import React from "react";
const Hockey: React.FC<
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
        d="M15.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.13 2.118c.576-.858 1.729-1.111 2.622-.62.927.51 1.286 1.665.745 2.599L12.51 19.6a6.54 6.54 0 0 1-3.185 2.757c-1.317.524-2.835.577-4.203-.174-1.255-.69-2.176-1.924-2.603-3.275-.428-1.354-.382-2.903.41-4.211.597-.984 1.886-1.712 3.209-.985.964.53 1.413 1.673 1.006 2.71-.125.316-.17.55-.153.708.007.067.024.11.046.143a.5.5 0 0 0 .179.147.6.6 0 0 0 .773-.17zm1.9.694a.505.505 0 0 0-.653.141l-2.515 3.754.967.726 2.37-4.088c.101-.174.053-.41-.17-.533"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hockey;
