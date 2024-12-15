import toast from "react-hot-toast"

export const createToast = (message: string, emoji: string): any => {
    return toast(message, {
      icon: emoji,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
}