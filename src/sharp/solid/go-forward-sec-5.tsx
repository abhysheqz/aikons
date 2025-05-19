import React from "react";
const GoForwardSec_5: React.FC<
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
        d="M12.194 3.207 12 3.205a8.795 8.795 0 1 0 5.277 1.758L18.45 3.4A10.74 10.74 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c.735 0 1.454.074 2.149.215a.977.977 0 0 1 .6 1.526l-1.954 2.736-1.59-1.136z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.511 8.859a1 1 0 0 1 .99-.859h3.877v2h-3.01l-.173 1.215c.282-.044.577-.072.877-.072a2.929 2.929 0 0 1 0 5.857h-.075c-.37.001-.954.003-1.477-.168a2.2 2.2 0 0 1-.905-.55 2.2 2.2 0 0 1-.557-1.06l1.95-.443a.4.4 0 0 0 .042.11q-.001 0 .016.011a.4.4 0 0 0 .072.03c.08.027.197.048.366.06.164.01.334.01.538.01h.03a.929.929 0 0 0 0-1.857c-.482 0-.925.108-1.517.252l-.322.078a1 1 0 0 1-1.222-1.114z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoForwardSec_5;
