import axios from "axios";
import Cookies from "js-cookie";

export async function handleGenerateQuestion(uploadFormData) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/generate-question`,
      uploadFormData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const generateQuestionId = response.data.data.question_id;
    // console.log(generateQuestionId);
    return generateQuestionId;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleGetQuestionById(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/questions/${id}`
    );
    console.log(response);

    const getQuestionId = response.data.data.questions;
    return getQuestionId;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handlePostAnswer(answerData) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/user-answer",
      answerData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleSummaryFeedbackById(id) {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/feedback-summary/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);

    return response;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleGetAllFeedbackSummary() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/feedback-summaries`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleGetFeedBackSummary1() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/feedback-summaries`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.slice(0, 2);
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export async function handleGetStatistics() {
  try {
    const token = Cookies.get("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/statistics`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
