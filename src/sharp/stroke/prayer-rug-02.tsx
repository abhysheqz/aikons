import React from "react";
const PrayerRug_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 4h-14v16h14z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.887 11.32c-1.143-2.05.49-2.949 1.744-3.823L12.5 7l.867.497c1.255.874 2.89 1.773 1.748 3.824-.2.36-.3.54-.334.668-.033.128-.033.278-.033.578L14.745 17h-4.49v-4.432c0-.3 0-.45-.034-.58-.033-.128-.134-.308-.334-.668Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 4V2M18.5 4V2M10.5 4V2M6.5 4V2M14.5 22v-2M18.5 22v-2M10.5 22v-2M6.5 22v-2"
      />
    </svg>
  );
};
export default PrayerRug_02;
