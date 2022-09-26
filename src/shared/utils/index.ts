import fsPromises from "fs/promises";
import path from "path";

export const getDataFromJson = async () => {
  const filePath = path.join(process.cwd(), "src/services/database.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
};
