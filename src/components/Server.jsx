// apiService.js

const BASE_URL = 'https://stage.api.sloovi.com';

async function login(email, password) {
  const url = `${BASE_URL}/login`;
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

async function getTeam(companyId, accessToken) {
  const url = `${BASE_URL}/team?product=outreach&company_id=${companyId}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get Team error:', error);
    throw error;
  }
}

async function addTask(companyId, accessToken, assignedUser, taskDate, taskTime, isCompleted, timeZone, taskMsg) {
  const url = `${BASE_URL}/task/lead_65b171d46f3945549e3baa997e3fc4c2?company_id=${companyId}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    assigned_user: assignedUser,
    task_date: taskDate,
    task_time: taskTime,
    is_completed: isCompleted,
    time_zone: timeZone,
    task_msg: taskMsg,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Add Task error:', error);
    throw error;
  }
}

// Implement other API functions (getTasks, getTask, updateTask, deleteTask) in a similar manner

export default {
  login,
  getTeam,
  addTask,
  // Add other API functions here
};
