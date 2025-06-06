import React from "react";
const Waiters: React.FC<
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
        d="M9.5 18.213a5 5 0 0 1-.326-.132 5.6 5.6 0 0 1-1.26-.785c-.925-.762-1.94-2.087-2.168-4.37A.75.75 0 0 0 5 12.25h-.5A2.75 2.75 0 0 0 1.75 15v6c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-6a2.75 2.75 0 0 0-2.75-2.75H14a.75.75 0 0 0-.746.675c-.229 2.283-1.243 3.608-2.168 4.37-.47.388-.926.636-1.26.786q-.197.088-.326.132"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.246 12.992c.321.598.503 1.282.503 2.008v6q-.002.396-.128.75H21.5a.75.75 0 0 0 .75-.75v-6a2.75 2.75 0 0 0-2.75-2.75H19a.75.75 0 0 0-.746.675z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.894 11.862a.75.75 0 0 1 .356.638v2a.75.75 0 0 1-1.085.67L9.5 14.339l-1.665.833A.75.75 0 0 1 6.75 14.5v-2a.75.75 0 0 1 1.085-.67l1.665.831 1.665-.832a.75.75 0 0 1 .73.033M5.75 6.063c0-2.091 1.664-3.813 3.75-3.813s3.75 1.722 3.75 3.813v.875c0 2.09-1.664 3.812-3.75 3.812S5.75 9.028 5.75 6.938z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.54 10.33c-.092.112-.047.284.095.318q.417.101.865.102c2.086 0 3.75-1.722 3.75-3.812v-.875c0-2.091-1.664-3.813-3.75-3.813a3.7 3.7 0 0 0-.865.102c-.142.034-.187.206-.095.318a5.35 5.35 0 0 1 1.21 3.393v.875a5.35 5.35 0 0 1-1.21 3.391"
      />
    </svg>
  );
};
export default Waiters;
