import React from "react";
const MailReply_02: React.FC<
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
        d="M22 12.5v-10H2v17h11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6 7 6 4 6-4M21.972 21.5c0-.436.304-2.872-1.1-4.291-1.541-1.559-4.06-1.153-5.346-1.152m1.974-2.514-2.497 2.473 2.497 2.51"
      />
    </svg>
  );
};
export default MailReply_02;
