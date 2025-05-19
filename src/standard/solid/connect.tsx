import React from "react";
const Connect: React.FC<
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
        d="M5.052 10.5a2 2 0 0 1 2.829 0l5.619 5.62a2 2 0 0 1 0 2.828l-1.303 1.302a5.975 5.975 0 0 1-7.681.648l-1.809 1.81a1 1 0 0 1-1.414-1.415L3.1 19.484a5.975 5.975 0 0 1 .649-7.682zM22.707 1.293a1 1 0 0 1 0 1.414L20.9 4.516a5.975 5.975 0 0 1-.649 7.682L18.948 13.5a2 2 0 0 1-2.829 0l-.102-.103-.81.81a1 1 0 0 1-1.414-1.414l.81-.81-2.586-2.586-.81.81a1 1 0 0 1-1.414-1.414l.81-.81-.103-.102a2 2 0 0 1 0-2.829l1.303-1.302a5.975 5.975 0 0 1 7.681-.649l1.809-1.808a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Connect;
