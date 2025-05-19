import React from "react";
const SmartPhone_04: React.FC<
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
        d="M19.489 6.777C20.879 8.104 21.75 9.95 21.75 12s-.871 3.896-2.261 5.223a1 1 0 1 1-1.381-1.446C19.129 14.8 19.75 13.466 19.75 12s-.62-2.8-1.642-3.777a1 1 0 1 1 1.38-1.446m-2.048 2.25A4.1 4.1 0 0 1 18.726 12c0 1.17-.498 2.222-1.285 2.973a1 1 0 0 1-1.382-1.446c.42-.4.667-.94.667-1.527s-.248-1.127-.667-1.527a1 1 0 0 1 1.382-1.446"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.667 1.25c-1.335 0-2.417 1.094-2.417 2.443v16.614c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443v-2.332a.967.967 0 1 0-1.933 0V19H4.183V3.692c0-.27.217-.489.484-.489h2.302l.216.437c.164.331.499.54.865.54h2.9c.366 0 .7-.209.865-.54l.216-.437h2.302c.267 0 .484.219.484.489v2.35a.967.967 0 1 0 1.933 0V3.692c0-1.35-1.082-2.443-2.417-2.443z"
      />
    </svg>
  );
};
export default SmartPhone_04;
