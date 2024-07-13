export const fetch_slack_channels = async () => {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/fetch_slack_channels", options);

    const status = response.status;
    console.log(status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { status, data };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetch_users = async () => {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/fetch_users_list", options);

    const status = response.status;
    console.log(status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { status, data };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
