import React from "react";
const GoBackwardSec_5: React.FC<
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
        d="M11.806 3.206 12 3.204a8.795 8.795 0 1 1-5.277 1.758L5.55 3.4A10.74 10.74 0 0 0 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25c-.735 0-1.454.074-2.149.215a.977.977 0 0 0-.6 1.526l1.954 2.736 1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.51 8.859A1 1 0 0 1 10.5 8h3.877v2h-3.01l-.173 1.215a6 6 0 0 1 .877-.072 2.929 2.929 0 1 1 0 5.857h-.075c-.37.001-.954.003-1.477-.168a2.2 2.2 0 0 1-.905-.55 2.2 2.2 0 0 1-.557-1.06l1.95-.443a.4.4 0 0 0 .042.11q-.001 0 .016.011a.4.4 0 0 0 .072.03c.08.027.197.048.366.06.163.01.334.01.538.01h.03a.929.929 0 1 0 0-1.857c-.482 0-.926.108-1.517.252l-.322.078a1 1 0 0 1-1.222-1.114z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoBackwardSec_5;
