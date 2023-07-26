import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async (event) => {
  return new Response("test");
};

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const num1 = parseFloat(data.get("num1"));
  const num2 = parseFloat(data.get("num2"));
  const arithmetic = data.get("arithmetic");

  // console.log(num1, arithmetic, num2);
  let result;

  if (arithmetic === "+") {
    result = num1 + num2;
  } else if (arithmetic === "-") {
    result = num1 - num2;
  } else if (arithmetic === "*") {
    result = num1 * num2;
  } else if (arithmetic === "/") {
    result = num1 / num2;
  } else {
    result = "error";
  }

  // console.log(result);

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
