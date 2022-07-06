import REQUEST from "../../Services/Request";

export const LOGIN = async (e) => {
  return await REQUEST({
    method: "POST",
    url: "",
    data: e,
  }).catch((error) => console.log(error));
};
