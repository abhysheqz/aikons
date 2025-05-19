import React from "react";
const Mouse_04: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.225 17.826c.177 2.032 1.944 3.758 4.222 4.014.838.094 1.69.16 2.553.16s1.715-.066 2.553-.16c2.278-.256 4.045-1.982 4.222-4.014.123-1.41.225-2.854.225-4.326s-.102-2.917-.225-4.325c-.177-2.033-1.944-3.76-4.222-4.015C13.715 5.066 12.863 5 12 5s-1.715.066-2.553.16c-2.278.256-4.045 1.982-4.222 4.015C5.102 10.583 5 12.028 5 13.5s.102 2.917.225 4.326ZM12 2v6m0 4v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 8h-3v4h3z"
      />
    </svg>
  );
};
export default Mouse_04;
