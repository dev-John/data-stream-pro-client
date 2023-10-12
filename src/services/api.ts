export const importFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return await fetch("http://localhost:3333/import", {
    method: "POST",
    mode: "cors",
    body: formData,
  }).catch((err) => {
    console.log(`Something wrong occured: ${err}`);
  });
};
