import React from "react";
const GoogleDoc: React.FC<
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
        d="m14.172 1.25.078.001V6c0 .966.784 1.75 1.75 1.75h4.749l.001.078V20A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20V4A2.75 2.75 0 0 1 6 1.25zm5.773 4.634q.17.17.307.366H16a.25.25 0 0 1-.25-.25V1.748q.196.137.366.307zM8 10.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h4.17a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleDoc;
