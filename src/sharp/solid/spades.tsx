import React from "react";
const Spades: React.FC<
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
        d="M17.105 17.437c-.573.052-1.148.054-1.668.017l1.435 5.296H7.128l1.435-5.296c-.52.037-1.095.035-1.668-.017-1.06-.095-2.254-.372-3.109-1.01-.782-.585-1.259-1.311-1.445-2.138-.184-.81-.074-1.652.194-2.466.532-1.61 1.749-3.286 3.063-4.768 1.327-1.498 2.815-2.863 3.964-3.85.576-.494 1.07-.897 1.421-1.176C11.158 1.89 12 1.25 12 1.25s.841.64 1.017.78c.35.279.845.68 1.421 1.175 1.15.987 2.637 2.352 3.964 3.85 1.314 1.482 2.53 3.159 3.063 4.768.268.814.378 1.656.194 2.466-.186.827-.663 1.553-1.445 2.138-.855.638-2.049.915-3.11 1.01"
      />
    </svg>
  );
};
export default Spades;
