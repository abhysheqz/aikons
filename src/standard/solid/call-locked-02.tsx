import React from "react";
const CallLocked_02: React.FC<
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
        d="M19.5 5.518V4.75a2.75 2.75 0 0 0-5.5 0v.768a1.75 1.75 0 0 0-1.5 1.732v2.5c0 .966.783 1.75 1.75 1.75h5A1.75 1.75 0 0 0 21 9.75v-2.5a1.75 1.75 0 0 0-1.5-1.732m-4-.768a1.25 1.25 0 1 1 2.5 0v.75h-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.84 2.001H2.987A.98.98 0 0 0 2 3.004Q2.482 20.52 19.997 21A.98.98 0 0 0 21 20.013v-3.852a1 1 0 0 0-.594-.915l-3.386-1.505a1 1 0 0 0-.988.1l-2.58 1.842a.99.99 0 0 1-.976.102c-3.085-1.363-3.897-2.175-5.26-5.26a.99.99 0 0 1 .102-.977L9.16 6.97a1 1 0 0 0 .1-.989L7.755 2.595a1 1 0 0 0-.915-.594"
      />
    </svg>
  );
};
export default CallLocked_02;
