import React from "react";
const Hut: React.FC<
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
        d="M6 12h12l2 10H4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 22 1-5h4l1 5M12 3.2 3 12h18zm0 0L13.479 2M12 3.2 10.521 2M12 12V8M8 12v-2M16 12v-2M2 22h20"
      />
    </svg>
  );
};
export default Hut;
