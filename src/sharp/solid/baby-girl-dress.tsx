import React from "react";
const BabyGirlDress: React.FC<
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
        d="M6 2.25a.75.75 0 0 0-.586.281l-4.002 5a.75.75 0 0 0 .2 1.112l4.408 2.644-2.884 5.767.242.363c1.748 2.617 4.977 4.333 8.624 4.333s6.876-1.716 8.624-4.334l.242-.362-2.885-5.769 4.402-2.642a.75.75 0 0 0 .2-1.112l-4-5A.75.75 0 0 0 18 2.25h-3.75V3a2.25 2.25 0 1 1-4.5 0v-.75zm5.998 9.494c-.513-.276-1.26-.386-2.054.04-.684.368-1.047 1.13-.921 1.953.125.817.708 1.629 1.75 2.304.317.206 1.225.459 1.225.459s.908-.253 1.225-.459c1.042-.675 1.625-1.487 1.75-2.304.126-.823-.237-1.585-.921-1.953-.794-.426-1.54-.316-2.054-.04"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyGirlDress;
