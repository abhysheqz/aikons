import React from "react";
const MicrosoftAdmin: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.002 2.5v19M20.5 12h-17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11.009v-6c-5-.5-9-3-9-3s-4 2.5-9 3v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
    </svg>
  );
};
export default MicrosoftAdmin;
