import React from "react";
const SafetyPin_02: React.FC<
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
        d="M12.976 3.307c2.014-2.566 5.83-2.755 8.152-.433 2.33 2.33 2.131 6.164-.46 8.173l-.015.011-2.793 1.957-2.453-3.012 1.513-1.39.024-.018c.542-.423.582-1.204.124-1.662s-1.239-.417-1.662.124l-.025.034-1.567 1.6-3.131-2.911z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 17.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M1.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.714 5.23-4 12.41-1.428-.46 4-12.41zm10.279 6.835-10.91 9.5-.986-1.13 10.91-9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SafetyPin_02;
