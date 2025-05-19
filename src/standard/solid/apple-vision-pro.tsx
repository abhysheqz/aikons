import React from "react";
const AppleVisionPro: React.FC<
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
        d="M3.982 7.361C5.786 6.251 8.457 5.75 12 5.75s6.214.5 8.018 1.611c1.875 1.154 2.732 2.913 2.732 5.139 0 1.893-.544 3.355-1.532 4.343-.986.986-2.32 1.407-3.718 1.407-1.506 0-2.676-.758-3.56-1.39q-.19-.135-.358-.258c-.305-.222-.567-.412-.827-.568-.351-.21-.584-.284-.755-.284s-.404.073-.755.284c-.26.156-.522.346-.827.568q-.167.123-.357.258c-.885.632-2.055 1.39-3.561 1.39-1.397 0-2.732-.421-3.718-1.407-.988-.989-1.532-2.45-1.532-4.343 0-2.226.857-3.985 2.732-5.139"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppleVisionPro;
