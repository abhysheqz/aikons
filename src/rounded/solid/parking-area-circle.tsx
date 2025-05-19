import React from "react";
const ParkingAreaCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M10.4 6h-.08c-.282 0-.629-.002-.938.098a2 2 0 0 0-1.284 1.284c-.1.31-.099.656-.098.937V18a1 1 0 1 0 2 0v-4h3a4 4 0 1 0 0-8zm2.6 6h-3V8.4c0-.197 0-.304.005-.383v-.011l.012-.001c.079-.004.186-.005.383-.005H13a2 2 0 1 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ParkingAreaCircle;
