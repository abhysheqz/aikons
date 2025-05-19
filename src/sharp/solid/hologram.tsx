import React from "react";
const Hologram: React.FC<
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
        d="m6.042 19.087 1.5-4.837 1.916.556-1.5 4.836zm10.416-4.837 1.5 4.837-1.916.555-1.5-4.836zM11 19.365v-3.87h2v3.87zm10 3.385H3v-1.935h18zM12.335 1.33a.75.75 0 0 0-.67 0l-5 2.5a.75.75 0 0 0-.415.67v6c0 .284.16.544.415.67l5 2.5a.75.75 0 0 0 .67 0l5-2.5a.75.75 0 0 0 .415-.67v-6a.75.75 0 0 0-.415-.67zM11.25 7.462l-3.5-1.75v4.323l3.5 1.75zm5 2.573-3.5 1.75V7.463l3.5-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hologram;
