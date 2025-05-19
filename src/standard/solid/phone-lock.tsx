import React from "react";
const PhoneLock: React.FC<
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
        d="M19.25 10.75V10a2.25 2.25 0 0 0-4.5 0v.75h-.25c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25zm-3-.75a.75.75 0 0 1 1.5 0v.75h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.667 1.25c-1.335 0-2.417 1.094-2.417 2.443v16.614c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443v-2.34a.967.967 0 1 0-1.933 0V19H5.183V3.692c0-.27.217-.489.484-.489h2.302l.216.437c.164.331.499.54.865.54h2.9c.366 0 .7-.209.865-.54l.216-.437h2.302c.267 0 .484.219.484.489v2.341a.967.967 0 1 0 1.933 0v-2.34c0-1.35-1.082-2.443-2.417-2.443z"
      />
    </svg>
  );
};
export default PhoneLock;
