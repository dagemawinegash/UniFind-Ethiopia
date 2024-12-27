import api from "../api";
import data from "./data";

const PostUniversityComponent = () => {
  const postUniversities = async (data) => {
    try {
      const response = await api.post("/api/universities/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div>
      <button onClick={() => postUniversities(data)}>Post University Data</button>
    </div>
  );
};

export default PostUniversityComponent;
