import React from "react";
const StoreVerified_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
      />
      <path
        fill="currentColor"
        d="M15.53 6.47a.75.75 0 1 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.75 7A5.75 5.75 0 0 0 17 1.25v1.5A4.25 4.25 0 0 1 21.25 7zM17 1.25A5.75 5.75 0 0 0 11.25 7h1.5A4.25 4.25 0 0 1 17 2.75zM11.25 7A5.75 5.75 0 0 0 17 12.75v-1.5A4.25 4.25 0 0 1 12.75 7zM17 12.75A5.75 5.75 0 0 0 22.75 7h-1.5A4.25 4.25 0 0 1 17 11.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 6H5a1 1 0 0 0-1 1v1l-2 3.667C2 13.232 3.209 14.5 4.7 14.5s2.7-1.268 2.7-2.833c0 1.889 1.923 2.833 3.6 2.833.674 0 1.387-.195 2-.5"
      />
    </svg>
  );
};
export default StoreVerified_02;
