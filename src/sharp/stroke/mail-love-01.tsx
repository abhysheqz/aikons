import React from "react";
const MailLove_01: React.FC<
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
        d="M22 11.5V3H2v17h9"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 6.5 10 5 10-5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.743 14.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C13.323 15.298 13.184 19.247 18 21c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default MailLove_01;
