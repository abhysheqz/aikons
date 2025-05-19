import React from "react";
const Crop: React.FC<
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
        d="M4 5V2h2v3zm0 14V8h2v10h10v2H5a1 1 0 0 1-1-1m18 1h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 4h17a1 1 0 0 1 1 1v17h-2V6H2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crop;
