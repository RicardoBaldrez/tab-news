import database from "@/infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 4 * 2 as multiply;");
  console.log(result.rows);
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
