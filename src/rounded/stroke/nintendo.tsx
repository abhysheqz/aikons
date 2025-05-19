import React from "react";
const Nintendo: React.FC<
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
        d="M16 19.5H8c-2.828 0-4.243 0-5.121-.941C2 17.617 2 16.102 2 13.07V10.93c0-3.03 0-4.546.879-5.488C3.757 4.5 5.172 4.5 8 4.5h8c2.828 0 4.243 0 5.121.941C22 6.383 22 7.898 22 10.93v2.142c0 3.03 0 4.546-.879 5.488-.878.941-2.293.941-5.121.941"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 4.5v15M7 4.5v15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 15.5h-.009M4.508 8.5h-.009"
      />
    </svg>
  );
};
export default Nintendo;
