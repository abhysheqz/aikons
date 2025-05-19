import React from "react";
const Caduceus: React.FC<
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
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 5v10M16 5c-.893 2.115-3.067 5.334-4 5.738 4.5 5.016 9.166.435 10-1.734-.883 0-4.291-1.91-6-4.004M8 5c.893 2.115 3.067 5.334 4 5.738-4.5 5.016-9.166.435-10-1.734.883 0 4.292-1.91 6-4.004M9 21c.412.583 1.694 1 3 1 1.657 0 3-.672 3-1.5S13.657 19 12 19c-1.933 0-3.5-.895-3.5-2s1.567-2 3.5-2c1.296 0 2.747.402 3.5 1"
      />
    </svg>
  );
};
export default Caduceus;
