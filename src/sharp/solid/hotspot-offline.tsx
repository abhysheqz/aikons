import React from "react";
const HotspotOffline: React.FC<
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
        d="M21.333 22.75 1.247 2.664 2.661 1.25l20.086 20.086zM12 5.25a9 9 0 0 1 9 9c0 .97-.153 1.903-.437 2.778l1.552 1.551c.57-1.329.885-2.793.885-4.33 0-6.074-4.925-11-11-11-1.537 0-3 .316-4.33.886l1.552 1.552A9 9 0 0 1 12 5.25"
      />
      <path
        fill="currentColor"
        d="M1 14.25c0 2.43.79 4.679 2.125 6.5l1.59-1.215A8.96 8.96 0 0 1 3 14.25a8.99 8.99 0 0 1 3.86-7.39L5.429 5.429A10.98 10.98 0 0 0 1 14.25M12 17.25a3 3 0 0 1-.674-5.924l3.598 3.598A3 3 0 0 1 12 17.25"
      />
      <path
        fill="currentColor"
        d="M7 14.25c0 1.061.33 2.044.894 2.853l-1.59 1.216A6.97 6.97 0 0 1 5 14.25c0-2.508 1.32-4.71 3.304-5.945l1.468 1.468A5 5 0 0 0 7 14.25M12 7.25a7 7 0 0 1 6.91 8.124l-1.983-1.983a5.005 5.005 0 0 0-4.068-4.068L10.875 7.34A7 7 0 0 1 12 7.25"
      />
    </svg>
  );
};
export default HotspotOffline;
