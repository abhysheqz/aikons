import React from "react";
const NewTwitter: React.FC<
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
        d="M2.357 2.781a.98.98 0 0 1 .868-.531H8.1c.313 0 .607.15.79.404l4.645 6.432 6.55-6.55a.975.975 0 1 1 1.38 1.378l-6.773 6.773 6.873 9.517a.975.975 0 0 1-.79 1.546H15.9a.98.98 0 0 1-.79-.404l-4.645-6.432-6.55 6.55a.975.975 0 1 1-1.38-1.378l6.773-6.773-6.873-9.517a.98.98 0 0 1-.078-1.015"
      />
    </svg>
  );
};
export default NewTwitter;
