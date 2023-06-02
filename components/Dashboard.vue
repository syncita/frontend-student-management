<template>
    <div class="dashboard">
      <div class="sidebar">
        <ul>
            <img src="@/image/student.png" alt="student" style="height: 80px;">
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div class="main-content">
        <h1>{{ pageTitle }}</h1>
        <p>Welcome to the {{ pageTitle }}!</p>
        <button @click="changePageTitle">Change Page Title</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pageTitle: 'Dashboard'
      }
    },
    methods: {
      changePageTitle() {
        this.pageTitle = 'Student Dashboard';
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    height: 600px;
    background: #f0f0f0;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style:inherit;
    font-size: 17px;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
  }
  </style>
  