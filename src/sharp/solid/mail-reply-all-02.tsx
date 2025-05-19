import React from "react";
const MailReplyAll_02: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 .75.75v15.499a6.26 6.26 0 0 0-3.227-2.244l-2.98-2.98-2 2-2-2-4.975 4.975 2.5 2.5H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.401l6.416-4.277-.832-1.248L12 9.599z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.543 14.043 1.414 1.414-.793.793h.586a5 5 0 0 1 5 5v1.5h-2v-1.5a3 3 0 0 0-3-3h-.586l.793.793-1.414 1.414-3.207-3.207z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.543 14.043 1.414 1.414-1.793 1.793 1.793 1.793-1.414 1.414-3.207-3.207z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailReplyAll_02;
