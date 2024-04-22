import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useCallback, useMemo, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useNavigation } from "react-router-dom";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Drop() {
  const dropzoneRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // TODO: csv가 아닌 파일 드랍시 gsap으로 애니메이션
    if (acceptedFiles.length > 0) {
      console.log(acceptedFiles);
      navigate(`/data/${acceptedFiles[0].name}`);
    }
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "text/csv": [".csv"],
      },
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useGSAP(() => {
    gsap.to(".container", { x: 100 });
  }, []);

  return (
    <section ref={dropzoneRef} className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

export default Drop;
