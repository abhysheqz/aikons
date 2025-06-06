import React from "react";
const Accident: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 20a2 2 0 1 1-4 0m4 0a2 2 0 0 0-4 0m4 0h2a1 1 0 0 0 1-1v-2.985a1 1 0 0 0-.419-.814L7 13m-3.5 7H2m5-7H2m5 0L3.799 8.426A1 1 0 0 0 2.979 8H2M16.5 20a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0h-2a1 1 0 0 1-1-1v-2.985a1 1 0 0 1 .419-.814L17 13m3.5 7H22m0-12h-.98a1 1 0 0 0-.819.426L17 13m5 0h-5M9.5 10 7 7.445 9 7 7.593 3.007 11 4.5 12.453 2 13.5 6 17 4.983 15.035 10M12.5 10 12 8"
      />
    </svg>
  );
};
export default Accident;
