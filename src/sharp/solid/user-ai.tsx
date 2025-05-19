import React from "react";
const UserAi: React.FC<
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
        d="M20.986 8.4c.09-.444.341-.828.69-1.089A10.7 10.7 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c1.68 0 3.272.386 4.689 1.074-.262.348-.645.6-1.09.69l-1.6.327v3.318l1.6.327a1.82 1.82 0 0 1 1.415 1.415L17.34 10h3.318zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m1.598 2h-3.197a5 5 0 0 0-4.34 2.52l-.357.622A8.77 8.77 0 0 0 12 20.796a8.77 8.77 0 0 0 6.295-2.654l-.356-.623A5 5 0 0 0 13.6 15m6.163-13.15-.122-.6H18.36l-.122.6a3.07 3.07 0 0 1-2.39 2.389l-.6.122V5.64l.6.122a3.07 3.07 0 0 1 2.39 2.39l.122.599h1.278l.122-.6a3.07 3.07 0 0 1 2.39-2.389l.599-.122V4.36l-.6-.122a3.07 3.07 0 0 1-2.389-2.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserAi;
