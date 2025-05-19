import React from "react";
const Hologram: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 19-1.667-4m-6.666 0L7 19m5-2.667V19M12 7v5.587M12 7 7.377 4.688M12 7l4.623-2.312M7 4.5 12 2l5 2.5v6L12 13l-5-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 22h18"
      />
    </svg>
  );
};
export default Hologram;
