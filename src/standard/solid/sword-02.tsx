import React from "react";
const Sword_02: React.FC<
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
        d="M22.03 1.97a.75.75 0 0 1 .198.712l-1 4a.75.75 0 0 1-.224.373l-10.547 9.588.664.664A3 3 0 0 1 12 19.428V20a1 1 0 1 1-2 0v-.572a1 1 0 0 0-.293-.707L8.2 17.214l-2.067 2.068a2.25 2.25 0 1 1-1.414-1.415L6.786 15.8l-1.507-1.507A1 1 0 0 0 4.572 14H4a1 1 0 1 1 0-2h.572a3 3 0 0 1 2.12.879l.665.664 9.588-10.547a.75.75 0 0 1 .373-.224l4-1a.75.75 0 0 1 .712.198M3.47 20.53a.75.75 0 1 1 1.06-1.06.75.75 0 0 1-1.06 1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sword_02;
