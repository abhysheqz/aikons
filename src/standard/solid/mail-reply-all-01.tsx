import React from "react";
const MailReplyAll_01: React.FC<
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
        d="M12.46 12.96a1 1 0 0 1 0 1.415l-1.294 1.293 1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 4.932A2.93 2.93 0 0 1 3.932 2h15.64a2.93 2.93 0 0 1 2.932 2.932v6.996a.977.977 0 1 1-1.955 0v-4.71l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 7.218v9.444c0 .54.437.977.977.977h3.101a.977.977 0 1 1 0 1.955h-3.1A2.93 2.93 0 0 1 1 16.66z"
      />
      <path
        fill="currentColor"
        d="M17.752 14.668a4 4 0 0 1 4 4v2a1 1 0 0 1-2 0v-2a2 2 0 0 0-2-2h-1.293v1.293c0 .265-.097.543-.344.64a1 1 0 0 1-1.07-.226l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.07-.225c.247.096.344.374.344.64v1.292z"
      />
    </svg>
  );
};
export default MailReplyAll_01;
