import React from "react";
const Configuration_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14.467v-3.934c2.857 0 4.716-3.103 3.27-5.566L8.734 3c1.464 2.494 5.07 2.494 6.534 0l3.464 1.967c-1.446 2.463.411 5.566 3.268 5.566v3.934c-2.857 0-4.713 3.103-3.266 5.566L15.269 22c-1.464-2.495-5.072-2.495-6.537 0"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.007 21.372-2.905-2.904 5.243-5.32C6.343 8.767 10.44 6.502 13.4 7.832c-.711.718-1.896 1.845-2.35 2.45-.996 1.695.898 3.005 2.16 2.11.507-.36 1.746-1.734 2.381-2.354 1.265 2.916-.534 5.252-2.559 5.993-.967.354-2.001.352-2.703.073z"
      />
    </svg>
  );
};
export default Configuration_02;
