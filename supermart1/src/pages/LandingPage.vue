<template>
    <v-app>
      <v-main>
        <v-container fluid>
          <!-- Hero Section -->
          <v-row class="hero-section" align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1>Welcome to Our Platform</h1>
              <p class="subtitle-1">
                Discover innovative solutions designed to help you succeed.
              </p>
              <v-btn color="primary" large>Get Started</v-btn>
            </v-col>
          </v-row>
  
          <!-- Features Section -->
          <v-row class="features-section" justify="center" align="center" dense>
            <v-col cols="12" md="4" class="text-center">
              <v-icon size="64">mdi-speedometer</v-icon>
              <h2>Fast Performance</h2>
              <p>
                Enjoy lightning fast loading times and smooth navigation.
              </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon size="64">mdi-shield-check</v-icon>
              <h2>Robust Security</h2>
              <p>
                Your data is protected with top-of-the-line security features.
              </p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon size="64">mdi-responsive</v-icon>
              <h2>Responsive Design</h2>
              <p>
                Looks great on desktops, tablets, and mobile devices.
              </p>
            </v-col>
          </v-row>
  
          <!-- Call-to-Action Section -->
          <v-row class="cta-section" align="center" justify="center">
            <v-col cols="12" md="6" class="text-center">
              <h2>Ready to dive in?</h2>
              <v-btn color="primary" large>Sign Up Now</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  // This landing page is static; add any interactivity using the Composition API if needed.
  </script>
  
  <style scoped>
  .hero-section {
    background: url('https://via.placeholder.com/1500x600') center/cover no-repeat;
    padding: 100px 0;
    color: white;
  }
  
  .features-section {
    padding: 60px 0;
  }
  
  .cta-section {
    padding: 80px 0;
    background-color: #f5f5f5;
  }
  </style>
  