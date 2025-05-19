import React from "react";
const Headset: React.FC<
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
        d="M14.252 11c0-.966.784-1.75 1.75-1.75h1a4.75 4.75 0 0 1 0 9.5h-1a1.75 1.75 0 0 1-1.75-1.75zM2.252 14a4.75 4.75 0 0 1 4.75-4.75h1c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-1A4.75 4.75 0 0 1 2.252 14"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.271a7.756 7.756 0 0 0-7.756 7.756v2.919a1 1 0 0 1-2 0v-2.919c0-5.388 4.368-9.756 9.756-9.756s9.756 4.368 9.756 9.756v6.81a4.89 4.89 0 0 1-4.892 4.892H12a1 1 0 0 1 0-2h4.864a2.89 2.89 0 0 0 2.892-2.892v-6.81A7.756 7.756 0 0 0 12 3.271"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Headset;
