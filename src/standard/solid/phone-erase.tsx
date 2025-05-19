import React from "react";
const PhoneErase: React.FC<
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
        d="M13.043 8.293a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.293a1 1 0 1 1 1.414 1.414L18.164 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414L15.336 12l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.667 1.25c-1.335 0-2.417 1.094-2.417 2.443v16.614c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443v-3.34a.967.967 0 1 0-1.933 0V19H5.183V3.692c0-.27.217-.489.484-.489h2.302l.216.437c.164.331.499.54.865.54h2.9c.366 0 .7-.209.865-.54l.216-.437h2.302c.267 0 .484.219.484.489v3.341a.967.967 0 1 0 1.933 0v-3.34c0-1.35-1.082-2.443-2.417-2.443z"
      />
    </svg>
  );
};
export default PhoneErase;
