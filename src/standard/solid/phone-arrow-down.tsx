import React from "react";
const PhoneArrowDown: React.FC<
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
        d="M11.293 15.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 12.586V8a1 1 0 1 0-2 0v4.586l-1.293-1.293a1 1 0 0 0-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.167 1.25c-1.335 0-2.417 1.094-2.417 2.443v16.614c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443V3.693c0-1.35-1.082-2.443-2.417-2.443zM17.317 19H6.683V3.692c0-.27.217-.489.484-.489h2.302l.216.437c.164.331.499.54.865.54h2.9c.366 0 .7-.209.865-.54l.216-.437h2.302c.267 0 .484.219.484.489z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneArrowDown;
