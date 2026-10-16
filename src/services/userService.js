import { toast } from "sonner";

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  toast.message("Logout successfull!", {
    description: `You are logout successfully`,
    duration: 4000,
    type: "success",
  });
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");

  return user ? JSON.parse(user) : null;
};
