import React from "react";
const Skew: React.FC<
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
        d="M6.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.798 7.383-6.168-1.85.575-1.916 6.167 1.85zM9.27 6.221 5.616 16.453l-1.884-.673L7.387 5.548zm9.58 11.862-.692-9.012 1.994-.153.693 9.011zm-12.74-.827 12.03 1.504-.248 1.984-12.03-1.503z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Skew;
