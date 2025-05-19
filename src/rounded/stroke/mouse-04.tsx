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
        strokeWidth={1.5}
        d="M5.225 17.826c.177 2.032 1.944 3.758 4.222 4.014.838.094 1.69.16 2.553.16s1.715-.066 2.553-.16c2.278-.256 4.045-1.982 4.222-4.014.123-1.41.225-2.854.225-4.326s-.102-2.917-.225-4.325c-.177-2.033-1.944-3.76-4.222-4.015C13.715 5.066 12.863 5 12 5s-1.715.066-2.553.16c-2.278.256-4.045 1.982-4.222 4.015C5.102 10.583 5 12.028 5 13.5s.102 2.917.225 4.326Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v6m0 4v2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C11.301 8 11.534 8 12 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 12 12.466 12 12 12s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z"
      />
    </svg>
  );
};
export default Mouse_04;
