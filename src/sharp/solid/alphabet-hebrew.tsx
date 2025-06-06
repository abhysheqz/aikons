import React from "react";
const AlphabetHebrew: React.FC<
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
        d="m17.439 3.397.894-.449.895-.448.001.002.002.004.004.009.011.023.032.07q.038.088.096.239a8 8 0 0 1 .263.862c.186.747.363 1.833.363 3.257 0 1.718-.203 5.754-3.692 8.363 1.278 1.506 2.505 3.196 3.576 5.228l-1.768.94c-1.894-3.594-4.305-6.032-6.778-8.533l-.266-.27a78 78 0 0 1-2.265-2.362C6.21 12.382 6 15.363 6 16.938c0 1.272.17 2.207.33 2.807.08.3.157.517.211.651q.041.102.06.14l.011.024-.002-.005v-.001c-.001 0-.002-.002-.883.473l-.882.473-.001-.002-.002-.004-.005-.009-.012-.024-.035-.072a5 5 0 0 1-.105-.244 8 8 0 0 1-.288-.88C4.194 19.5 4 18.391 4 16.937c0-1.683.208-5.483 3.496-8.126-1.27-1.562-2.444-3.317-3.407-5.449l1.822-.83C7.58 6.228 9.94 8.7 12.49 11.28l.31.313a103 103 0 0 1 2.164 2.232C17.775 11.826 18 8.628 18 6.965c0-1.254-.156-2.176-.303-2.769a6 6 0 0 0-.196-.644l-.055-.138q-.01-.019-.01-.024l.002.005zM6.612 20.56q.002.002 0 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetHebrew;
