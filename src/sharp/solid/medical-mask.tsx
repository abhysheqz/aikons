import React from "react";
const MedicalMask: React.FC<
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
        d="M11.998 22.75c4.48 0 8.32-2.741 9.936-6.638l-4.685 1.442V18a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-.447l-4.687-1.442a10.75 10.75 0 0 0 9.936 6.639m10.748-10.542a10.8 10.8 0 0 1-.26 2.165l-5.237 1.611V14.04zM1.332 10.653C1.994 5.352 6.517 1.25 11.998 1.25s10.004 4.102 10.667 9.404l-5.416 1.805v-.46a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v.46zm.179 3.72a10.8 10.8 0 0 1-.261-2.166l5.499 1.833v1.944zm6.738-1.623v4.5h7.5v-4.5zm.457-5c-.651 0-1.276.259-1.737.72l1.06 1.06c.18-.18.423-.28.677-.28H10v-1.5zM14 9.25h1.293c.254 0 .497.1.677.28l1.06-1.06a2.46 2.46 0 0 0-1.737-.72h-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicalMask;
