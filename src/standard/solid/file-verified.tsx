import React from "react";
const FileVerified: React.FC<
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
        d="M20.39 14.982a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2-2a1 1 0 1 1 1.414-1.414l1.226 1.226 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.274 19.823a2.924 2.924 0 0 0 2.917 2.927h6.377l-1.409-1.409a2.25 2.25 0 1 1 3.182-3.182l.258.258 3.422-4.107a2.25 2.25 0 0 1 2.729-.576V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H6.168A2.924 2.924 0 0 0 3.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileVerified;
