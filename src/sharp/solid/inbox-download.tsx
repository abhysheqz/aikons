import React from "react";
const InboxDownload: React.FC<
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
        d="M2.25 3.225c0-.538.437-.975.975-.975H7V4.2H4.2V13h5.55v.75a2.25 2.25 0 1 0 4.5 0V13h5.55V4.2H17V2.25h3.775c.539 0 .975.437.975.975v17.55a.975.975 0 0 1-.975.975H3.225a.975.975 0 0 1-.975-.975z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 11.664 3.707-3.707-1.414-1.414L13 7.836V2.25h-2v5.586L9.707 6.543 8.293 7.957z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InboxDownload;
