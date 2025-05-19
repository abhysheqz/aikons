import React from "react";
const StarAward_02: React.FC<
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
        d="M4.25 9a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0m8.129-4.209.93 1.906a.43.43 0 0 0 .311.237l2.021.336c.343.057.48.495.235.752l-1.447 1.515a.46.46 0 0 0-.12.383l.32 2.115c.054.358-.304.63-.613.464l-1.823-.97a.41.41 0 0 0-.386 0l-1.823.97c-.31.165-.667-.106-.613-.464l.32-2.115a.46.46 0 0 0-.12-.383L8.125 8.022c-.245-.257-.109-.695.234-.752l2.02-.336a.43.43 0 0 0 .313-.237l.93-1.906a.417.417 0 0 1 .757 0M7.25 22.001v-5.355A8.96 8.96 0 0 0 12 18.002a8.96 8.96 0 0 0 4.75-1.355v5.355a.75.75 0 0 1-1.2.6L12 19.938l-3.55 2.663a.75.75 0 0 1-1.2-.6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StarAward_02;
