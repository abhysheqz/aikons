import React from "react";
const LockSync_02: React.FC<
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
        d="M12 6.25c-1.638 0-3 1.298-3 2.94v1.458a4.1 4.1 0 0 0-1.25 2.944c0 2.315 1.922 4.158 4.25 4.158s4.25-1.843 4.25-4.158c0-1.156-.48-2.194-1.25-2.944V9.19c0-1.643-1.362-2.941-3-2.941m1.5 3.452v-.511c0-.777-.652-1.441-1.5-1.441s-1.5.664-1.5 1.44v.512a4.3 4.3 0 0 1 1.5-.267c.527 0 1.033.094 1.5.267"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.024 3.205c-4.873 0-8.82 3.94-8.82 8.795s3.947 8.796 8.82 8.796a8.82 8.82 0 0 0 8.087-5.279.977.977 0 0 1 1.79.784 10.78 10.78 0 0 1-9.877 6.449C6.076 22.75 1.25 17.94 1.25 12S6.076 1.25 12.024 1.25c4.715 0 8.722 3.022 10.183 7.23.27.78.454 1.598.538 2.446a.978.978 0 0 1-1.167 1.054l-2.401-.488a.977.977 0 0 1-.462-1.682l1.097-.994c.156-.14.233-.211.252-.31.019-.098-.025-.188-.113-.368a8.82 8.82 0 0 0-7.927-4.933"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockSync_02;
