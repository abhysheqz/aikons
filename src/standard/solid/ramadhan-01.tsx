import React from "react";
const Ramadhan_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.076 2.568a.75.75 0 0 1-.006.873 7.868 7.868 0 0 0 10.99 10.99.75.75 0 0 1 1.16.817c-1.271 4.335-5.277 7.502-10.025 7.502-5.769 0-10.445-4.676-10.445-10.445 0-4.748 3.167-8.754 7.502-10.025a.75.75 0 0 1 .824.288"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.002 1.225c.293 0 .561.165.693.428l1.164 2.326 2.703.21a.775.775 0 0 1 .465 1.343l-1.924 1.774.549 2.53a.775.775 0 0 1-1.11.853l-2.54-1.3-2.54 1.3a.775.775 0 0 1-1.11-.854l.548-2.53-1.924-1.773a.775.775 0 0 1 .465-1.342l2.703-.21 1.165-2.327a.78.78 0 0 1 .693-.428"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ramadhan_01;
