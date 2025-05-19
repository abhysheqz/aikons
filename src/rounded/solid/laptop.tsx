import React from "react";
const Laptop: React.FC<
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
        d="M15.553 2.75H8.446c-1.133 0-2.059 0-2.79.098-.764.103-1.426.325-1.955.854s-.75 1.19-.854 1.955c-.098.73-.098 1.656-.098 2.79v7.303h18.5V8.446c0-1.132 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954s-1.19-.751-1.955-.854c-.73-.098-1.656-.098-2.789-.098M21.817 17.25H2.182L.91 19.393l-.022.04c-.446.864.22 1.817 1.127 1.817h19.969c.906 0 1.572-.953 1.127-1.817l-.022-.04z"
      />
    </svg>
  );
};
export default Laptop;
