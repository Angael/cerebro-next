// TODO: this "proxy" not needed when we merge fe and be
export const uploadFileFromLink = async (link: string) =>
  fetch("/api/upload-from-link", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ link }),
  }).then((res) => res.json());
