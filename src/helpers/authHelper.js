import axios from "axios";
import Cookies from "js-cookie";

export async function handleRegister(email, password) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/register",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleLogin(email, password) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const token = response.data.data.token;
      const email = response.data.data.user.email;
      const user_id = response.data.data.user.id;
      Cookies.set("email", email, { expires: 1 });
      Cookies.set("user_id", user_id, { expires: 1 });
      Cookies.set("token", token, { expires: 1 });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleLogout() {
  try {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const user_id = Cookies.get("user_id");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/logout");
    // console.log(response);
    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("user_id");

    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
