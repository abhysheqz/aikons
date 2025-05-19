import React from "react";
const Option: React.FC<
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
        d="M7.189 6.056C6.68 6.001 6.025 6 5.044 6H4a1 1 0 1 1 0-2h1.096c.915 0 1.68 0 2.308.068.663.071 1.264.226 1.82.593.556.366.934.857 1.262 1.44.31.55.61 1.252.97 2.093l2.905 6.776c.386.901.646 1.504.896 1.95.239.423.425.62.62.75.196.128.45.222.934.274.508.055 1.164.056 2.145.056H20a1 1 0 1 1 0 2h-1.096c-.915 0-1.68 0-2.308-.068-.663-.071-1.264-.226-1.82-.593-.556-.366-.934-.857-1.262-1.44-.31-.55-.61-1.253-.97-2.093L9.638 9.03c-.386-.901-.646-1.504-.896-1.95-.239-.423-.425-.62-.62-.75-.196-.129-.45-.222-.934-.274"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Option;
