import React from "react";
const Matches: React.FC<
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
        d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5h-2V3H7v5H5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 9 4.25m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm9.5 9.278c0 1.74-1.486 3.15-3.32 3.15-2.56 0-4.046-2.626-3.602-5.175.057-.325.085-.487.148-.503s.192.148.451.475c.27.341.669.517 1.007.607.26.07.39.104.506.017.117-.087.121-.25.13-.578.024-.903.226-2.523 1.29-3.466.197-.175.295-.262.405-.224.11.037.14.194.2.507.19.988.79 1.665 1.386 2.336.703.793 1.399 1.577 1.399 2.854"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Matches;
