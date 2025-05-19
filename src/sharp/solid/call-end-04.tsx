import React from "react";
const CallEnd_04: React.FC<
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
        d="M19.875 12.5 22.5 8.07c-6.3-6.093-14.7-6.093-21 0l2.625 4.43L7.8 10.838l.525-3.323c2.1-1.107 5.25-1.107 7.35 0l.525 3.324z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 10.586v6.086l1.5-1.5 1.414 1.414L12 20.5l-3.914-3.914L9.5 15.172l1.5 1.5v-6.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallEnd_04;
