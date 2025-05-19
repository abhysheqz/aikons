import React from "react";
const Flaticon: React.FC<
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
        d="M16.65 16.872c-.256.448-.871.11-1.143-.328l-2.534-4.073 1.845-3.358 3.822-6.658c.057-.1.147-.184.261-.199a.75.75 0 0 1 .628.214l3 3a.75.75 0 0 1 .121.902z"
      />
      <path
        fill="currentColor"
        d="M16 2.25c.228 0 .3.267.186.465l-2.818 4.908h-6.38l.913 2h4.356l-1.6 2.912 3.748 6.017c.22.352.356.842.011 1.072l-3 2a.75.75 0 0 1-1.06-.238l-9-15a.75.75 0 0 1 .114-.916l3-3A.75.75 0 0 1 5 2.25z"
      />
    </svg>
  );
};
export default Flaticon;
