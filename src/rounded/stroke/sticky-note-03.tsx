import React from "react";
const StickyNote_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 20.5V20c0-2.828 0-4.243.879-5.121C15.757 14 17.172 14 20 14h.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 3h-2C7.229 3 5.343 3 4.172 4.172S3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h1.343c.818 0 1.226 0 1.594-.152s.657-.441 1.235-1.02l4.656-4.656c.579-.578.867-.867 1.02-1.235.152-.368.152-.776.152-1.594V11c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3"
      />
    </svg>
  );
};
export default StickyNote_03;
