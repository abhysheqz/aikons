import React from "react";
const InboxUpload: React.FC<
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
        d="M13 10.12a1 1 0 1 1-2 0V5.829H9.207c-.265 0-.543-.097-.64-.345a1 1 0 0 1 .226-1.07l2.5-2.5a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 .225 1.07c-.096.248-.374.345-.64.345H13zM4.742 3.864a1 1 0 0 0-1 1v7.508H8.5a.75.75 0 0 1 .75.75v.5a2.75 2.75 0 1 0 5.5 0v-.5a.75.75 0 0 1 .75-.75h4.758V4.863a1 1 0 0 0-1-1h-2.872a1 1 0 1 1 0-2h2.872a3 3 0 0 1 3 3v14.516a3 3 0 0 1-3 3H4.742a3 3 0 0 1-3-3V4.863a3 3 0 0 1 3-3h2.872a1 1 0 0 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InboxUpload;
