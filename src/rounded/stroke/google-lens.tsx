import React from "react";
const GoogleLens: React.FC<
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
        d="M21 14v-3c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879C3 6.757 3 8.172 3 11m10 10H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3h4l1 1.5H9z"
      />
      <circle cx={12} cy={13} r={3} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={19} cy={19} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default GoogleLens;
