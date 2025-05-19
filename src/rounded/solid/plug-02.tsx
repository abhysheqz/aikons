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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 5.685 4.413 10.34 10 10.724v-3.976a2.83 2.83 0 0 1-2.215-1.165l-.4-.563a6.85 6.85 0 0 1-1.257-3.42l-.122-1.513c-.085-1.042.786-1.837 1.764-1.837h.23V8a.75.75 0 1 1 1.5 0v2.25h2.5V8a.75.75 0 0 1 1.5 0v2.25h.23c.978 0 1.85.795 1.765 1.837l-.123 1.514a6.85 6.85 0 0 1-1.256 3.42l-.4.562a2.83 2.83 0 0 1-2.216 1.166v3.975c5.587-.385 10-5.04 10-10.724 0-5.937-4.813-10.75-10.75-10.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plug_02;
