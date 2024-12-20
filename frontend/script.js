const API_URL = " https://beryl-ember-havarti.glitch.me/users";

// Fetch and console.log all users
document.getElementById("fetch-users").addEventListener("click", async () => {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    console.log("Users:", users);
    

  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// Update user with ID 1
document.getElementById("update-user").addEventListener("click", async () => {
  try {
    const updatedUser = {
      name: "Alice",
      email: "alice@example.com",
      
    };
    const response = await fetch(`${API_URL}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    if (response.ok) {
      console.log("User updated successfully!");
    } else {
      console.error("Error updating user:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
});

// Delete user with ID 1
document.getElementById("delete-user").addEventListener("click", async () => {
  try {
    const response = await fetch(`${API_URL}/1`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("User deleted successfully!");
    } else {
      console.error("Error deleting user:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
});
