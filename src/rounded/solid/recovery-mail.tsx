import React from "react";
const RecoveryMail: React.FC<
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
        d="M9.02 2.289c1.954-.05 4.004-.05 5.957 0H15c1.515.038 2.735.069 3.713.239 1.03.18 1.866.523 2.573 1.233.704.706 1.046 1.53 1.222 2.544.168.964.193 2.161.225 3.644.012.6.018 1.24.015 1.87a1.997 1.997 0 0 0-2.639.42 5.5 5.5 0 0 0-6.061 8.492c-1.667.028-3.381.021-5.026-.02-1.525-.038-2.752-.069-3.735-.24-1.03-.18-1.867-.523-2.573-1.233-.704-.707-1.046-1.531-1.222-2.544-.168-.964-.193-2.161-.225-3.644h-.001c-.021-.997-.02-2.105.002-3.1v-.028c.032-1.47.057-2.659.224-3.617.176-1.013.518-1.838 1.222-2.544.706-.71 1.543-1.054 2.573-1.233.983-.171 2.21-.202 3.735-.24M7.383 7.354a.75.75 0 1 0-.764 1.291l2.942 1.74c.871.515 1.623.865 2.44.865.818 0 1.569-.35 2.44-.865l2.942-1.74a.75.75 0 1 0-.764-1.29l-2.942 1.739c-.844.499-1.293.656-1.676.656s-.832-.157-1.676-.656z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.663 12.75a.75.75 0 0 1 .75.75V16a.75.75 0 0 1-.697.747l-2.236.158a.75.75 0 0 1-.105-1.496l.84-.06a2.75 2.75 0 1 0-1.716 4.9c1.282 0 2.454-.861 2.782-1.963a.75.75 0 1 1 1.438.428c-.533 1.788-2.329 3.035-4.219 3.035A4.25 4.25 0 1 1 20.913 14v-.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RecoveryMail;
