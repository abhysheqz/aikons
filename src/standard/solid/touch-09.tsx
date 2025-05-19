import React from "react";
const Touch_09: React.FC<
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
        d="m8.398 14.772 1.96-11.996a1.244 1.244 0 1 1 2.452.43l-1.07 6.858a.45.45 0 1 0 .886.155l.36-1.914a1.274 1.274 0 1 1 2.508.443l-.364 1.835a.45.45 0 1 0 .886.158l.177-.961a1.234 1.234 0 1 1 2.43.439l-.19.882a.45.45 0 0 0 .884.163c.164-.891.617-1.077 1.293-1.077.812 0 1.43.729 1.296 1.53l-1.164 7.38a3.75 3.75 0 0 1-3.701 3.152l-7.637.002a3.75 3.75 0 0 1-3.316-1.997c-.73-1.383-2.397-4.565-3.336-6.358a1.524 1.524 0 0 1 2.513-1.686l2.348 2.776a.45.45 0 0 0 .785-.214"
      />
    </svg>
  );
};
export default Touch_09;
