import React from "react";
const BloodBottle: React.FC<
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
        d="M3.25 2.25a1 1 0 0 1 1-1h13v2h-12v19.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 2v3h-2V2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.214 4.25a.96.96 0 0 0-.682.284.97.97 0 0 0-.282.685V18.78c0 .535.432.969.964.969h11.572a.967.967 0 0 0 .964-.969V5.22a.967.967 0 0 0-.964-.969zm.964 1.938h9.643v4.589c-2.218.599-3.343-.122-4.428-.817-1.252-.803-2.45-1.57-5.215-.232z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 18.75a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BloodBottle;
