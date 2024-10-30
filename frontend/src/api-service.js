export class API {
  static createCustomer(body) {
    return fetch("http://127.0.0.1:8000/commentbox/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => {
      if (!resp.ok) {
        return resp.json().then((errorDetails) => {
          console.error("Server error details:", errorDetails);
          throw new Error(`Server error: ${resp.status}`);
        });
      } else {
        console.log("success");
      }

      return resp.json();
    });
  }
}
