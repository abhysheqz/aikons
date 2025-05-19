import React from "react";
const Discount: React.FC<
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
        d="m15 9-6 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.509 14.5h-.011m-4.997-5h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.94 2.023 8.99 4.463H4.583a.1.1 0 0 0-.1.1v4.422l-2.46 2.926a.1.1 0 0 0 0 .129l2.464 2.965-.027 4.42a.1.1 0 0 0 .1.101h4.444l2.96 2.45a.1.1 0 0 0 .129 0l2.896-2.46h4.436a.1.1 0 0 0 .1-.1V15l2.452-2.938a.1.1 0 0 0 0-.128l-2.452-2.95V4.563a.1.1 0 0 0-.1-.1h-4.423l-2.934-2.439a.1.1 0 0 0-.128 0Z"
      />
    </svg>
  );
};
export default Discount;
