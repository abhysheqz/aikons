import React from "react";
const TouchLocked_03: React.FC<
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
        d="M18 13.25a2.25 2.25 0 0 0-2.25 2.25v.75h-1.5v6.5h7.5v-6.5h-1.5v-.75A2.25 2.25 0 0 0 18 13.25m.75 2.25v.75h-1.5v-.75a.75.75 0 0 1 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.755 1.25a2.5 2.5 0 0 0-2.5 2.5v8.12l-.896-.768a2.49 2.49 0 0 0-3.576 3.43l4.593 6.884A.75.75 0 0 0 8 21.75h4.75v-7h1.575a3.75 3.75 0 0 1 5.413-2.574A3.75 3.75 0 0 0 16 8.728h-3.745V3.75a2.5 2.5 0 0 0-2.5-2.5"
      />
    </svg>
  );
};
export default TouchLocked_03;
