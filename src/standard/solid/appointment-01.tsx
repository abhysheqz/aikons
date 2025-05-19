import React from "react";
const Appointment_01: React.FC<
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
        d="M7.613 1.25c.538 0 .974.438.974.977v.978h6.826v-.978a.976.976 0 1 1 1.95 0v.978h1.462a2.93 2.93 0 0 1 2.925 2.931v5.889a.975.975 0 1 1-1.95 0V9.75H4.2v10.068c0 .54.436.977.975.977h4.348a.977.977 0 1 1 0 1.955H5.175a2.93 2.93 0 0 1-2.925-2.932V6.136c0-1.619 1.31-2.931 2.925-2.931h1.463v-.978c0-.54.436-.977.974-.977"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.426 15.013a1 1 0 0 1 .061 1.413l-5.5 6a1 1 0 0 1-1.444.031l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.762 1.761 4.794-5.23a1 1 0 0 1 1.413-.061"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Appointment_01;
