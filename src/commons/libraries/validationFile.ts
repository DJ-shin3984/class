import Swal from "sweetalert2";

const swalErr = (title: string) => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title,
    showConfirmButton: false,
    timer: 2000,
  });
  return false;
};

export const checkValidationFile = (itemFile?: File): boolean => {
  if (typeof itemFile === "undefined") {
    swalErr("파일이 없습니다.");
  }

  if (itemFile.size > 5 * 1024 * 1024) {
    swalErr("용량이 너무 큽니다 (제한: 5MB)");
  }

  if (!itemFile.type.includes("jpeg") && !itemFile.type.includes("png")) {
    swalErr("jpg,jpeg,png 만 업로드 가능합니다.");
  }

  return true;
};
