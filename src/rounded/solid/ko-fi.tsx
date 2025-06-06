import React from "react";
const KoFi: React.FC<
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
        d="M3.955 4.75H17a5.75 5.75 0 0 1 0 11.5h-.255a8 8 0 0 1-.016.395 2.8 2.8 0 0 1-.188.907 2.75 2.75 0 0 1-1.489 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.345-.08-2.243V7.455c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M2.823 6.323l.003-.001.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03h13a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 0-.75.75c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095v-7c0-.493.002-.787.03-.997a.7.7 0 0 1 .042-.177zM15.25 8a.75.75 0 0 1 .75-.75h1a3.25 3.25 0 0 1 0 6.5h-1a.75.75 0 0 1-.75-.75zm1.5.75v3.5H17a1.75 1.75 0 1 0 0-3.5zm-8.409-.064a2.187 2.187 0 0 0-3.182 0 2.41 2.41 0 0 0 0 3.314L9 16l3.841-4a2.41 2.41 0 0 0 0-3.314 2.187 2.187 0 0 0-3.182 0L9 9.373z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KoFi;
