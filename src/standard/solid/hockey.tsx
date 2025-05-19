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
        fillRule="evenodd"
        d="M18.13 2.118c.576-.857 1.729-1.11 2.622-.62.927.51 1.286 1.666.745 2.6L12.51 19.6a6.54 6.54 0 0 1-3.185 2.757c-1.317.524-2.836.578-4.203-.174-1.255-.69-2.176-1.924-2.603-3.275-.428-1.354-.382-2.903.41-4.211.597-.984 1.886-1.712 3.209-.984.964.53 1.413 1.672 1.006 2.709-.125.316-.17.55-.153.708.007.067.024.11.046.143a.5.5 0 0 0 .178.147.6.6 0 0 0 .774-.169zm1.899.695a.505.505 0 0 0-.652.14L16.86 6.708l.968.726 2.37-4.088c.1-.174.052-.41-.17-.532M18.5 16.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hockey;
