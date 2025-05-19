import React from "react";
const MailLove_02: React.FC<
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
        d="M22 11V2.5H2v17h8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 7 6 4 6-4" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.743 14.79c-1.597-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394c-1.934 1.008-2.073 4.957 2.743 6.71 4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default MailLove_02;
