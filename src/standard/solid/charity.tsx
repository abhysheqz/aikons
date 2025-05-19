import React from "react";
const Charity: React.FC<
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
        d="M2 17a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H4v4h16v-4h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 12c-2.466 0-4.5 1.963-4.5 4.429 0 .554.104 1.083.292 1.571H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-.792a4.4 4.4 0 0 0 .292-1.571C16.5 13.963 14.466 12 12 12M11.045 8.35a4.615 4.615 0 0 1-.813-1.467l3.643-.603a.25.25 0 0 1 .12.01l2.765.921a.75.75 0 1 0 .474-1.423l-2.765-.922a1.75 1.75 0 0 0-.84-.066l-4.398.729a.75.75 0 0 0-.627.74c0 .366.104.831.279 1.298.096.257.219.53.37.804l-2.229.744a2.75 2.75 0 0 1-3.423-1.588 1.627 1.627 0 0 1 .783-2.06l7.585-3.792a2.75 2.75 0 0 1 1.979-.186L20.2 3.258a.75.75 0 0 1 .546.721V10a.75.75 0 0 1-.75.75h-2.486a2.75 2.75 0 0 1-1.325-.34l-1.882-1.035h-.807a3.39 3.39 0 0 1-2.452-1.023"
      />
    </svg>
  );
};
export default Charity;
