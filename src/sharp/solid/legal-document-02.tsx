import React from "react";
const LegalDocument_02: React.FC<
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
        d="M2.47 1.47A.75.75 0 0 1 3 1.25h18a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53m4.312 6.28H6v-1.5h12v1.5h-.782q.064.08.127.163c.202.262.416.571.584.89.158.299.321.69.321 1.097 0 1.252-.962 2.35-2.25 2.35-1.287 0-2.25-1.098-2.25-2.35 0-.406.163-.798.321-1.098.168-.318.383-.627.584-.89l.127-.162H12.75v5.5H14v1.5h-4v-1.5h1.25v-5.5H9.218q.064.08.127.163c.201.262.416.571.584.89.158.299.321.69.321 1.097 0 1.252-.963 2.35-2.25 2.35S5.75 11.152 5.75 9.9c0-.406.163-.798.321-1.098a6.5 6.5 0 0 1 .584-.89zM8 17.75h8v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LegalDocument_02;
