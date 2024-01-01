// TODO: this "proxy" not needed when we merge fe and be
export const getStatsFromLink = (link: string) =>
  fetch(
    "/api/upload-from-link?" +
      new URLSearchParams({
        link: link,
      }),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then((res) => res.json());
