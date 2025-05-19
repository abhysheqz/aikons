import React from "react";
const IdNotVerified: React.FC<
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
        d="M8.008 3.892a3.016 3.016 0 0 1 5.985 0l.181 1.453a1.25 1.25 0 0 1-1.24 1.405H9.067a1.25 1.25 0 0 1-1.24-1.405zM11 2.75c-.764 0-1.409.57-1.504 1.328L9.35 5.25h3.3l-.146-1.172A1.516 1.516 0 0 0 11 2.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.705 3.5a.75.75 0 0 1 .56-.25H17.5A2.75 2.75 0 0 1 20.25 6v6.386a6.2 6.2 0 0 0-2.75-.636 6.23 6.23 0 0 0-4.139 1.566c.21-.392.33-.842.33-1.316 0-1.5-1.19-2.75-2.698-2.75S8.296 10.5 8.296 12s1.189 2.75 2.697 2.75c.54 0 1.04-.16 1.459-.435a6.2 6.2 0 0 0-.797 1.468c-1.711-.184-3.5.41-4.705 1.707a.75.75 0 0 0 .55 1.26h3.794a6.24 6.24 0 0 0 2.144 4H4.5A2.75 2.75 0 0 1 1.75 20V6A2.75 2.75 0 0 1 4.5 3.25h4.238a.75.75 0 0 1 .745.837L9.347 5.25h3.306l-.134-1.164a.75.75 0 0 1 .186-.585"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-.47 3.22a.75.75 0 1 0-1.06 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l.47-.47.47.47a.75.75 0 1 0 1.06-1.06l-.47-.47.47-.47a.75.75 0 1 0-1.06-1.06l-.47.47z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IdNotVerified;
