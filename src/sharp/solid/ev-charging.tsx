import React from "react";
const EvCharging: React.FC<
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
        d="M22.751 8.703V3.849l-4.501 3L18.251 12h.59l.086.46.014.076c.065.343.129.678.181 1.012.115.723.17 1.386.09 1.982-.126.936-.875 1.727-1.91 1.925-.22.042-.51.045-1.302.045V19h.089c.67 0 1.115 0 1.494-.072 1.625-.31 2.898-1.58 3.116-3.198.11-.814.027-1.648-.095-2.416a36 36 0 0 0-.188-1.053l-.015-.08-.034-.18h.14l1.086-2.689z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 20.75h17v2h-17z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 2.228c0-.54.433-.978.967-.978h12.566c.534 0 .967.438.967.978v19.545c0 .54-.433.977-.967.977H3.467a.97.97 0 0 1-.967-.977zm12.567.977v7.045H4.433V3.205zm-4.19 9.711-1.248-.832-2.777 4.166h3l-1.223 1.834 1.248.832 2.778-4.166h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EvCharging;
