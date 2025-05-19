import React from "react";
const Radar_02: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75M12 5a7 7 0 1 0 7 7 1 1 0 1 0-2 0 5 5 0 1 1-2.816-4.5.48.48 0 0 1 .133.761c-.073.078-.142.15-.196.203l-2.828 2.829a1 1 0 0 0 1.414 1.414l2.876-2.875c.303-.303.62-.62.835-.934.267-.39.44-.86.345-1.433a1.87 1.87 0 0 0-.706-1.192c-.278-.221-.692-.422-.998-.57A7 7 0 0 0 12 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radar_02;
