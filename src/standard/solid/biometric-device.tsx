import React from "react";
const BiometricDevice: React.FC<
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
        d="M7 1.25A2.75 2.75 0 0 0 4.25 4v16A2.75 2.75 0 0 0 7 22.75h10A2.75 2.75 0 0 0 19.75 20V4A2.75 2.75 0 0 0 17 1.25zm5 4.5a4.75 4.75 0 0 0-4.75 4.75V13a.75.75 0 0 0 1.5 0v-2.5a3.25 3.25 0 0 1 6.5 0V13a.75.75 0 0 0 1.5 0v-2.5A4.75 4.75 0 0 0 12 5.75M9.75 10.5a2.25 2.25 0 0 1 4.5 0v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-1.5 0V14a.75.75 0 0 1-1.5 0zm3.75 2.25a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75M13 20a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiometricDevice;
