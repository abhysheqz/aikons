import React from "react";
const MoneySend_02: React.FC<
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
        d="m9.5 7.33 1.5-1.5V9h2V5.829l1.5 1.5 1.414-1.414L12 2.001 8.086 5.915z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 6.232c2.274.569 3.953.802 5.307.854l2.261 2.26v.905h4.5v-.904l3.097-3.098c1.409.081 2.52.28 3.335.483 1.2.3 2.068.764 2.068.764V22s-1.288-.7-2.432-.986c-.942-.236-2.381-.478-4.318-.478-2.443 0-3.755.474-5.775.743-1.985.265-4.331.254-8.407-.765l-.568-.142V6zm.568 12.962c1.228.29 2.274.478 3.187.59a4.005 4.005 0 0 0-3.187-3.219zm18.5-2.128c-1.264.227-2.4 1.012-2.896 2.09.942.1 1.719.25 2.328.402q.313.079.568.156zM11.999 11a3 3 0 1 0 .001 6 3 3 0 0 0-.001-6m6.519-3.14c.16 1.608 1.374 3.08 2.732 3.493V8.468a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 10.921c1.367-.284 2.537-1.308 2.995-2.477a30 30 0 0 1-2.995-.537z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.5 7.33 1.5-1.5V9h2V5.829l1.5 1.5 1.414-1.414L12 2.001 8.086 5.915z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.182 6.232c2.274.569 3.953.802 5.307.854l2.261 2.26v.905h4.5v-.904l3.097-3.098c1.409.081 2.52.28 3.335.483 1.2.3 2.068.764 2.068.764V22s-1.288-.7-2.432-.986c-.942-.236-2.381-.478-4.318-.478-2.443 0-3.755.474-5.775.743-1.985.265-4.331.254-8.407-.765l-.568-.142V6zm.568 12.962c1.228.29 2.274.478 3.187.59a4.005 4.005 0 0 0-3.187-3.219zm18.5-2.128c-1.264.227-2.4 1.012-2.896 2.09.942.1 1.719.25 2.328.402q.313.079.568.156zM11.999 11a3 3 0 1 0 .001 6 3 3 0 0 0-.001-6m6.519-3.14c.16 1.608 1.374 3.08 2.732 3.493V8.468a10 10 0 0 0-.932-.28 15 15 0 0 0-1.8-.33M2.75 10.921c1.367-.284 2.537-1.308 2.995-2.477a30 30 0 0 1-2.995-.537z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySend_02;
