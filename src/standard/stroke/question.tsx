import React from "react";
const Question: React.FC<
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
        d="M13 22v.75a.75.75 0 0 0 .75-.75zM2 22h-.75c0 .414.336.75.75.75zm11-.75H2v1.5h11zM2.75 22c0-2.282 2.058-4.25 4.75-4.25v-1.5c-3.383 0-6.25 2.509-6.25 5.75zm4.75-4.25c2.692 0 4.75 1.968 4.75 4.25h1.5c0-3.241-2.867-5.75-6.25-5.75zM9.25 12a1.75 1.75 0 0 1-1.75 1.75v1.5A3.25 3.25 0 0 0 10.75 12zM7.5 13.75A1.75 1.75 0 0 1 5.75 12h-1.5a3.25 3.25 0 0 0 3.25 3.25zM5.75 12c0-.966.784-1.75 1.75-1.75v-1.5A3.25 3.25 0 0 0 4.25 12zm1.75-1.75c.966 0 1.75.784 1.75 1.75h1.5A3.25 3.25 0 0 0 7.5 8.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 6.783c0 2.642-2.239 4.784-5 4.784q-.488 0-.967-.09c-.23-.043-.345-.064-.425-.052s-.194.072-.42.193a3.25 3.25 0 0 1-2.112.329c.273-.337.46-.741.543-1.175.05-.265-.074-.522-.26-.71A4.66 4.66 0 0 1 12 6.783C12 4.142 14.239 2 17 2s5 2.142 5 4.783M15.5 7h.008m2.984 0h.008"
      />
    </svg>
  );
};
export default Question;
