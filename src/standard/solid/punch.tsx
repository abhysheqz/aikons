import React from "react";
const Punch: React.FC<
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
        d="M10.432 11a.45.45 0 0 0-.9 0v5.072a1.579 1.579 0 1 1-3.158 0V11a.45.45 0 0 0-.9 0v3.702a1.612 1.612 0 1 1-3.224 0V8A4.75 4.75 0 0 1 7 3.25h10A4.75 4.75 0 0 1 21.75 8v5.157c0 1.405 0 2.253-.18 2.973a6.12 6.12 0 0 1-4.5 4.45c-.504.123-1.294.157-2.133.17h-1.149v-1.173c0-.856.694-1.55 1.55-1.55h.6c1.238 0 2.25-.993 2.25-2.229v-4.347a.45.45 0 0 0-.9 0v4.347c0 .729-.599 1.329-1.35 1.329-.75 0-1.35-.6-1.35-1.329v-4.797a.45.45 0 0 0-.9 0v5.81a1.628 1.628 0 1 1-3.256 0z"
      />
    </svg>
  );
};
export default Punch;
