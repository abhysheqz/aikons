import React from "react";
const SettingDone_04: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.55 13a3.5 3.5 0 1 1 5.613-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 10.5-4.708-8.007A1 1 0 0 0 16.43 2H7.572a1 1 0 0 0-.862.493l-4.412 7.5a1 1 0 0 0 0 1.014l4.412 7.5a1 1 0 0 0 .862.493H9"
      />
      <path
        fill="currentColor"
        d="M15.53 16.47a.75.75 0 1 0-1.06 1.06zm.97 2.03-.53.53a.75.75 0 0 0 1.106-.05zm3.076-2.52a.75.75 0 0 0-1.152-.96zM22.75 17A5.75 5.75 0 0 0 17 11.25v1.5A4.25 4.25 0 0 1 21.25 17zM17 11.25A5.75 5.75 0 0 0 11.25 17h1.5A4.25 4.25 0 0 1 17 12.75zM11.25 17A5.75 5.75 0 0 0 17 22.75v-1.5A4.25 4.25 0 0 1 12.75 17zM17 22.75A5.75 5.75 0 0 0 22.75 17h-1.5A4.25 4.25 0 0 1 17 21.25zm-2.53-5.22 1.5 1.5 1.06-1.06-1.5-1.5zm2.606 1.45 2.5-3-1.152-.96-2.5 3z"
      />
    </svg>
  );
};
export default SettingDone_04;
