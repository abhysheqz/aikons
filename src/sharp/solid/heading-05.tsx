import React from "react";
const Heading_05: React.FC<
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
        d="M2 19V5h2v14zM12 19V5h2v14zM16 9h5v2h-3v1h.5a3.5 3.5 0 0 1 3.5 3.5v.5a3 3 0 1 1-6 0v-.5h2v.5a1 1 0 1 0 2 0v-.5a1.5 1.5 0 0 0-1.5-1.5H16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13H3v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_05;
