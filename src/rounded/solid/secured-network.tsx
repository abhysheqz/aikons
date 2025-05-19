import React from "react";
const SecuredNetwork: React.FC<
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
        d="M12 1C9.51 1 7.5 3.03 7.5 5.52V7.97a6.75 6.75 0 1 0 9 0V5.52C16.5 3.03 14.49 1 12 1m2.5 5.728V5.521A2.51 2.51 0 0 0 12 3a2.51 2.51 0 0 0-2.5 2.52v1.208A6.7 6.7 0 0 1 12 6.25c.883 0 1.727.17 2.5.478M11 13a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 18a1 1 0 0 1 1 1v2h7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h7v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecuredNetwork;
