import React from "react";
const Plug_02: React.FC<
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
        d="M12 1.263c-5.937 0-10.75 4.813-10.75 10.75 0 5.685 4.413 10.34 10 10.724v-4.974h-.215a1.75 1.75 0 0 1-1.456-.78l-1.535-2.302a1.75 1.75 0 0 1-.294-.97v-2.698a.75.75 0 0 1 .75-.75h.75v-1.25a.75.75 0 1 1 1.5 0v1.25h2.5v-1.25a.75.75 0 0 1 1.5 0v1.25h.75a.75.75 0 0 1 .75.75v2.697c0 .346-.102.683-.294.97l-1.535 2.304a1.75 1.75 0 0 1-1.456.779h-.215v4.974c5.587-.385 10-5.04 10-10.724 0-5.937-4.813-10.75-10.75-10.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plug_02;
