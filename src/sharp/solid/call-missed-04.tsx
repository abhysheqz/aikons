import React from "react";
const CallMissed_04: React.FC<
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
        d="m19.875 21 2.625-4.43c-6.3-6.093-14.7-6.093-21 0L4.125 21 7.8 19.338l.525-3.323c2.1-1.107 5.25-1.107 7.35 0l.525 3.323z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 4.414 12 10 8 6.414V8.75H6V3h5.75v2H9.414L12 7.172 16.586 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallMissed_04;
