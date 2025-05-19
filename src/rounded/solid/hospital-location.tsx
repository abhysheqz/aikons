import React from "react";
const HospitalLocation: React.FC<
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
        d="M12 1.25c-5.072 0-9.25 3.918-9.25 8.83 0 2.813 1.193 4.996 3.457 6.885 1.436 1.198 3.202 3.215 4.253 4.838.34.524.858.947 1.526.947.66 0 1.184-.414 1.54-.927 1.124-1.619 2.84-3.668 4.267-4.858 2.264-1.889 3.457-4.072 3.457-6.884 0-4.913-4.178-8.831-9.25-8.831M11 7a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HospitalLocation;
