import React from "react";
const RecoveryMail: React.FC<
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
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v12A2.75 2.75 0 0 0 4 19.75h9.48a5.5 5.5 0 0 1 6.63-7.51c.367-.451.926-.74 1.553-.74h1.087V5A2.75 2.75 0 0 0 20 2.25zm1.343 4.39a.75.75 0 0 1 1.018-.297l4.993 2.744c.397.218.895.218 1.293 0l4.992-2.744a.75.75 0 0 1 .722 1.315L13.37 10.4a2.86 2.86 0 0 1-2.738 0L5.64 7.658a.75.75 0 0 1-.296-1.019m17.07 6.86a.75.75 0 0 0-1.5 0v.5A4.25 4.25 0 1 0 18.5 21.75c1.89 0 3.686-1.246 4.219-3.035a.75.75 0 0 0-1.438-.428c-.328 1.103-1.5 1.964-2.781 1.964a2.75 2.75 0 1 1 1.715-4.9l-.84.06a.75.75 0 0 0 .105 1.496l2.236-.158a.75.75 0 0 0 .697-.748z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RecoveryMail;
