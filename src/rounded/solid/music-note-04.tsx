import React from "react";
const MusicNote_04: React.FC<
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
        d="m14.695 2.306.06.018A8 8 0 0 1 20.5 10a1 1 0 0 1-1.707.707c-.652-.652-1.886-1.499-3.1-1.919-1.091-.378-1.787-.306-2.193.035v8.177a5 5 0 1 1-2-4V4.936c0-.43 0-.874.066-1.244.08-.453.276-.91.735-1.253.42-.315.868-.41 1.324-.373.35.028.733.14 1.07.24"
      />
    </svg>
  );
};
export default MusicNote_04;
