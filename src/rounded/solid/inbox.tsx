import React from "react";
const Inbox: React.FC<
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
        d="M12.825 1.75c2.176 0 2.91 0 4.27.183 1.405.189 2.559.589 3.471 1.501.913.913 1.313 2.066 1.501 3.47.164 1.22.181 3.143.183 5.096l-.006 1.504c-.009 1.741-.048 3.15-.253 4.285-.21 1.157-.6 2.095-1.356 2.85-.858.858-1.95 1.245-3.327 1.43-1.344.181-3.064.181-5.255.181h-.114c-2.191 0-3.912 0-5.255-.18-1.377-.186-2.469-.573-3.327-1.43-.755-.756-1.147-1.694-1.356-2.85-.205-1.136-.244-2.545-.253-4.286L1.75 12c.002-1.953.02-3.876.183-5.095.189-1.405.589-2.558 1.501-3.47.913-.913 2.067-1.313 3.47-1.502C8.266 1.75 10 1.75 12.177 1.75zm7.26 5.421c.156 1.158.165 3.127.165 5.279a.3.3 0 0 1-.3.3h-3.38c-1.28 0-2.135 1.04-2.546 1.862-.29.582-.853 1.138-2.028 1.138s-1.738-.556-2.028-1.138c-.41-.822-1.266-1.862-2.546-1.862H4.05a.3.3 0 0 1-.3-.3c0-2.152.01-4.121.165-5.279.16-1.182.455-1.844.934-2.323.478-.478 1.14-.774 2.322-.933 1.212-.163 3.312-.165 5.58-.165 2.267 0 2.867.002 4.078.165 1.183.159 1.844.455 2.323.933.479.48.774 1.14.933 2.323"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inbox;
