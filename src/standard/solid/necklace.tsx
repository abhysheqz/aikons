import React from "react";
const Necklace: React.FC<
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
        d="M2.069 2.002a1 1 0 0 1 .935 1.061c-.066 1.044.676 4.029 5.347 5.482a1 1 0 0 1-.595 1.91C2.274 8.749.88 4.972 1.008 2.937a1 1 0 0 1 1.061-.935m19.862 0a1 1 0 0 1 1.061.935c.129 2.035-1.266 5.812-6.748 7.518a1 1 0 1 1-.594-1.91c4.67-1.453 5.412-4.438 5.346-5.482a1 1 0 0 1 .935-1.061M9.841 8.515A2 2 0 0 1 11.783 7h.439a2 2 0 0 1 1.94 1.515l.71 2.84c.293.073.598.188.911.356 1.574.845 2.292 2.823 1.825 4.79-.477 2.008-2.156 4.007-5.345 5.201a.75.75 0 0 1-.526 0C8.547 20.508 6.868 18.51 6.39 16.5c-.467-1.966.25-3.944 1.824-4.789.316-.169.623-.285.917-.358zm1.324 2.955q.084.031.163.065c.265.114.49.247.67.371a4 4 0 0 1 .84-.438L12.22 9h-.439z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Necklace;
