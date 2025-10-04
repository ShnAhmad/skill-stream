import Swal from "sweetalert2";

export const successAlert = (message, title = "Success") => {
  return Swal.fire({
    icon: "success",
    title,
    text: message,
    confirmButtonText: "OK",
    confirmButtonColor: "var(--color-primary)",
    timer: 1500,
    showConfirmButton: false,
    timerProgressBar: true,
    customClass: {
      container: "custom-swal-container",
    },
  });
};

export const errorAlert = (message, title = "Oops!") => {
  return Swal.fire({
    icon: "error",
    title,
    text: message,
    confirmButtonText: "OK",
    confirmButtonColor: "var(--color-primary)",
    customClass: {
      container: "custom-swal-container",
    },
  });
};

export const loadingAlert = (message = "Please wait...", title = "Loading") => {
  Swal.fire({
    title,
    text: message,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
    customClass: {
      container: "custom-swal-container",
    },
  });
};

export const closeAlert = () => {
  Swal.close();
};
