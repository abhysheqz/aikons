import React from "react";
const Inbox: React.FC<
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
        d="M2.25 3.225c0-.538.437-.975.975-.975h17.55c.539 0 .975.437.975.975v17.55a.975.975 0 0 1-.975.975H3.225a.975.975 0 0 1-.975-.975zM4.2 4.2V13h5.55v.75a2.25 2.25 0 1 0 4.5 0V13h5.55V4.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inbox;
