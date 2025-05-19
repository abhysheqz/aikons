import React from "react";
const AlignKeyObject: React.FC<
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
      <path fill="#fff" d="M15.875 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.875 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2h-12a1 1 0 0 1-1-1m-1 1a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m-15 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.125 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.125 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.125 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.499 19.756l1.369-1.497.763.85a1 1 0 1 0 1.489-1.334l-.902-1.006c.32-.355.51-.565.657-.697.15.134.344.347.67.711l.586.653a1 1 0 0 0 1.489-1.334l-.624-.696c-.3-.335-.59-.658-.86-.889-.3-.255-.712-.517-1.26-.517-.55 0-.962.262-1.261.517-.271.23-.56.554-.86.889l-.62.692-2.068 2.26a2.25 2.25 0 1 0 1.432 1.397"
      />
    </svg>
  );
};
export default AlignKeyObject;
