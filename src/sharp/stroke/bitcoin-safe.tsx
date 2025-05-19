import React from "react";
const BitcoinSafe: React.FC<
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
        strokeWidth={1.5}
        d="M22 2H2v18h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 15.5 6 14V8l1.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 22v-2M6 22v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.938 13.667V8.333m1.562 0V7m0 8v-1.333M12.938 11h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H12M16.063 11c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H12"
      />
    </svg>
  );
};
export default BitcoinSafe;
